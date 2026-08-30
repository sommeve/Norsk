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
   Velden per gesprekje (v11.28 §71.1):
     title / sub     = Nederlandse titel + thema  → LINKS  boven de NL-kolom
     titleNO / subNO = Noorse titel + thema       → RECHTS boven de NO-kolom
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
 CV({id:'cv_morgen', labels:['somme','conv','next'],
   title:'Goeiemorgen — goed geslapen?', titleNO:'God morgen — har du sovet godt?',
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
 CV({id:'cv_sulten', labels:['somme','conv','next'],
   title:'Honger — wat eten we?', titleNO:'Eg er sulten — ka vil du ha?',
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
      +'(c) valt de slot-t van «kjøleskapet» in de spraak weg («skaa-pe») zoals hier genoteerd?'}),

/* ---------- v11.27 §70 — DE GESPREKKEN VAN JOHANNE ----------
   Bron: haar eigen document «Samtalestartere med barna» (2026-08-22), door JHS bezorgd.
   16 gesprekken, 151 regels, 5 thema's. Haar structuur is één op één overgenomen:
   · haar Heading 2 = de TITEL van het gesprek (hier in het Nederlands, want de titel moet
     leesbaar blijven wanneer de Noorse kolom dicht staat — §53.1);
   · haar Heading 1 = het THEMA, en dat is de nieuwe ONDERTITEL `sub`;
   · haar «Alternativ»-blokken staan op DEZELFDE kaart, gescheiden door een regel met
     `div` — je scrolt er dus doorheen, zoals JHS vroeg.
   · «Voksen» → [V], «Barn» → [B].
   ⚠ v11.28 §71.5 — OMGEZET NAAR BERGENS. Johanne leverde bokmål aan (jeg, hva, ikke);
     78 van de 151 regels dragen nu de Bergense vorm, met haar bokmål in `bm`. Enkel de
     door haar BEVESTIGDE vormen zijn toegepast (leerapp-noors.md):
       jeg→eg · hva→ka · hvor→kor · hvem→kem · hvorfor→koffor · hvordan→kordan
       ikke→ikkje · hun→hon · dere→dokker · deres→dokkers · noe→nokke · nå→no
     NIET omgezet, want niet bevestigd — staat op de vragenlijst voor Johanne:
       noen · også/òg · hvis · vet/veit · sulten/svolten · de -et-verledens.
   `jo:true` markeert ze voor de eenmalige startscore van §70.4. ---------- */
 CV({id:'jo_er_du_sulten', jo:true, labels:['conv','johanne'],
   title:'Heb je honger?', sub:'Eten en drinken', titleNO:'Er du sulten?', subNO:'Mat og drikke',
   lines:[
      {sp:'[V]', nb:'Er du sulten?', nl:'Heb je honger?', ph:'aer duu SUL-ten'},
      {sp:'[B]', nb:'Ja, veldig!', nl:'Ja, heel erg!', ph:'jaa, VEL-di'},
      {sp:'[V]', nb:'Ka har du lyst på?', nl:'Waar heb je zin in?', ph:'kaa haar duu LUST poh', bm:{nb:'Hva har du lyst på?', ph:'vaa haar duu LUST poh'}},
      {sp:'[B]', nb:'Eg har veldig lyst på pasta.', nl:'Ik heb heel veel zin in pasta.', ph:'eg haar VEL-di lust poh PAS-ta', bm:{nb:'Jeg har veldig lyst på pasta.', ph:'jaei haar VEL-di lust poh PAS-ta'}},
      {sp:'[V]', nb:'Pasta høres godt ut. Skal vi lage det sammen?', nl:'Pasta klinkt goed. Zullen we het samen maken?', ph:'PAS-ta HEU-res got uut. skal vii LAA-ge de SAM-men'},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Brød med Nutella!', nl:'Brood met Nutella!', ph:'breu mee nu-TEL-la'},
      {sp:'[V]', nb:'Nei, du har allerede spist det denne uken.', nl:'Nee, dat heb je deze week al gegeten.', ph:'naei, duu haar al-le-REE-de spist de DEN-ne UU-ken'},
      {sp:'[B]', nb:'Vær så snill!', nl:'Alsjeblieft, toe nou!', ph:'vaer soh SNIL'},
      {sp:'[V]', nb:'Ok, hvis du ikkje sier nokke til mamma 😘', nl:'Oké, als je niks tegen mama zegt 😘', ph:'oh-KEE, vis duu IK-kje SII-er NOK-ke til MAM-ma', bm:{nb:'Ok, hvis du ikke sier noe til mamma 😘', ph:'oh-KEE, vis duu IK-ke SII-er NOO-e til MAM-ma'}},
      {div:'Alternatief als het kind geen honger heeft', divNO:'Alternativ hvis barnet ikkje er sultent'},
      {sp:'[B]', nb:'Nei, eg er ikkje sulten.', nl:'Nee, ik heb geen honger.', ph:'naei, eg aer IK-kje SUL-ten', bm:{nb:'Nei, jeg er ikke sulten.', ph:'naei, jaei aer IK-ke SUL-ten'}},
      {sp:'[V]', nb:'Nei vel. Er du tørst da?', nl:'Nee, goed. Heb je dan dorst?', ph:'naei vel. aer duu TEURST daa'},
      {sp:'[B]', nb:'Litt.', nl:'Een beetje.', ph:'LIT'},
      {sp:'[V]', nb:'Har du lyst på vann, melk eller nokke annet?', nl:'Wil je water, melk of iets anders?', ph:'haar duu lust poh VANN, melk EL-ler NOK-ke AN-net', bm:{nb:'Har du lyst på vann, melk eller noe annet?', ph:'haar duu lust poh VANN, melk EL-ler NOO-e AN-net'}},
      {sp:'[B]', nb:'Kanskje litt melk.', nl:'Misschien een beetje melk.', ph:'KAN-sje lit melk'},
     ],
   cmt:'«Ha lyst på» is dé manier om zin in iets te zeggen; het «på» hoort er vast bij.'}),
 CV({id:'jo_hva_vil_du_ha_til_frokost', jo:true, labels:['conv','johanne'],
   title:'Wat wil je als ontbijt?', sub:'Eten en drinken', titleNO:'Ka vil du ha til frokost?', subNO:'Mat og drikke',
   lines:[
      {sp:'[V]', nb:'Ka har du lyst på til frokost i dag?', nl:'Waar heb je vandaag zin in als ontbijt?', ph:'kaa haar duu lust poh til FROO-kost i daag', bm:{nb:'Hva har du lyst på til frokost i dag?', ph:'vaa haar duu lust poh til FROO-kost i daag'}},
      {sp:'[B]', nb:'Eg vet ikkje.', nl:'Ik weet het niet.', ph:'eg veet IK-kje', bm:{nb:'Jeg vet ikke.', ph:'jaei veet IK-ke'}},
      {sp:'[V]', nb:'Nokke søtt eller nokke salt?', nl:'Iets zoets of iets hartigs?', ph:'NOK-ke seut EL-ler NOK-ke salt', bm:{nb:'Noe søtt eller noe salt?', ph:'NOO-e seut EL-ler NOO-e salt'}},
      {sp:'[B]', nb:'Nokke søtt.', nl:'Iets zoets.', ph:'NOK-ke SEUT', bm:{nb:'Noe søtt.', ph:'NOO-e SEUT'}},
      {sp:'[V]', nb:'Yoghurt med frukt, frokostblanding eller brød med syltetøy?', nl:'Yoghurt met fruit, ontbijtgranen of brood met jam?', ph:'JOO-gurt mee frukt, FROO-kost-blan-ning EL-ler breu mee SUL-te-teuy', tbc:true},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Eg er egentlig ikkje sulten.', nl:'Ik heb eigenlijk geen honger.', ph:'eg aer EE-gent-li IK-kje SUL-ten', bm:{nb:'Jeg er egentlig ikke sulten.', ph:'jaei aer EE-gent-li IK-ke SUL-ten'}, tbc:true},
      {sp:'[V]', nb:'Det er helt greit. Vil du bare ha nokke å drikke no?', nl:'Dat is helemaal prima. Wil je nu alleen iets drinken?', ph:'de aer helt GRAEIT. vil duu BAA-re haa NOK-ke oh DRIK-ke noh', bm:{nb:'Det er helt greit. Vil du bare ha noe å drikke nå?', ph:'de aer helt GRAEIT. vil duu BAA-re haa NOO-e oh DRIK-ke noh'}},
      {sp:'[B]', nb:'Ja, melk.', nl:'Ja, melk.', ph:'jaa, MELK'},
      {sp:'[V]', nb:'Vil du ha vanlig melk eller helt vilt, ristet melkeskum? 🙂', nl:'Wil je gewone melk of iets superwilds, geroosterd melkschuim? 🙂', ph:'vil duu haa VAAN-li melk EL-ler helt vilt, RIS-tet MEL-ke-skum'},
     ],
   cmt:'Na «noe» krijgt het bijvoeglijk naamwoord de t-vorm: noe søtt, noe salt.'}),
 CV({id:'jo_hva_skal_vi_ha_til_middag_', jo:true, labels:['conv','johanne'],
   title:'Wat eten we morgen als avondeten?', sub:'Eten en drinken', titleNO:'Ka skal vi ha til middag i morgen?', subNO:'Mat og drikke',
   lines:[
      {sp:'[V]', nb:'Ka har du lyst på til middag i morgen?', nl:'Waar heb je zin in als avondeten morgen?', ph:'kaa haar duu lust poh til MID-dag i MOR-ren', bm:{nb:'Hva har du lyst på til middag i morgen?', ph:'vaa haar duu lust poh til MID-dag i MOR-ren'}},
      {sp:'[B]', nb:'Pizza!', nl:'Pizza!', ph:'PIT-sa'},
      {sp:'[V]', nb:'Hjemmelaget eller kjøpepizza?', nl:'Zelfgemaakt of een gekochte pizza?', ph:'JEM-me-laa-get EL-ler SJEU-pe-pit-sa'},
      {sp:'[B]', nb:'Hjemmelaget.', nl:'Zelfgemaakt.', ph:'JEM-me-laa-get'},
      {sp:'[V]', nb:'Bra valg. Ka skal vi ha på den?', nl:'Goede keuze. Wat doen we erop?', ph:'braa VALG. kaa skal vii haa poh den', bm:{nb:'Bra valg. Hva skal vi ha på den?', ph:'braa VALG. vaa skal vii haa poh den'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Vet ikkje.', nl:'Weet ik niet.', ph:'veet IK-kje', bm:{nb:'Vet ikke.', ph:'veet IK-ke'}},
      {sp:'[V]', nb:'Skal eg gi deg tre forslag?', nl:'Zal ik je drie suggesties geven?', ph:'skal eg jii daei tree FOR-slaag', bm:{nb:'Skal jeg gi deg tre forslag?', ph:'skal jaei jii daei tree FOR-slaag'}},
      {sp:'[B]', nb:'Ja.', nl:'Ja.', ph:'JAA'},
      {sp:'[V]', nb:'Pai, taco eller fisk?', nl:'Hartige taart, taco of vis?', ph:'pai, TAA-ko EL-ler fisk'},
      {sp:'[B]', nb:'Taco!', nl:'Taco!', ph:'TAA-ko'},
     ],
   cmt:'«Skal» is hier gewoon de toekomst («gaan we»), niet «moeten».'}),
 CV({id:'jo_ettermiddagsmat_hamarretak', jo:true, labels:['conv','johanne'],
   title:'Tussendoortje / hamarretako', sub:'Eten en drinken', titleNO:'Ettermiddagsmat / hamarretako', subNO:'Mat og drikke',
   lines:[
      {sp:'[V]', nb:'Ka vil du ha til hamarretako i morgen?', nl:'Wat wil je morgen als tussendoortje?', ph:'kaa vil duu haa til ha-mar-re-TAA-ko i MOR-ren', bm:{nb:'Hva vil du ha til hamarretako i morgen?', ph:'vaa vil duu haa til ha-mar-re-TAA-ko i MOR-ren'}, tbc:true},
      {sp:'[B]', nb:'Kanskje en skive.', nl:'Misschien een boterham.', ph:'KAN-sje en SJII-ve'},
      {sp:'[V]', nb:'Ka vil du ha på den?', nl:'Wat wil je erop?', ph:'kaa vil duu haa poh den', bm:{nb:'Hva vil du ha på den?', ph:'vaa vil duu haa poh den'}},
      {sp:'[B]', nb:'Skinke og ost.', nl:'Ham en kaas.', ph:'SJIN-ke oh ost'},
      {sp:'[V]', nb:'Vil du ha med litt frukt også?', nl:'Wil je ook wat fruit mee?', ph:'vil duu haa mee lit frukt OH-soh'},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Eg vet ikkje.', nl:'Ik weet het niet.', ph:'eg veet IK-kje', bm:{nb:'Jeg vet ikke.', ph:'jaei veet IK-ke'}},
      {sp:'[V]', nb:'Ka hadde vært ekstra godt å finne i matboksen i morgen?', nl:'Wat zou er morgen extra lekker zijn om in je broodtrommel te vinden?', ph:'kaa HAD-de vaert EK-stra got oh FIN-ne i MAAT-bok-sen i MOR-ren', bm:{nb:'Hva hadde vært ekstra godt å finne i matboksen i morgen?', ph:'vaa HAD-de vaert EK-stra got oh FIN-ne i MAAT-bok-sen i MOR-ren'}},
      {sp:'[B]', nb:'Jordbær!', nl:'Aardbeien!', ph:'JUUR-baer'},
      {sp:'[V]', nb:'Da skal vi se om vi har noen.', nl:'Dan gaan we kijken of we die hebben.', ph:'daa skal vii see om vii haar NOO-en'},
     ],
   cmt:'«Hamarretako» is Baskisch voor tussendoortje en blijft onvertaald; het Noorse woord is «ettermiddagsmat».'}),
 CV({id:'jo_hvordan_var_skolen_i_dag', jo:true, labels:['conv','johanne'],
   title:'Hoe was het vandaag op school?', sub:'School', titleNO:'Kordan var skolen i dag?', subNO:'Skole',
   lines:[
      {sp:'[V]', nb:'Kordan var skolen i dag?', nl:'Hoe was het vandaag op school?', ph:'KOR-dan vaar SKOO-len i DAAG', bm:{nb:'Hvordan var skolen i dag?', ph:'VUR-dan vaar SKOO-len i DAAG'}},
      {sp:'[B]', nb:'Bra.', nl:'Goed.', ph:'BRAA'},
      {sp:'[V]', nb:'Var det nokke spesielt som skjedde?', nl:'Is er iets bijzonders gebeurd?', ph:'vaar de NOK-ke spe-SII-elt som SJED-de', bm:{nb:'Var det noe spesielt som skjedde?', ph:'vaar de NOO-e spe-SII-elt som SJED-de'}},
      {sp:'[B]', nb:'Vi gjorde nokke morsomt i naturfag.', nl:'We hebben iets leuks gedaan bij natuurkunde.', ph:'vii JUU-re NOK-ke MOSJ-omt i na-TUUR-faag', bm:{nb:'Vi gjorde noe morsomt i naturfag.', ph:'vii JUU-re NOO-e MOSJ-omt i na-TUUR-faag'}, tbc:true},
      {sp:'[V]', nb:'Å? Ka gjorde dokker?', nl:'O ja? Wat hebben jullie gedaan?', ph:'oh kaa JUU-re DOK-ker', bm:{nb:'Å? Hva gjorde dere?', ph:'oh vaa JUU-re DEE-re'}},
      {sp:'[B]', nb:'Vi gjorde et eksperiment.', nl:'We hebben een proefje gedaan.', ph:'vii JUU-re et eks-pe-ri-MENT'},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Dårlig.', nl:'Slecht.', ph:'DOHR-li'},
      {sp:'[V]', nb:'Uff. Ka skjedde?', nl:'Oei. Wat is er gebeurd?', ph:'uf kaa SJED-de', bm:{nb:'Uff. Hva skjedde?', ph:'uf vaa SJED-de'}},
      {sp:'[B]', nb:'Vennene mine var dumme. Eg var alene hele tiden. Det var mye bråk i klassen.', nl:'Mijn vrienden deden stom. Ik was de hele tijd alleen. Er was veel herrie in de klas.', ph:'VEN-ne-ne MII-ne vaar DUM-me eg vaar a-LEE-ne HEE-le TII-den de vaar MUU-e BROHK i KLAS-sen', bm:{nb:'Vennene mine var dumme. Jeg var alene hele tiden. Det var mye bråk i klassen.', ph:'VEN-ne-ne MII-ne vaar DUM-me jaei vaar a-LEE-ne HEE-le TII-den de vaar MUU-e BROHK i KLAS-sen'}},
      {sp:'[V]', nb:'Det høres ikkje nokke hyggelig ut. Har du lyst til å fortelle meg om det?', nl:'Dat klinkt niet bepaald fijn. Wil je me erover vertellen?', ph:'de HEU-res IK-kje NOK-ke HUG-ge-li uut haar duu LUST til oh for-TEL-le maei om de', bm:{nb:'Det høres ikke noe hyggelig ut. Har du lyst til å fortelle meg om det?', ph:'de HEU-res IK-ke NOO-e HUG-ge-li uut haar duu LUST til oh for-TEL-le maei om de'}},
     ],
   cmt:'Let op «skolen»: het lidwoord plakt achter aan het woord (de school).'}),
 CV({id:'jo_har_du_laert_noe_nytt', jo:true, labels:['conv','johanne'],
   title:'Heb je iets nieuws geleerd?', sub:'School', titleNO:'Har du lært nokke nytt?', subNO:'Skole',
   lines:[
      {sp:'[V]', nb:'Lærte du nokke nytt eller spennende i dag?', nl:'Heb je vandaag iets nieuws of spannends geleerd?', ph:'LAER-te duu NOK-ke NUT EL-ler SPEN-nen-de i DAAG', bm:{nb:'Lærte du noe nytt eller spennende i dag?', ph:'LAER-te duu NOO-e NUT EL-ler SPEN-nen-de i DAAG'}},
      {sp:'[B]', nb:'Ja, faktisk.', nl:'Ja, eigenlijk wel.', ph:'jaa FAK-tisk'},
      {sp:'[V]', nb:'Ka da?', nl:'Wat dan?', ph:'kaa DAA', bm:{nb:'Hva da?', ph:'vaa DAA'}},
      {sp:'[B]', nb:'Vi lærte om verdensrommet.', nl:'We hebben over de ruimte geleerd.', ph:'vii LAER-te om VAER-dens-rom-me'},
      {sp:'[V]', nb:'Kult! Ka var det mest interessante du lærte?', nl:'Gaaf! Wat was het interessantste dat je leerde?', ph:'KULT kaa vaar de mest in-te-re-SAN-te duu LAER-te', bm:{nb:'Kult! Hva var det mest interessante du lærte?', ph:'KULT vaa vaar de mest in-te-re-SAN-te duu LAER-te'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, ingenting.', nl:'Nee, niets.', ph:'naei ING-en-ting'},
      {sp:'[V]', nb:'Ingen store oppdagelser i dag altså?', nl:'Dus geen grote ontdekkingen vandaag?', ph:'ING-en STOO-re OP-daa-gel-ser i DAAG ALT-soh'},
      {sp:'[B]', nb:'Nei!', nl:'Nee!', ph:'NAEI'},
      {sp:'[V]', nb:'Var det i hvert fall nokke som var morsomt?', nl:'Was er in elk geval iets leuks?', ph:'vaar de i VAERT fal NOK-ke som vaar MOSJ-omt', bm:{nb:'Var det i hvert fall noe som var morsomt?', ph:'vaar de i VAERT fal NOO-e som vaar MOSJ-omt'}, tbc:true},
     ],
   cmt:'Na «noe» krijgt het bijvoeglijk naamwoord de onzijdige vorm: «noe nytt», niet «noe ny».'}),
 CV({id:'jo_hvordan_gikk_proven', jo:true, labels:['conv','johanne'],
   title:'Hoe ging de toets?', sub:'School', titleNO:'Kordan gikk prøven?', subNO:'Skole',
   lines:[
      {sp:'[V]', nb:'Kordan synes du prøven gikk?', nl:'Hoe vond je dat de toets ging?', ph:'KOR-dan SUU-nes duu PREU-ven JIK', bm:{nb:'Hvordan synes du prøven gikk?', ph:'VUR-dan SUU-nes duu PREU-ven JIK'}},
      {sp:'[B]', nb:'Ganske bra, tror eg.', nl:'Best goed, denk ik.', ph:'GANS-ke BRAA truur eg', bm:{nb:'Ganske bra, tror jeg.', ph:'GANS-ke BRAA truur jaei'}},
      {sp:'[V]', nb:'Var den omtrent slik du hadde forventet?', nl:'Was hij ongeveer zoals je had verwacht?', ph:'vaar den om-TRENT sliik duu HAD-de for-VEN-tet'},
      {sp:'[B]', nb:'Ja, men én oppgave var vanskelig.', nl:'Ja, maar één opgave was moeilijk.', ph:'jaa men EEN OP-gaa-ve vaar VANS-ke-li'},
      {sp:'[V]', nb:'Ka handlet den om?', nl:'Waar ging die over?', ph:'kaa HAND-let den om', bm:{nb:'Hva handlet den om?', ph:'vaa HAND-let den om'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Den gikk dårlig.', nl:'Die ging slecht.', ph:'den JIK DOHR-li'},
      {sp:'[V]', nb:'Var den vanskeligere enn du hadde trodd?', nl:'Was hij moeilijker dan je had gedacht?', ph:'vaar den VANS-ke-li-ge-re en duu TRUD'},
      {sp:'[B]', nb:'Ja, eg skjønte ikkje flere av oppgavene.', nl:'Ja, ik snapte meerdere opgaven niet.', ph:'jaa eg SJEUN-te IK-kje FLEE-re aav OP-gaa-ve-ne', bm:{nb:'Ja, jeg skjønte ikke flere av oppgavene.', ph:'jaa jaei SJEUN-te IK-ke FLEE-re aav OP-gaa-ve-ne'}},
      {sp:'[V]', nb:'Vil du fortelle meg om dem, eller vil du heller bare glemme prøven for i dag?', nl:'Wil je me erover vertellen, of wil je de toets voor vandaag liever gewoon vergeten?', ph:'vil duu for-TEL-le maei om dem EL-ler vil duu HEL-ler BAA-re GLEM-me PREU-ven for i DAAG'},
     ],
   cmt:'«gikk» klinkt als «jik»: een g voor i wordt een j-klank.'}),
 CV({id:'jo_har_du_mye_lekser', jo:true, labels:['conv','johanne'],
   title:'Heb je veel huiswerk?', sub:'School', titleNO:'Har du mye lekser?', subNO:'Skole',
   lines:[
      {sp:'[V]', nb:'Har du mye lekser i dag?', nl:'Heb je vandaag veel huiswerk?', ph:'haar duu MUU-e LEK-ser i DAAG'},
      {sp:'[B]', nb:'Ja, altfor mye.', nl:'Ja, veel te veel.', ph:'jaa ALT-for MUU-e'},
      {sp:'[V]', nb:'Ka må du gjøre?', nl:'Wat moet je doen?', ph:'kaa MOH duu JEU-re', bm:{nb:'Hva må du gjøre?', ph:'vaa MOH duu JEU-re'}},
      {sp:'[B]', nb:'Matte, engelsk og lese.', nl:'Wiskunde, Engels en lezen.', ph:'MAT-te ENG-elsk oh LEE-se'},
      {sp:'[V]', nb:'Ka vil du begynne med?', nl:'Waar wil je mee beginnen?', ph:'kaa vil duu be-GUN-ne mee', bm:{nb:'Hva vil du begynne med?', ph:'vaa vil duu be-GUN-ne mee'}},
      {sp:'[B]', nb:'Matte, så blir eg ferdig med det verste først.', nl:'Wiskunde, dan heb ik het ergste meteen achter de rug.', ph:'MAT-te soh bliir eg FAER-di mee de VAER-ste FEUSJT', bm:{nb:'Matte, så blir jeg ferdig med det verste først.', ph:'MAT-te soh bliir jaei FAER-di mee de VAER-ste FEUSJT'}, tbc:true},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, nesten ingenting!', nl:'Nee, bijna niets!', ph:'naei NES-ten ING-en-ting'},
      {sp:'[V]', nb:'Så deilig! Ka har du lyst til å gjøre når du er ferdig?', nl:'Wat heerlijk! Wat wil je gaan doen als je klaar bent?', ph:'soh DAEI-li kaa haar duu LUST til oh JEU-re nohr duu aer FAER-di', bm:{nb:'Så deilig! Hva har du lyst til å gjøre når du er ferdig?', ph:'soh DAEI-li vaa haar duu LUST til oh JEU-re nohr duu aer FAER-di'}},
      {sp:'[B]', nb:'Bare slappe av.', nl:'Gewoon lekker niets doen.', ph:'BAA-re SLAP-pe aav'},
      {sp:'[V]', nb:'Det høres ut som en god plan.', nl:'Dat klinkt als een goed plan.', ph:'de HEU-res uut som en guu PLAAN'},
     ],
   cmt:'«lekser» staat in het Noors in het meervoud; «mye lekser» is gewoon «veel huiswerk».'}),
 CV({id:'jo_noe_fint_fra_dagen', jo:true, labels:['conv','johanne'],
   title:'Iets leuks van de dag', sub:'School', titleNO:'Nokke fint fra dagen', subNO:'Skole',
   lines:[
      {sp:'[V]', nb:'Ka var det morsomste eller beste som skjedde i dag?', nl:'Wat was het grappigste of leukste dat er vandaag gebeurd is?', ph:'kaa vaar dee MOOR-som-ste EL-ler BES-te som SJED-de i daag', bm:{nb:'Hva var det morsomste eller beste som skjedde i dag?', ph:'vaa vaar dee MOOR-som-ste EL-ler BES-te som SJED-de i daag'}, tbc:true},
      {sp:'[B]', nb:'Eg hater det spørsmålet!', nl:'Ik haat die vraag!', ph:'eg HAA-ter dee SPEURS-moh-le', bm:{nb:'Jeg hater det spørsmålet!', ph:'jaei HAA-ter dee SPEURS-moh-le'}},
      {sp:'[V]', nb:'Haha, greit, da stryker vi det spørsmålet. 🙂', nl:'Haha, oké, dan schrappen we die vraag. 🙂', ph:'ha-HA, graeit, daa STRUU-ker vii dee SPEURS-moh-le'},
      {sp:'[B]', nb:'Bra!', nl:'Fijn!', ph:'braa'},
      {sp:'[V]', nb:'Men skjedde det nokke som fikk deg til å le?', nl:'Maar is er iets gebeurd waar je om moest lachen?', ph:'men SJED-de dee NOK-ke som fik daei til oh lee', bm:{nb:'Men skjedde det noe som fikk deg til å le?', ph:'men SJED-de dee NOO-e som fik daei til oh lee'}},
     ],
   cmt:'Let op de sj-klank in skjedde en spørsmålet; jeg en deg rijmen allebei op «aei».'}),
 CV({id:'jo_hvordan_var_friidretten', jo:true, labels:['conv','johanne'],
   title:'Hoe was de atletiek?', sub:'Vrije tijd en activiteiten', titleNO:'Kordan var friidretten?', subNO:'Fritid og aktiviteter',
   lines:[
      {sp:'[V]', nb:'Var det gøy på friidretten i dag?', nl:'Was het leuk op atletiek vandaag?', ph:'vaar dee geuy poh FRII-i-dret-ten i daag'},
      {sp:'[B]', nb:'Ja!', nl:'Ja!', ph:'jaa'},
      {sp:'[V]', nb:'Ka gjorde dokker?', nl:'Wat hebben jullie gedaan?', ph:'kaa JUU-re DOK-ker', bm:{nb:'Hva gjorde dere?', ph:'vaa JUU-re DEE-re'}},
      {sp:'[B]', nb:'Vi løp stafett.', nl:'We hebben estafette gelopen.', ph:'vii leup sta-FET'},
      {sp:'[V]', nb:'Ka liker du best – å løpe, hoppe eller kaste?', nl:'Wat vind je het leukst – rennen, springen of werpen?', ph:'kaa LII-ker duu best – oh LEU-pe, HOP-pe EL-ler KAS-te', bm:{nb:'Hva liker du best – å løpe, hoppe eller kaste?', ph:'vaa LII-ker duu best – oh LEU-pe, HOP-pe EL-ler KAS-te'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, det var kjedelig.', nl:'Nee, het was saai.', ph:'naei, dee vaar SJEE-de-li'},
      {sp:'[V]', nb:'Å? Ka var det som gjorde det kjedelig i dag?', nl:'O ja? Wat maakte het vandaag saai?', ph:'oh? kaa vaar dee som JUU-re dee SJEE-de-li i daag', bm:{nb:'Å? Hva var det som gjorde det kjedelig i dag?', ph:'oh? vaa vaar dee som JUU-re dee SJEE-de-li i daag'}},
      {sp:'[B]', nb:'Vi måtte vente veldig mye.', nl:'We moesten heel veel wachten.', ph:'vii MOHT-te VEN-te VEL-di MUU-e'},
      {sp:'[V]', nb:'Ja, det skjønner eg. Var det nokke som var litt gøy likevel?', nl:'Ja, dat snap ik. Was er toch nog iets leuks?', ph:'jaa, dee SJEUN-ner eg. vaar dee NOK-ke som vaar lit geuy LII-ke-vel', bm:{nb:'Ja, det skjønner jeg. Var det noe som var litt gøy likevel?', ph:'jaa, dee SJEUN-ner jaei. vaar dee NOO-e som vaar lit geuy LII-ke-vel'}},
     ],
   cmt:'kjedelig en skjønner beginnen allebei met de sj-klank, en gjorde klinkt als «juu-re».'}),
 CV({id:'jo_sykling_eller_dansing', jo:true, labels:['conv','johanne'],
   title:'Fietsen of dansen', sub:'Vrije tijd en activiteiten', titleNO:'Sykling eller dansing', subNO:'Fritid og aktiviteter',
   lines:[
      {sp:'[V]', nb:'Kordan var syklingen/dansingen i dag?', nl:'Hoe was het fietsen/dansen vandaag?', ph:'KOR-dan vaar SUUK-ling-en/DAN-sing-en i daag', bm:{nb:'Hvordan var syklingen/dansingen i dag?', ph:'VOR-dan vaar SUUK-ling-en/DAN-sing-en i daag'}},
      {sp:'[B]', nb:'Kjempegøy!', nl:'Superleuk!', ph:'SJEM-pe-geuy'},
      {sp:'[V]', nb:'Ka var det beste?', nl:'Wat was het leukst?', ph:'kaa vaar dee BES-te', bm:{nb:'Hva var det beste?', ph:'vaa vaar dee BES-te'}},
      {sp:'[B]', nb:'Vi lærte nokke nytt.', nl:'We hebben iets nieuws geleerd.', ph:'vii LAER-te NOK-ke nut', bm:{nb:'Vi lærte noe nytt.', ph:'vii LAER-te NOO-e nut'}},
      {sp:'[V]', nb:'Vis meg! Eller er det vanskelig å vise hjemme?', nl:'Laat eens zien! Of is het lastig om thuis te doen?', ph:'viis maei! EL-ler aer dee VANS-ke-li oh VII-se JEM-me'},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Ikkje så gøy i dag.', nl:'Vandaag niet zo leuk.', ph:'IK-kje soh geuy i daag', bm:{nb:'Ikke så gøy i dag.', ph:'IK-ke soh geuy i daag'}},
      {sp:'[V]', nb:'Nei? Var det selve treningen, eller var det nokke annet?', nl:'Nee? Lag het aan de training zelf, of aan iets anders?', ph:'naei? vaar dee SEL-ve TREE-ning-en, EL-ler vaar dee NOK-ke AN-net', bm:{nb:'Nei? Var det selve treningen, eller var det noe annet?', ph:'naei? vaar dee SEL-ve TREE-ning-en, EL-ler vaar dee NOO-e AN-net'}},
      {sp:'[B]', nb:'Eg var bare sliten.', nl:'Ik was gewoon moe.', ph:'eg vaar BAA-re SLII-ten', bm:{nb:'Jeg var bare sliten.', ph:'jaei vaar BAA-re SLII-ten'}},
      {sp:'[V]', nb:'Det skjønner eg. Da trenger du kanskje en rolig kveld.', nl:'Dat snap ik. Dan heb je misschien een rustige avond nodig.', ph:'dee SJEUN-ner eg. daa TRENG-er duu KAN-sje en ROO-li kvel', bm:{nb:'Det skjønner jeg. Da trenger du kanskje en rolig kveld.', ph:'dee SJEUN-ner jaei. daa TRENG-er duu KAN-sje en ROO-li kvel'}},
     ],
   cmt:'hjemme begint met een j-klank en de d van kveld hoor je niet.'}),
 CV({id:'jo_skal_jeg_folge_deg', jo:true, labels:['conv','johanne'],
   title:'Zal ik met je meelopen?', sub:'Vrije tijd en activiteiten', titleNO:'Skal eg følge deg?', subNO:'Fritid og aktiviteter',
   lines:[
      {sp:'[V]', nb:'Vil du at eg skal følge deg til treningen, eller vil du gå selv?', nl:'Wil je dat ik met je meeloop naar de training, of wil je zelf gaan?', ph:'vil duu at eg skal FEUL-le daei til TREE-ning-en, EL-ler vil duu goh sel', bm:{nb:'Vil du at jeg skal følge deg til treningen, eller vil du gå selv?', ph:'vil duu at jaei skal FEUL-le daei til TREE-ning-en, EL-ler vil duu goh sel'}},
      {sp:'[B]', nb:'Eg vil gå selv.', nl:'Ik wil zelf gaan.', ph:'eg vil goh sel', bm:{nb:'Jeg vil gå selv.', ph:'jaei vil goh sel'}},
      {sp:'[V]', nb:'Helt fint. Vil du at eg skal hente deg etterpå?', nl:'Prima. Wil je dat ik je daarna kom ophalen?', ph:'helt fint. vil duu at eg skal HEN-te daei et-ter-POH', bm:{nb:'Helt fint. Vil du at jeg skal hente deg etterpå?', ph:'helt fint. vil duu at jaei skal HEN-te daei et-ter-POH'}},
      {sp:'[B]', nb:'Ja, gjerne.', nl:'Ja, graag.', ph:'jaa, JAER-ne'},
      {sp:'[V]', nb:'Ok. Kor vil du at eg skal møte deg?', nl:'Oké. Waar wil je dat ik je opwacht?', ph:'oh-KAEI. koor vil duu at eg skal MEU-te daei', bm:{nb:'Ok. Hvor vil du at jeg skal møte deg?', ph:'oh-KAEI. voor vil duu at jaei skal MEU-te daei'}, tbc:true},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Kan du bli med meg?', nl:'Kun je met me meegaan?', ph:'kan duu blii mee maei'},
      {sp:'[V]', nb:'Selvfølgelig. Vil du at eg følger deg helt inn?', nl:'Natuurlijk. Wil je dat ik helemaal mee naar binnen ga?', ph:'sel-FEUL-le-li. vil duu at eg FEUL-ler daei helt in', bm:{nb:'Selvfølgelig. Vil du at jeg følger deg helt inn?', ph:'sel-FEUL-le-li. vil duu at jaei FEUL-ler daei helt in'}},
      {sp:'[B]', nb:'Nei, bare bort dit.', nl:'Nee, alleen tot daar.', ph:'naei, BAA-re bort diit'},
      {sp:'[V]', nb:'Greit, da gjør vi det sånn.', nl:'Oké, dan doen we het zo.', ph:'graeit, daa jeur vii dee sohn'},
     ],
   cmt:'gj en hj spreek je als j: gjerne wordt «jaer-ne», gjør wordt «jeur».'}),
 CV({id:'jo_har_du_noen_planer_med_ven', jo:true, labels:['conv','johanne'],
   title:'Heb je plannen met vrienden?', sub:'Vrienden en weekend', titleNO:'Har du noen planer med venner?', subNO:'Venner og helg',
   lines:[
      {sp:'[V]', nb:'Har du gjort noen avtaler med venner i helgen?', nl:'Heb je al iets afgesproken met vrienden dit weekend?', ph:'haar duu joort NOO-en AAV-taa-ler mae VEN-ner ii HEL-gen'},
      {sp:'[B]', nb:'Ja, eg skal være med Mia på lørdag.', nl:'Ja, ik ga zaterdag met Mia spelen.', ph:'jaa eg skal VAE-re mae MII-a poh LEUR-dag', bm:{nb:'Ja, jeg skal være med Mia på lørdag.', ph:'jaa jaei skal VAE-re mae MII-a poh LEUR-dag'}},
      {sp:'[V]', nb:'Så hyggelig. Vet dokker ka dokker skal gjøre?', nl:'Wat leuk. Weten jullie al wat jullie gaan doen?', ph:'soh HUG-ge-li veet DOK-ker kaa DOK-ker skal JEU-re', bm:{nb:'Så hyggelig. Vet dere hva dere skal gjøre?', ph:'soh HUG-ge-li veet DEE-re vaa DEE-re skal JEU-re'}},
      {sp:'[B]', nb:'Kanskje leke hjemme.', nl:'Misschien thuis spelen.', ph:'KAN-sje LEE-ke JEM-me'},
      {sp:'[V]', nb:'Høres koselig ut. Vil dokker være her eller hos henne?', nl:'Klinkt gezellig. Willen jullie hier zijn of bij haar?', ph:'HEU-res KOO-se-li uut vil DOK-ker VAE-re haer EL-ler hoos HEN-ne', bm:{nb:'Høres koselig ut. Vil dere være her eller hos henne?', ph:'HEU-res KOO-se-li uut vil DEE-re VAE-re haer EL-ler hoos HEN-ne'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, eg har ingen planer.', nl:'Nee, ik heb geen plannen.', ph:'naei eg haar ING-en PLAA-ner', bm:{nb:'Nei, jeg har ingen planer.', ph:'naei jaei haar ING-en PLAA-ner'}},
      {sp:'[V]', nb:'Har du lyst til å finne på nokke med noen, eller vil du helst ha en rolig helg?', nl:'Heb je zin om iets met iemand af te spreken, of wil je liever een rustig weekend?', ph:'haar duu lust til oh FIN-ne poh NOK-ke mae NOO-en EL-ler vil duu helst haa en ROO-li helg', bm:{nb:'Har du lyst til å finne på noe med noen, eller vil du helst ha en rolig helg?', ph:'haar duu lust til oh FIN-ne poh NOO-e mae NOO-en EL-ler vil duu helst haa en ROO-li helg'}},
      {sp:'[B]', nb:'Eg vil egentlig bare være hjemme.', nl:'Ik wil eigenlijk gewoon thuis blijven.', ph:'eg vil EE-gent-li BAA-re VAE-re JEM-me', bm:{nb:'Jeg vil egentlig bare være hjemme.', ph:'jaei vil EE-gent-li BAA-re VAE-re JEM-me'}},
      {sp:'[V]', nb:'Det kan være deilig det også.', nl:'Dat kan ook heerlijk zijn.', ph:'de kan VAE-re DAEI-li de OH-soh'},
     ],
   cmt:'Let op twee vaste wendingen: «ha lyst til» (zin hebben in) en «finne på noe» (iets ondernemen).'}),
 CV({id:'jo_hva_har_du_lyst_til_aa_gjo', jo:true, labels:['conv','johanne'],
   title:'Wat wil je dit weekend doen?', sub:'Vrienden en weekend', titleNO:'Ka har du lyst til å gjøre i helgen?', subNO:'Venner og helg',
   lines:[
      {sp:'[V]', nb:'Ka har du lyst til å gjøre i helgen?', nl:'Wat wil je dit weekend graag doen?', ph:'kaa haar duu lust til oh JEU-re ii HEL-gen', bm:{nb:'Hva har du lyst til å gjøre i helgen?', ph:'vaa haar duu lust til oh JEU-re ii HEL-gen'}},
      {sp:'[B]', nb:'Vet ikkje.', nl:'Weet ik niet.', ph:'veet IK-kje', bm:{nb:'Vet ikke.', ph:'veet IK-ke'}},
      {sp:'[V]', nb:'Vil du helst gjøre nokke ute eller være hjemme?', nl:'Wil je liever iets buiten doen of thuis blijven?', ph:'vil duu helst JEU-re NOK-ke UU-te EL-ler VAE-re JEM-me', bm:{nb:'Vil du helst gjøre noe ute eller være hjemme?', ph:'vil duu helst JEU-re NOO-e UU-te EL-ler VAE-re JEM-me'}},
      {sp:'[B]', nb:'Ut.', nl:'Naar buiten.', ph:'uut'},
      {sp:'[V]', nb:'Skal vi finne på nokke sammen, eller har du mer lyst til å gjøre nokke med venner?', nl:'Zullen we samen iets ondernemen, of heb je meer zin om iets met vrienden te doen?', ph:'skal vii FIN-ne poh NOK-ke SAM-men EL-ler haar duu meer lust til oh JEU-re NOK-ke mae VEN-ner', bm:{nb:'Skal vi finne på noe sammen, eller har du mer lyst til å gjøre noe med venner?', ph:'skal vii FIN-ne poh NOO-e SAM-men EL-ler haar duu meer lust til oh JEU-re NOO-e mae VEN-ner'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Kan vi dra på tur?', nl:'Kunnen we een uitstapje maken?', ph:'kan vii draa poh tuur'},
      {sp:'[V]', nb:'Ja! Kor har du lyst til å dra?', nl:'Ja! Waar wil je graag naartoe?', ph:'jaa koor haar duu lust til oh draa', bm:{nb:'Ja! Hvor har du lyst til å dra?', ph:'jaa voor haar duu lust til oh draa'}},
      {sp:'[B]', nb:'Et sted med vann.', nl:'Een plek met water.', ph:'et stee mae van', tbc:true},
      {sp:'[V]', nb:'God idé. Da finner vi et fint sted sammen.', nl:'Goed idee. Dan zoeken we samen een mooie plek uit.', ph:'goo i-DEE daa FIN-ner vii et fint stee SAM-men', tbc:true},
     ],
   cmt:'Twee manieren om iets voor te stellen: «har du lyst til å …» en «skal vi …»; de d van «sted» hoor je niet.'}),
 CV({id:'jo_skal_vi_spille_noe', jo:true, labels:['conv','johanne'],
   title:'Zullen we iets spelen?', sub:'Thuis en kleine momenten', titleNO:'Skal vi spille nokke?', subNO:'Hjemme og små øyeblikk',
   lines:[
      {sp:'[V]', nb:'Eg har lyst til å spille et spill. Har du lyst?', nl:'Ik heb zin om een spelletje te spelen. Heb jij zin?', ph:'eg haar lust til oh SPIL-le et spil haar duu lust', bm:{nb:'Jeg har lyst til å spille et spill. Har du lyst?', ph:'jaei haar lust til oh SPIL-le et spil haar duu lust'}},
      {sp:'[B]', nb:'Ja!', nl:'Ja!', ph:'jaa'},
      {sp:'[V]', nb:'Ka skal vi spille?', nl:'Wat zullen we spelen?', ph:'kaa skal vii SPIL-le', bm:{nb:'Hva skal vi spille?', ph:'vaa skal vii SPIL-le'}},
      {sp:'[B]', nb:'Uno.', nl:'Uno.', ph:'UU-noo'},
      {sp:'[V]', nb:'Greit. Men eg advarer deg – i dag skal eg vinne.', nl:'Prima. Maar ik waarschuw je: vandaag ga ik winnen.', ph:'graeit men eg ad-VAA-rer daei ii DAAG skal eg VIN-ne', bm:{nb:'Greit. Men jeg advarer deg – i dag skal jeg vinne.', ph:'graeit men jaei ad-VAA-rer daei ii DAAG skal jaei VIN-ne'}},
      {sp:'[B]', nb:'Det kommer aldri til å skje!', nl:'Dat gaat nooit gebeuren!', ph:'de KOM-mer AL-dri til oh sjee'},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, eg gidder ikkje.', nl:'Nee, ik heb er geen zin in.', ph:'naei eg JID-der IK-kje', bm:{nb:'Nei, jeg gidder ikke.', ph:'naei jaei JID-der IK-ke'}},
      {sp:'[V]', nb:'Greit. Ka har du lyst til å gjøre i stedet?', nl:'Prima. Wat wil je in plaats daarvan doen?', ph:'graeit kaa haar duu lust til oh JEU-re ii STEE-de', bm:{nb:'Greit. Hva har du lyst til å gjøre i stedet?', ph:'graeit vaa haar duu lust til oh JEU-re ii STEE-de'}},
      {sp:'[B]', nb:'Tegne.', nl:'Tekenen.', ph:'TAEI-ne'},
      {sp:'[V]', nb:'Ok, vil du tegne alene eller skal vi gjøre det sammen?', nl:'Oké, wil je alleen tekenen of zullen we het samen doen?', ph:'oo-KAEI vil duu TAEI-ne a-LEE-ne EL-ler skal vii JEU-re de SAM-men', tbc:true},
      {sp:'[B]', nb:'Alene.', nl:'Alleen.', ph:'a-LEE-ne'},
      {sp:'[V]', nb:'Greit. Kanskje vi kan spille etterpå hvis du får lyst.', nl:'Prima. Misschien kunnen we later spelen als je toch zin krijgt.', ph:'graeit KAN-sje vii kan SPIL-le ET-ter-poh vis duu fohr lust'},
     ],
   cmt:'«Gidder ikke» is informeel voor geen zin hebben; let ook op de sj-klank in skje, kanskje en skal-loze gj in gjøre.'}),
 CV({id:'jo_naar_barnet_virker_stille', jo:true, labels:['conv','johanne'],
   title:'Als het kind stil lijkt', sub:'Thuis en kleine momenten', titleNO:'Når barnet virker stille', subNO:'Hjemme og små øyeblikk',
   lines:[
      {sp:'[V]', nb:'Du virker litt stille i dag. Går det bra?', nl:'Je lijkt vandaag wat stil. Gaat het goed?', ph:'duu VIR-ker lit STIL-le ii DAAG gohr de braa'},
      {sp:'[B]', nb:'Ja.', nl:'Ja.', ph:'jaa'},
      {sp:'[V]', nb:'Ok. Eg ville bare spørre.', nl:'Oké. Ik wilde het alleen even vragen.', ph:'oo-KAEI eg VIL-le BAA-re SPEUR-re', bm:{nb:'Ok. Jeg ville bare spørre.', ph:'oo-KAEI jaei VIL-le BAA-re SPEUR-re'}, tbc:true},
      {sp:'[B]', nb:'Eg er bare litt sliten.', nl:'Ik ben gewoon een beetje moe.', ph:'eg aer BAA-re lit SLII-ten', bm:{nb:'Jeg er bare litt sliten.', ph:'jaei aer BAA-re lit SLII-ten'}},
      {sp:'[V]', nb:'Skjønner. Vil du være litt alene, eller vil du at eg skal være sammen med deg?', nl:'Snap ik. Wil je even alleen zijn, of wil je dat ik bij je blijf?', ph:'SJEUN-ner vil duu VAE-re lit a-LEE-ne EL-ler vil duu at eg skal VAE-re SAM-men mae daei', bm:{nb:'Skjønner. Vil du være litt alene, eller vil du at jeg skal være sammen med deg?', ph:'SJEUN-ner vil duu VAE-re lit a-LEE-ne EL-ler vil duu at jaei skal VAE-re SAM-men mae daei'}},
      {div:'Alternatief', divNO:'Alternativ'},
      {sp:'[B]', nb:'Nei, egentlig ikkje.', nl:'Nee, eigenlijk niet.', ph:'naei EE-gent-li IK-kje', bm:{nb:'Nei, egentlig ikke.', ph:'naei EE-gent-li IK-ke'}},
      {sp:'[V]', nb:'Har du lyst til å fortelle ka som har skjedd?', nl:'Wil je vertellen wat er gebeurd is?', ph:'haar duu lust til oh for-TEL-le kaa som haar sjed', bm:{nb:'Har du lyst til å fortelle hva som har skjedd?', ph:'haar duu lust til oh for-TEL-le vaa som haar sjed'}},
      {sp:'[B]', nb:'Kanskje senere.', nl:'Misschien later.', ph:'KAN-sje SEE-ne-re'},
      {sp:'[V]', nb:'Helt greit. Du kan komme til meg når du vil.', nl:'Helemaal prima. Je mag naar me toe komen wanneer je wilt.', ph:'helt graeit duu kan KOM-me til maei nohr duu vil'},
     ],
   cmt:'In skjønner, skjedd en egentlig valt letters weg: je zegt sjeun-ner, sjed en ee-gent-li.'}),

 CV({id:'jo_bli_kjent_med_jentene', jo:true, labels:['conv','johanne'],
   title:'Hallo Emma en Lene', sub:'Elkaar leren kennen', titleNO:'Hei Emma og Lene', subNO:'Bli kjent',
   lines:[
      {sp:'[V]', nb:'Hei Lene, hei Emma! Kan eg gi mammaen dokkers en klem og et kyss?', nl:'Hey Lene, Emma, mag ik jullie mama een knuffel en een kus geven?', ph:'haei LEE-ne haei EM-ma kan eg jii MAM-ma-en DOK-kers en klem oh et sjus', bm:{nb:'Hei Lene, hei Emma! Kan jeg gi mammaen deres en klem og et kyss?', ph:'haei LEE-ne haei EM-ma kan jaei jii MAM-ma-en DEE-res en klem oh et sjus'}, tbc:true},
      {sp:'[V]', nb:'Kan eg gi deg en klem også?', nl:'Mag ik jou ook een knuffel geven?', ph:'kan eg jii daei en klem OHS-soh', bm:{nb:'Kan jeg gi deg en klem også?', ph:'kan jaei jii daei en klem OHS-soh'}},
      {sp:'[V]', nb:'Eg har nokke bittelite med til deg.', nl:'Ik heb iets heel kleins bij voor jou.', ph:'eg haar NOK-ke BIT-te-lii-te mae til daei', bm:{nb:'Jeg har noe bittelite med til deg.', ph:'jaei haar NOO-e BIT-te-lii-te mae til daei'}},
      {sp:'[V]', nb:'Eg synes det er kjempekjekt å se deg.', nl:'Ik vind het héél leuk om je te zien.', ph:'eg SUU-nes de aer SJEM-pe-sjekt oh see daei', bm:{nb:'Jeg synes det er kjempekjekt å se deg.', ph:'jaei SUU-nes de aer SJEM-pe-sjekt oh see daei'}},
      {sp:'[V]', nb:'Eg gledet meg veldig til å se dokker.', nl:'Ik keek er heel hard naar uit om jullie te zien.', ph:'eg GLEE-det maei VEL-di til oh see DOK-ker', bm:{nb:'Jeg gledet meg veldig til å se dere.', ph:'jaei GLEE-det maei VEL-di til oh see DEE-re'}, tbc:true},
      {sp:'[V]', nb:'Beklager at eg ikkje snakker så godt norsk ennå, men eg skal lære det.', nl:'Sorry dat ik nog niet zo goed Noors spreek, maar ik ga het wel leren.', ph:'be-KLAA-ger at eg IK-kje SNAK-ker soh got nohrsk en-NOH men eg skal LAE-re de', bm:{nb:'Beklager at jeg ikke snakker så godt norsk ennå, men jeg skal lære det.', ph:'be-KLAA-ger at jaei IK-ke SNAK-ker soh got nohrsk en-NOH men jaei skal LAE-re de'}},
      {sp:'[V]', nb:'Kjempekjekt å bli kjent med dokker!', nl:'Superfijn om jullie te leren kennen!', ph:'SJEM-pe-sjekt oh blii sjent mae DOK-ker', bm:{nb:'Kjempekjekt å bli kjent med dere!', ph:'SJEM-pe-sjekt oh blii sjent mae DEE-re'}},
     ],
   cmt:'«Kjekt» is het Bergense woord voor leuk; kj en ky klinken allebei als sj (sjekt, sjus). «Dokker» = jullie, «dokkers» = van jullie. VOOR JOHANNE (tbc): staat «mammaen dokkers» zo goed, of zegt men «mammaen dykkar»? En zegt men in Bergen «eg gledet meg» of «eg glea meg»?'}),

];

/* ============================================================
   v11.34 §77 · DE GSP-SPLITSING (weg A)
   ------------------------------------------------------------
   Elke ECHTE gespreksregel wordt een eigen, scoorbaar item:
     id:'cv_morgen#3' · type:'gsp' · grp:'cv_morgen' · gi:3
   `gi` is de plaats in `lines`, dus exact hetzelfde nummer als
   `data-row` op de kaart, als CROW en als FLUO. Zo blijven die
   drie zonder omrekening op elkaar passen.
   ⚠ Een regel met `div` (de scheiding «Alternatief», §70.3) is
   GEEN dialoogregel en wordt dus GEEN item. Gemeten op 29/08:
   19 gesprekjes · 187 rijen · 16 scheidingsrijen · 171 items.
   Het gesprekje zelf (`type:'conv'`) blijft bestaan als KAART,
   maar draagt geen score meer.
   ============================================================ */
window.GSP = (function(){
  const out=[];
  (window.CONV||[]).forEach(function(c){
    (c.lines||[]).forEach(function(l,i){
      if(!l || l.div) return;
      out.push({
        id:c.id+'#'+i, type:'gsp', grp:c.id, gi:i,
        sp:l.sp||'', nb:l.nb||'', nl:l.nl||'', ph:l.ph||'',
        bm:l.bm||null, tbc:!!l.tbc,
        title:c.title||'', titleNO:c.titleNO||'',
        kern:false, labels:(c.labels||[]).slice(),
        episodes:(c.episodes||[]).slice(),
        src:c.src||'somme', who:c.who||'conv',
        cmt:'\uD83D\uDCAC '+(c.title||'Gesprekje')
      });
    });
  });
  return out;
})();

})();
