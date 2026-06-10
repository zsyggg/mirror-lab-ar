import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync(resolve('index.html'), 'utf8');

function assertIncludes(text, label) {
  if (!html.includes(text)) {
    throw new Error(`Missing ${label}: ${text}`);
  }
}

assertIncludes('createRobot', 'third-person robot builder');
assertIncludes('scanPulse', 'scanner pulse mechanic');
assertIncludes('ZERO', 'third suspect');
assertIncludes('CASE_ENDINGS', 'branching endings');
assertIncludes('personaReply', 'closed persona interrogation engine');
assertIncludes('render_game_to_text', 'game text state hook');
assertIncludes('./vendor/three/build/three.module.js', 'local three.js import map');
assertIncludes('空间者1号', 'renamed robot');
assertIncludes('assets/generated/cartoon-lab-floor-texture.png', 'cartoon floor texture');
assertIncludes('assets/generated/cartoon-lab-wall-texture.png', 'cartoon wall texture');
assertIncludes('assets/generated/cartoon-detective-operator.png', 'single detective story panel');
assertIncludes('assets/generated/cartoon-spacefarer-entry.png', 'spacefarer story panel');
assertIncludes('assets/generated/cartoon-mirror-reveal.png', 'cartoon mirror reveal panel');
assertIncludes('assets/generated/cartoon-yuki-portrait.png', 'Yuki portrait');
assertIncludes('assets/generated/cartoon-moran-portrait.png', 'Moran portrait');
assertIncludes('assets/generated/cartoon-lila-portrait.png', 'Lila portrait');
assertIncludes('assets/generated/cartoon-zero-portrait.png', 'Zero portrait');
assertIncludes('assets/generated/evidence-reactor-core.png', 'generated reactor evidence card');
assertIncludes('assets/generated/evidence-terminal-glitch.png', 'generated terminal evidence card');
assertIncludes('assets/generated/evidence-authorization-file.png', 'generated authorization evidence card');
assertIncludes('assets/generated/evidence-surveillance-gap.png', 'generated surveillance evidence card');
assertIncludes('assets/generated/evidence-yuki-note.png', 'generated Yuki note evidence card');
assertIncludes('assets/generated/scene-roundtable-tribunal.png', 'generated roundtable tribunal scene');
assertIncludes('addCartoonFloorEffects', 'full-room cartoon floor effects');
assertIncludes('TRUTH_IDS', 'randomized truth ids');
assertIncludes('shuffleTruthDeck', 'shuffled hidden truth deck');
assertIncludes('drawTruthBranch', 'non-repeating hidden truth draw');
assertIncludes('mirrorlab-truth-deck', 'persistent truth deck storage');
assertIncludes('caseSeed', 'non-spoiler case seed state');
assertIncludes('truthDeckLeft', 'truth deck remaining state');
assertIncludes('四局内不重复', 'non-spoiler branch rotation copy');
assertIncludes('PRIVATE_CLUES', 'second-round private clues');
assertIncludes('AI总结矛盾', 'assistant contradiction summary');
assertIncludes('askFree', 'free-form interrogation input');
assertIncludes('VOICE', 'voice profile selection');
assertIncludes('LOCAL_AI', 'local Ollama interrogation model');
assertIncludes('localhost:11434', 'Ollama endpoint');
assertIncludes('deepseek-v4-flash', 'DeepSeek Flash model');
assertIncludes('localhost:8787/api/deepseek', 'DeepSeek proxy endpoint');
assertIncludes('点击填入输入框', 'question templates fill input');
assertIncludes('voice-select', 'voice selector UI');
assertIncludes('logic-board', 'contradiction board UI');
assertIncludes('recordContradiction', 'contradiction card recorder');
assertIncludes('renderLogicBoard', 'contradiction board renderer');
assertIncludes('logicTag', 'question-to-contradiction tag mapping');
assertIncludes('contradictions', 'text state exposes contradiction cards');
assertIncludes('suspicion-board', 'non-spoiler suspicion heat board');
assertIncludes('suspicionHeat', 'text state exposes suspicion heat');
assertIncludes('renderSuspicionHeat', 'suspicion heat renderer');
assertIncludes('不等于真凶', 'non-spoiler heat disclaimer');
assertIncludes('tacticalReview', 'AI tactical contradiction review');
assertIncludes('AI战术复盘', 'AI tactical review contradiction card');
assertIncludes('queueTacticalReview', 'background tactical review queue');
assertIncludes('tacticalPending', 'background tactical review state');
assertIncludes('setThinking', 'AI busy interaction lock');
assertIncludes('isThinking', 'text state exposes AI busy lock');
assertIncludes('interrogateMode', 'interrogation strategy state');
assertIncludes('setInterrogateMode', 'interrogation strategy selector');
assertIncludes('modePressureFactor', 'strategy affects pressure gain');
assertIncludes('modeInstruction', 'strategy-aware AI prompt');
assertIncludes('设陷', 'trap interrogation mode');
assertIncludes('你还没有拼完整', 'non-spoiler pressure breakdown');
assertIncludes('pressureGain', 'interrogation pressure system');
assertIncludes('甩出证据', 'evidence presenting action');
assertIncludes('roundtable-stage', 'roundtable interrogation stage');
assertIncludes('ev-label', 'evidence image text labels');
assertIncludes('roundtableInterject', 'multi-suspect roundtable interjections');
assertIncludes('buildInterjectionPrompt', 'AI interjection prompt');
assertIncludes('buildEvidencePrompt', 'AI evidence reaction prompt');
assertIncludes('evidenceReply', 'AI evidence reaction call');
assertIncludes('evidenceFallback', 'fallback evidence reaction lines');
assertIncludes('证据反应', 'visible evidence reaction AI trace');
assertIncludes('aiProvider', 'text state exposes AI provider');
assertIncludes('aiTrace', 'visible AI call trace');
assertIncludes('roleKnowledge', 'suspect knowledge boundaries');
assertIncludes('personaVariant', 'truth-aware fallback persona variants');
assertIncludes('comic-next', 'manual paced comic advance');
assertIncludes('朗读中', 'comic narration lock state');
assertIncludes('roundtable-feed', 'visible roundtable discussion feed');
assertIncludes('seat.speaking', 'roundtable speaking highlight');
assertIncludes('seat-talk', 'suspect speech bubbles on seats');
assertIncludes('seatLines', 'text state exposes seat speech bubbles');
assertIncludes('function esc', 'HTML escaping helper for dynamic roundtable text');
assertIncludes('CASE_MECHANISMS', 'final deduction mechanism choices');
assertIncludes('TRUTH_SOLUTION', 'truth-specific final deduction solutions');
assertIncludes('selectTheory', 'final deduction segment selection');
assertIncludes('submitFinalTheory', 'final deduction submission');
assertIncludes('revealTheory', 'scored final deduction reveal');
assertIncludes('finalPick', 'text state exposes final deduction picks');
assertIncludes('责任核心', 'final deduction responsibility section');
assertIncludes('密室机制', 'final deduction mechanism section');
assertIncludes('关键证据', 'final deduction proof section');
assertIncludes('圆桌矛盾摘录', 'final deduction contradiction recap');
assertIncludes('deduce-logic', 'final deduction logic card layout');
assertIncludes('完整推理成立', 'full-chain deduction verdict');

if (/sk-[0-9a-f]{32}/.test(html)) {
  throw new Error('Embedded DeepSeek API key should not remain in the shipped game.');
}

for (const stale of ['豆包', 'M-07', 'Doubao', 'RIN']) {
  if (html.includes(stale)) {
    throw new Error(`Stale role/name should not remain: ${stale}`);
  }
}

console.log('static game checks passed');
