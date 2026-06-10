import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';

const PORT = Number(process.env.PORT || 8787);
function readConfiguredKey() {
  if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY;
  const configPath = process.env.OPENCLAW_CONFIG || `${os.homedir()}/.openclaw-autoclaw/openclaw.json`;
  try {
    const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const providers = data?.models?.providers || {};
    for (const [id, provider] of Object.entries(providers)) {
      if (!id.toLowerCase().includes('deepseek')) continue;
      const key = provider.apiKey || provider.key || provider.token;
      if (typeof key === 'string' && key.trim()) return key.trim();
    }
  } catch {}
  return '';
}

const API_KEY = readConfiguredKey();
const BASE_URL = (process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com').replace(/\/$/, '');
const MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash';

function send(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
  });
  res.end(payload);
}

async function readJson(req) {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') return send(res, 200, { ok: true });

  if (req.url === '/health') {
    return send(res, 200, {
      ok: Boolean(API_KEY),
      provider: 'deepseek',
      model: MODEL,
      reason: API_KEY ? 'ready' : 'missing DEEPSEEK_API_KEY',
    });
  }

  if (req.url !== '/api/deepseek' || req.method !== 'POST') {
    return send(res, 404, { error: 'not_found' });
  }

  if (!API_KEY) {
    return send(res, 401, { error: 'missing_deepseek_api_key' });
  }

  try {
    const body = await readJson(req);
    const upstream = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: body.model || MODEL,
        messages: body.messages || [],
        temperature: body.temperature ?? 0.82,
        max_tokens: body.max_tokens ?? 160,
        thinking: body.thinking ?? { type: 'disabled' },
        stream: false,
      }),
    });

    const text = await upstream.text();
    res.writeHead(upstream.status, {
      'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
    });
    res.end(text);
  } catch (error) {
    send(res, 500, { error: 'proxy_error', message: error?.message || String(error) });
  }
});

server.listen(PORT, () => {
  console.log(`DeepSeek proxy listening on http://localhost:${PORT} using ${MODEL}`);
});
