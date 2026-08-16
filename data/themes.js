/* ============================================================
   Side om side — THEMA'S + ZINNEN (databestand)
   SENTENCES = zinnen (type 'zin') met labels → verschijnen onder
   het bijhorende thema in "Dagelijks". Woorden komen uit words.js
   (zelfde label-mechanisme). THEMES = de tegels + metadata.
   De ❤️-zinnen zijn door Claude naar het Noors vertaald.
   ============================================================ */
(function(){
const Z=(o)=>Object.assign({type:'zin',episodes:[],src:'own'},o);

/* ---------- ZINNEN per thema ---------- */
window.SENTENCES = [

 /* Algemeen */
 Z({id:'s_alg1', deleted:true, labels:['alg'], src:'', bm:{nb:'Hvordan går det?', ph:'vor-DAN gohr deh?'}, nb:'Kordan går det?', nl:'Hoe gaat het?', ph:'kor-DAN gohr deh?'}),
 Z({id:'s_alg2', labels:['alg'], src:'', nb:'Det går fint, takk.', nl:'Het gaat goed, dank je.', ph:'deh gohr fient, tak'}),
 Z({id:'s_alg3', labels:['alg'], src:'', nb:'Kan du hjelpe meg?', nl:'Kan je me helpen?', ph:'kan duu YEL-pe mai?'}),
 Z({id:'s_alg4', labels:['alg'], src:'', bm:{nb:'Jeg forstår ikke helt.', ph:'jai for-STOHR IK-ke helt'}, nb:'Eg forstår ikkje helt.', nl:'Ik snap het niet helemaal.', ph:'eeg for-STOHR I-sje helt'}),
 Z({id:'s_alg5', labels:['alg'], src:'', nb:'Kan du si det en gang til?', nl:'Kan je dat nog een keer zeggen?', ph:'kan duu sie deh en gang til?'}),

 /* Slapen */
 Z({id:'s_slp1', labels:['slaap'], src:'', nb:'God natt, sov godt.', nl:'Goedenacht, slaap lekker.', ph:'goe nat, sohv got'}),
 Z({id:'s_slp2', labels:['slaap'], src:'', bm:{nb:'Jeg er kjempetrøtt.', ph:'jai aer SJEM-pe-treut'}, nb:'Eg er kjempetrøtt.', nl:'Ik ben doodmoe.', ph:'eeg aer SJEM-pe-treut'}),
 Z({id:'s_slp3', labels:['slaap'], src:'', nb:'Vi ses i morgen.', nl:'Tot morgen.', ph:'vie sees ie MOR-ohn'}),

 /* Keuken (zinnen; keuken-woorden staan in words.js) */
 Z({id:'s_kok1', labels:['keuken'], src:'', bm:{nb:'Hva skal vi lage til middag?', ph:'va skal vie LAA-ge til MID-dag?'}, nb:'Ka skal vi lage til middag?', nl:'Wat gaan we maken voor het avondeten?', ph:'ka skal vie LAA-ge til MID-dag?'}),
 Z({id:'s_kok2', labels:['keuken'], src:'', nb:'Maten er ferdig!', nl:'Het eten is klaar!', ph:'MAA-tn aer FAER-di!'}),
 Z({id:'s_kok3', labels:['keuken'], src:'', nb:'Vil du ha en kopp kaffe?', nl:'Wil je een kopje koffie?', ph:'vil duu ha en kop KAF-fe?'}),

 /* Kinderen */
 Z({id:'s_kid1', labels:['gezin'], src:'', nb:'Har du gjort leksene dine?', nl:'Heb je je huiswerk gemaakt?', ph:'har duu yoert LEK-se-ne DIE-ne?', pc:'Voor Emma (13) & Lene (11).'}),
 Z({id:'s_kid2', labels:['gezin'], src:'', nb:'Er du sulten?', nl:'Heb je honger?', ph:'aer duu SUL-tn?'}),
 Z({id:'s_kid3', labels:['gezin'], src:'', nb:'Kom, så spiser vi.', nl:'Kom, dan gaan we eten.', ph:'kom, soh SPIE-ser vie'}),
 Z({id:'s_own1', labels:['gezin'], src:'own', nb:'Er Lene fornøyd?', nl:'Is Lene blij?', ph:'aer LEE-ne for-NEUYD?', pc:'Eigen toevoeging.'}),

 /* Sport / buiten */
 Z({id:'s_spo1', labels:['sport'], src:'', nb:'Skal vi gå en tur i fjellet?', nl:'Zullen we een wandeling in de bergen maken?', ph:'skal vie goh en tuur ie FYEL-le?'}),
 Z({id:'s_spo2', labels:['sport'], src:'', nb:'Det er fint vær i dag.', nl:'Het is mooi weer vandaag.', ph:'deh aer fient vaer ie daag'}),

 /* Liefde ❤️ — door Claude naar het Noors vertaald */
 Z({id:'s_hart1', labels:['hart'], nb:'Har du lyst til å elske?', nl:'Heb je zin om te vrijen?', ph:'har duu luust til oh EL-ske?'}),
 Z({id:'s_hart2', labels:['hart'], bm:{nb:'Jeg vil holde deg hele natten.', ph:'jai vil HOL-le dai HEE-le NAT-tn'}, nb:'Eg vil holde deg hele natten.', nl:'Ik wil je heel de nacht vasthouden.', ph:'eeg vil HOL-le dai HEE-le NAT-tn'}),
 Z({id:'s_hart3', labels:['hart'], nb:'Du er så deilig varm.', nl:'Je bent zo lekker warm.', ph:'duu aer soh DAEI-li varm'}),
 Z({id:'s_hart4', labels:['hart'], nb:'Du er kjempemyk.', nl:'Je bent superzacht.', ph:'duu aer SJEM-pe-muuk'}),
 Z({id:'s_hart5', labels:['hart'], bm:{nb:'Jeg er helt gal etter leppene dine.', ph:'jai aer helt gaal ET-ter LEP-pe-ne DIE-ne'}, nb:'Eg er helt gal etter leppene dine.', nl:'Ik ben gek op je lippen.', ph:'eeg aer helt gaal ET-ter LEP-pe-ne DIE-ne'}),
 Z({id:'s_hart6', labels:['hart'], nb:'Du har kjempemyke lepper.', nl:'Je hebt superzachte lippen.', ph:'duu har SJEM-pe-muu-ke LEP-per'}),
 Z({id:'s_hart7', labels:['hart'], bm:{nb:'Jeg setter på litt avslappende musikk.', ph:'jai SET-ter poh lit AAV-slap-pen-de muu-SIK'}, nb:'Eg setter på litt avslappende musikk.', nl:'Ik zal wat rustgevende muziek opzetten.', ph:'eeg SET-ter poh lit AAV-slap-pen-de muu-SIK'}),
 Z({id:'s_hart8', labels:['hart'], bm:{nb:'Får jeg gi deg et lite kyss?', ph:'fohr jai jie dai et LIE-te sjuus?'}, nb:'Får eg gi deg et lite kyss?', nl:'Mag ik je een kusje geven?', ph:'fohr eeg jie dai et LIE-te sjuus?'}),
 Z({id:'s_hart9', labels:['hart'], nb:'Du har en nydelig rumpe.', nl:'Je hebt een prachtig achterwerk.', ph:'duu har en NUU-de-li RUM-pe'}),
 Z({id:'s_hart10', labels:['hart'], bm:{nb:'Får jeg massere ryggen din?', ph:'fohr jai ma-SEE-re RUUG-gn dien?'}, nb:'Får eg massere ryggen din?', nl:'Mag ik je rug masseren?', ph:'fohr eeg ma-SEE-re RUUG-gn dien?', phNL:'makh ik jə rukh ma-SEE-rən?',
    pc:'Andere lichaamsdelen: brystene (borsten) · rumpa (billen) · beina (benen) · lårene (dijen) · nakken (nek).'}),
 Z({id:'s_hart11', labels:['hart'], bm:{nb:'Får jeg skjemme deg litt bort?', ph:'fohr jai SJEM-me dai lit boort?'}, nb:'Får eg skjemme deg litt bort?', nl:'Mag ik je wat verwennen?', ph:'fohr eeg SJEM-me dai lit boort?', phNL:'makh ik jə wat vər-WEN-nən?'}),
 Z({id:'s_hart12', labels:['hart'], bm:{nb:'Hvor vil du bli kjælt?', ph:'vor vil duu blie sjelt?'}, nb:'Kor vil du bli kjælt?', nl:'Waar wil je verwend worden?', ph:'kor vil duu blie sjelt?', phNL:'waar wil jə vər-WENT WOR-dən?'}),

];

/* ---------- THEMA-TEGELS ---------- */
/* labels: welke item-labels onder dit thema vallen (woorden + zinnen) */
window.THEMES = [
 {id:'nils',    icon:'📘', name:'Nils (boek 1)',   labels:['nils']},
 {id:'alg',     icon:'💬', name:'Algemeen',        labels:['alg']},
 {id:'keuken',  icon:'🍳', name:'Keuken',          labels:['keuken']},
 {id:'lichaam', icon:'🧍', name:'Vrouwenlichaam',  labels:['lichaam']},
 {id:'hart',    icon:'❤️', name:'Liefde',          labels:['hart']},
 {id:'slaap',   icon:'☀️', name:'Slapen',          labels:['slaap']},
 {id:'gezin',   icon:'👧', name:'Kinderen',        labels:['gezin']},
 {id:'sport',   icon:'🥾', name:'Sport & buiten',  labels:['sport']},
 {id:'basis',   icon:'🔑', name:'Basiswoorden',    labels:['basis']},
];

/* ---------- SCHEMATISCHE LIJNTEKENING VROUWENLICHAAM ----------
   Voor- en achteraanzicht, NB-labels (blauw) + NL. Educatief-anatomisch. */
window.BODY_SVG = `
<svg viewBox="0 0 386 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:inherit">
  <style>
    .fig{fill:#f7f4ef;stroke:#3a4553;stroke-width:1.6;stroke-linejoin:round}
    .ln{stroke:#c3b8a6;stroke-width:1}
    .nb{fill:#1565c0;font-size:11px;font-weight:700}
    .nl{fill:#6b7480;font-size:9.5px}
    .cap{fill:#243244;font-size:11px;font-weight:800;text-anchor:middle}
    .dot{fill:#d61f2b}
  </style>

  <!-- ===== VOORAANZICHT (x~120) ===== -->
  <text class="cap" x="120" y="16">voorkant</text>
  <!-- hoofd + haar -->
  <path class="fig" d="M120 30 q-16 -2 -16 16 q0 14 16 16 q16 -2 16 -16 q0 -18 -16 -16 Z"/>
  <path class="ln" d="M104 40 q16 -20 32 0"/>
  <!-- hals + romp -->
  <path class="fig" d="M113 61 q7 6 14 0 l4 10 q14 6 16 24 q-8 6 -14 2 q-2 22 -6 40 q10 26 6 50
     q-14 6 -24 0 q-4 -24 6 -50 q-4 -18 -6 -40 q-6 4 -14 -2 q2 -18 16 -24 Z"/>
  <!-- borsten -->
  <path class="ln" d="M112 92 q8 9 15 1"/>
  <path class="ln" d="M128 92 q-1 9 -0 1"/>
  <circle class="dot" cx="112" cy="93" r="1.6"/><circle class="dot" cx="128" cy="93" r="1.6"/>
  <!-- armen -->
  <path class="fig" d="M99 76 q-12 20 -14 46 q3 3 7 1 q6 -22 12 -40 Z"/>
  <path class="fig" d="M141 76 q12 20 14 46 q-3 3 -7 1 q-6 -22 -12 -40 Z"/>
  <!-- benen -->
  <path class="fig" d="M108 188 q-3 60 -1 120 q7 3 11 0 q1 -60 2 -110 Z"/>
  <path class="fig" d="M132 188 q3 60 1 120 q-7 3 -11 0 q-1 -60 -2 -110 Z"/>

  <!-- labels voorkant (links) -->
  <line class="ln" x1="104" y1="34" x2="60" y2="30"/><text class="nb" x="6" y="28">hår</text><text class="nl" x="6" y="39">haar</text>
  <line class="ln" x1="112" y1="55" x2="60" y2="60"/><text class="nb" x="6" y="58">munn</text><text class="nl" x="6" y="69">mond · lepper=lippen</text>
  <line class="ln" x1="112" y1="93" x2="58" y2="96"/><text class="nb" x="6" y="94">bryst</text><text class="nl" x="6" y="105">borst</text>
  <line class="ln" x1="112" y1="140" x2="58" y2="145"/><text class="nb" x="6" y="143">mage</text><text class="nl" x="6" y="154">buik</text>
  <line class="ln" x1="86" y1="120" x2="58" y2="182"/><text class="nb" x="6" y="185">hånd</text><text class="nl" x="6" y="196">hand</text>
  <!-- labels voorkant (rechts) -->
  <line class="ln" x1="133" y1="150" x2="176" y2="150"/><text class="nb" x="178" y="148">hofte</text><text class="nl" x="178" y="159">heup</text>
  <line class="ln" x1="130" y1="210" x2="176" y2="212"/><text class="nb" x="178" y="210">lår</text><text class="nl" x="178" y="221">dij</text>
  <line class="ln" x1="130" y1="270" x2="176" y2="278"/><text class="nb" x="178" y="276">bein</text><text class="nl" x="178" y="287">been</text>

  <!-- ===== ACHTERAANZICHT (x~285) ===== -->
  <text class="cap" x="285" y="16">achterkant</text>
  <path class="fig" d="M285 30 q-16 -2 -16 16 q0 14 16 16 q16 -2 16 -16 q0 -18 -16 -16 Z"/>
  <path class="ln" d="M269 34 q16 -8 32 0 M285 30 v30"/>
  <path class="fig" d="M278 61 q7 6 14 0 l4 10 q14 6 16 24 q-8 6 -14 2 q-2 22 -6 40 q12 22 6 50
     q-14 8 -24 0 q-6 -28 6 -50 q-4 -18 -6 -40 q-6 4 -14 -2 q2 -18 16 -24 Z"/>
  <path class="ln" d="M285 78 v70"/>
  <!-- billen -->
  <path class="ln" d="M285 156 v34 M272 165 q13 14 26 0"/>
  <path class="fig" d="M264 76 q-12 20 -14 46 q3 3 7 1 q6 -22 12 -40 Z"/>
  <path class="fig" d="M306 76 q12 20 14 46 q-3 3 -7 1 q-6 -22 -12 -40 Z"/>
  <path class="fig" d="M273 188 q-3 60 -1 120 q7 3 11 0 q1 -60 2 -110 Z"/>
  <path class="fig" d="M297 188 q3 60 1 120 q-7 3 -11 0 q-1 -60 -2 -110 Z"/>

  <line class="ln" x1="285" y1="110" x2="330" y2="108"/><text class="nb" x="332" y="106">rygg</text><text class="nl" x="332" y="117">rug</text>
  <line class="ln" x1="285" y1="172" x2="330" y2="176"/><text class="nb" x="332" y="174">rumpe</text><text class="nl" x="332" y="185">billen</text>
</svg>`;
})();
