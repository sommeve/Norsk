/* ============================================================
   Side om side — GESPREKJES (databestand)      v11.16 · §53
   ------------------------------------------------------------
   Korte alledaagse gesprekjes uit het gezin Somme (Bergen).
   Hoofdtaal = BERGENS, bokmål als leeshulp in `bm` (§27).
   Klankspelling volgens §49 + §50:
     kj/tj → sj · æ → ae · ø → eu · y → u · å → oh
     øy → euy · ei → aei · lengte met een DUBBELE klinker
     klemtoon in HOOFDLETTERS · koppelteken = lettergreep
   Anti-hallucinatie (werkafspraak): elke vorm die Johanne nog
   moet bevestigen draagt `tbc:true` op de regel én staat in
   `cmt` opgesomd. Liever een open vraag dan een gegokte klank.

   ITEMTYPE `conv` — een gesprekje is ÉÉN item met een VARIABEL
   aantal regels (§53.1):
     · het hele gesprekje wordt in één keer gescoord (één veeg,
       één tik, één knop) — niet zin per zin;
     · elke regel is wél een aparte RIJ op de kaart, dus een
       regel is apart te highlighten (fluo, `data-row`);
     · bij een hide gaat al het Noors van álle regels tegelijk
       dicht (de blur staat per item, niet per rij).

   UITBREIDEN — JHS levert de volledige lijst later.
   Plak er gewoon een nieuw blok bij; er is niets anders te
   wijzigen, geen thema-indeling, geen teller, geen registratie.

     CV({id:'cv_xxx', title:'Korte titel',
       lines:[
         {sp:'A', nb:'…', nl:'…', ph:'…',
          bm:{nb:'…', ph:'…'}, tbc:true},
         {sp:'B', nb:'…', nl:'…', ph:'…'}
       ],
       cmt:'…'}),

   Velden per regel:
     sp  = spreker, 'A' of 'B' (vrij te kiezen, bv. 'J'/'Jo')
     nb  = de Bergense zin       (verplicht)
     nl  = de Nederlandse zin    (verplicht)
     ph  = de klankspelling      (verplicht)
     bm  = {nb, ph} — ENKEL als bokmål echt verschilt (§27)
     tbc = true → toont «(tbc)» achter de zin
   `nb`/`nl` van het hele item worden hieronder automatisch uit
   de regels samengesteld, zodat zoeken, tellen en de tekstbalk
   ongewijzigd blijven werken.
   ============================================================ */
(function(){

const CV=function(o){
  const L=o.lines||[];
  return Object.assign({
    type:'conv', kern:false, labels:['somme','conv'], episodes:[],
    src:'somme', who:'conv', cmt:'',
    nb:L.map(function(l){return l.nb;}).join(' '),
    nl:L.map(function(l){return l.nl;}).join(' ')
  },o);
};

window.CONV = [

/* ---------- 1 · de ochtend ---------- */
 CV({id:'cv_morgen', title:'Goeiemorgen — goed geslapen?',
   lines:[
     {sp:'A', nb:'God morgen!', nl:'Goeiemorgen!',
      ph:'goo-MOHRN'},
     {sp:'B', nb:'God morgen! Har du sovet godt?', nl:'Goeiemorgen! Heb je goed geslapen?',
      ph:'goo-MOHRN · har duu SOO-vet got'},
     {sp:'A', nb:'Ja, eg sov kjempegodt.', nl:'Ja, ik heb heel goed geslapen.',
      ph:'eg soov SJEM-pe-got', bm:{nb:'Ja, jeg sov kjempegodt.', ph:'jaei soov SJEM-pe-got'}},
     {sp:'B', nb:'Så bra! Vil du ha kaffi?', nl:'Fijn! Wil je koffie?',
      ph:'soh braa · vil duu haa KAF-fi', bm:{nb:'Så bra! Vil du ha kaffe?', ph:'vil duu haa KAF-fe'},
      tbc:true},
     {sp:'A', nb:'Ja takk, gjerne.', nl:'Ja graag.',
      ph:'jaa tak, JAER-ne'},
     {sp:'B', nb:'Eg lager frokost no.', nl:'Ik maak nu het ontbijt klaar.',
      ph:'eg LAA-ger FROO-kost noh', bm:{nb:'Jeg lager frokost nå.', ph:'jaei LAA-ger FROO-kost noh'}}
   ],
   cmt:'Het ochtendgesprekje van JHS. Bergens: eg (ik), no (nu — zoals in «No får du belite deg»). '
      +'(tbc) — te bevestigen door Johanne: (a) zegt men in Bergen «kaffi» of «kaffe»? '
      +'(b) klinkt «eg» als «eg» of eerder als «ee» (zonder hoorbare g)? '
      +'De klank van «god morgen» (goo-MOHRN) en «vær så god» (vaer-soh-GOO) is overgenomen van de bestaande Nils-kaarten, zodat er één waarheid blijft (§47.1).'}),

/* ---------- 2 · honger en eten ---------- */
 CV({id:'cv_sulten', title:'Honger — wat eten we?',
   lines:[
     {sp:'A', nb:'Eg er sulten.', nl:'Ik heb honger.',
      ph:'eg aer SUL-ten', bm:{nb:'Jeg er sulten.', ph:'jaei aer SUL-ten'}},
     {sp:'B', nb:'Ka vil du ha?', nl:'Wat wil je hebben?',
      ph:'kaa vil duu haa', bm:{nb:'Hva vil du ha?', ph:'vaa vil duu haa'}},
     {sp:'A', nb:'Ka har vi i kjøleskapet?', nl:'Wat hebben we in de koelkast?',
      ph:'kaa har vie ie SJEU-le-skaa-pe', bm:{nb:'Hva har vi i kjøleskapet?', ph:'vaa har vie ie SJEU-le-skaa-pe'}},
     {sp:'B', nb:'Det er brød og ost.', nl:'Er is brood en kaas.',
      ph:'de aer breu oh oost'},
     {sp:'A', nb:'Kan eg få litt melk òg?', nl:'Mag ik ook wat melk?',
      ph:'kan eg foh lit melk oh', bm:{nb:'Kan jeg få litt melk også?', ph:'kan jaei foh lit melk OH-soh'},
      tbc:true},
     {sp:'B', nb:'Vær så god!', nl:'Alsjeblieft! (bij het opdienen)',
      ph:'vaer-soh-GOO'},
     {sp:'A', nb:'Takk for maten!', nl:'Bedankt voor het eten!',
      ph:'tak for MAA-ten'}
   ],
   cmt:'Bergens: eg (ik), ka (wat — bevestigd door Johanne). '
      +'(tbc) — te bevestigen door Johanne: (a) schrijf je «òg» of «også» in het Bergens, '
      +'en klinkt het als «oh» of «OH-soh»? (b) zegt men in Bergen «sulten» of «svolten»? '
      +'(c) valt de slot-t van «kjøleskapet» in de spraak weg («skaa-pe») zoals hier genoteerd?'})

];
})();
