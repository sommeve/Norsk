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
   §79 · v11.36 — DE WOORDEN UIT DE GESPREKJES
   ------------------------------------------------------------
   Gemeten op 30/08 tegen de 171 gespreksregels: 304 verschillende
   Noorse woorden. 179 dragen al een eigen kaart, 68 zijn een VORM
   van een bestaande kaart (die kregen een vormenrij op hun eigen
   kaart, in words.js / nils.js / somme.js), 6 krijgen bewust niets
   (Emma · Lene · Mia · Nutella · Uno · haha — eigennamen, merken en
   klanknabootsing; ze blijven wél gewoon in de gesprekszin staan).
   Blijft over: de 37 kaarten hieronder. Ze staan in DIT bestand en
   niet in een achtste bestand — publiceren blijft zeven bestanden.
   Alle 37 dragen het etiket `next` (JHS, 30/08): met de 42 die er al
   stonden is de ☀15 ongeveer vijf dagen lang gespreksvocabulaire.
   ⚠ `window.GWORDS` wordt in index.html mee in ITEMS geschoven. Rol
   je index.html terug naar v11.35, dan wordt dit blok simpelweg
   genegeerd — de app werkt, de kaarten zijn er even niet.
   ============================================================ */
const INV='<span class="inv">/</span>';
const GW=(o)=>Object.assign({type:'woord',kern:false,
  labels:['somme','conv','next'],episodes:[],src:'somme',who:'conv',cmt:''},o);

window.GWORDS = [

/* ---------- school en leren ---------- */
 GW({id:'gw_prove', tlbl:'zn.',
  phNB:'PREU-ve', phNL:'toets',
  hnb:'en <b>prøve</b> '+G+'♂'+_, hnl:'een <b>toets</b> · een <b>proefwerk</b>',
  forms:[['prøv'+E+'en'+_,'de toets'],['prøv'+E+'er'+_,'toetsen'],['prøv'+E+'ene'+_,'de toetsen']],
  snb:'Kordan synes du prøven gikk?', snl:'Hoe vond je dat de toets ging?',
  cmt:'Niet verwarren met het werkwoord "å prøve" = proberen — zelfde stam, andere kaart.'}),
 GW({id:'gw_klasse', tlbl:'zn.',
  phNB:'KLAS-se', phNL:'klas',
  hnb:'en <b>klasse</b> '+G+'♂'+_, hnl:'een <b>klas</b>',
  forms:[['klass'+E+'en'+_,'de klas'],['klass'+E+'er'+_,'klassen'],['klass'+E+'ene'+_,'de klassen']],
  snb:'Det var mye bråk i klassen.', snl:'Er was veel herrie in de klas.'}),
 GW({id:'gw_naturfag', tlbl:'zn.',
  phNB:'na-TUUR-faag', phNL:'na-TUUR-kun-de',
  hnb:'<b>naturfag</b> '+G+'φ'+_, hnl:'<b>natuurwetenschappen</b> '+N+'schoolvak'+_,
  forms:[['naturfag'+E+'et'+_,'het vak natuurwetenschappen'],[INV+' '+N+'geen meervoud'+_,INV],['et '+X+'fag'+_,'een (school)vak']],
  snb:'Vi gjorde nokke morsomt i naturfag.', snl:'We hebben iets leuks gedaan bij natuurkunde.',
  cmt:'"fag" = vak. Zonder lidwoord als je het schoolvak bedoelt.'}),
 GW({id:'gw_eksperiment', tlbl:'zn.',
  phNB:'ek-spe-ri-MENT', phNL:'PROEF-je',
  hnb:'et <b>eksperiment</b> '+G+'φ'+_, hnl:'een <b>proefje</b> · een <b>experiment</b>',
  forms:[['eksperiment'+E+'et'+_,'het proefje'],['eksperiment'+E+'er'+_,'proefjes'],['eksperiment'+E+'ene'+_,'de proefjes']],
  snb:'Vi gjorde et eksperiment.', snl:'We hebben een proefje gedaan.'}),
 GW({id:'gw_oppdagelse', tlbl:'zn.',
  phNB:'OP-daa-gel-se', phNL:'ONT-dek-king',
  hnb:'en <b>oppdagelse</b> '+G+'♂'+_, hnl:'een <b>ontdekking</b>',
  forms:[['oppdagels'+E+'en'+_,'de ontdekking'],['oppdagels'+E+'er'+_,'ontdekkingen'],['oppdagels'+E+'ene'+_,'de ontdekkingen'],['å '+X+'oppdage'+_,'ontdekken']],
  snb:'Ingen store oppdagelser i dag?', snl:'Geen grote ontdekkingen vandaag?'}),
 GW({id:'gw_verdensrom', tlbl:'zn.',
  phNB:'VAER-dens-rom-me', phNL:'de RUIM-te',
  hnb:'<b>verdensrommet</b> '+G+'φ'+_, hnl:'de <b>ruimte</b> · het <b>heelal</b>',
  forms:[['et '+X+'verdensrom'+_,'een heelal'],[N+'verden'+_,'de wereld'],[N+'rom'+_,'ruimte · kamer']],
  snb:'Vi lærte om verdensrommet.', snl:'We hebben over de ruimte geleerd.',
  cmt:'Bijna altijd in de bepaalde vorm: verdensrommet. "verden" = wereld, "rom" = ruimte.'}),
 GW({id:'gw_forslag', tlbl:'zn.',
  phNB:'FOR-slaag', phNL:'VOOR-stel',
  hnb:'et <b>forslag</b> '+G+'φ'+_, hnl:'een <b>voorstel</b> · een <b>suggestie</b>',
  forms:[['forslag'+E+'et'+_,'het voorstel'],[X+'forslag'+_,'voorstellen'],['forslag'+E+'ene'+_,'de voorstellen'],['å '+X+'foreslå'+_,'voorstellen '+N+'ww.'+_]],
  snb:'Skal eg gi deg tre forslag?', snl:'Zal ik je drie suggesties geven?',
  cmt:'Onzijdig meervoud zonder uitgang: ett forslag – tre forslag.'}),

/* ---------- sport en spel ---------- */
 GW({id:'gw_friidrett', tlbl:'zn.',
  phNB:'FRII-i-dret', phNL:'a-tle-TIEK',
  hnb:'en <b>friidrett</b> '+G+'♂'+_, hnl:'<b>atletiek</b>',
  forms:[['friidrett'+E+'en'+_,'de atletiek'],[INV+' '+N+'geen meervoud'+_,INV],[N+'idrett'+_,'sport']],
  snb:'Var det gøy på friidretten i dag?', snl:'Was het leuk op atletiek vandaag?',
  cmt:'"fri" + "idrett" = letterlijk «vrije sport». Met dubbele i geschreven.'}),
 GW({id:'gw_stafett', tlbl:'zn.',
  phNB:'sta-FET', phNL:'es-ta-FET-te',
  hnb:'en <b>stafett</b> '+G+'♂'+_, hnl:'een <b>estafette</b>',
  forms:[['stafett'+E+'en'+_,'de estafette'],['stafett'+E+'er'+_,'estafettes'],['stafett'+E+'ene'+_,'de estafettes'],['løpe '+X+'stafett'+_,'estafette lopen']],
  snb:'Vi løp stafett.', snl:'We hebben estafette gelopen.'}),
 GW({id:'gw_spill', tlbl:'zn.',
  phNB:'spil', phNL:'spel',
  hnb:'et <b>spill</b> '+G+'φ'+_, hnl:'een <b>spel</b> · een <b>spelletje</b>',
  forms:[['spill'+E+'et'+_,'het spel'],[X+'spill'+_,'spellen'],['spill'+E+'ene'+_,'de spellen'],['å '+X+'spille'+_,'spelen '+N+'ww.'+_]],
  snb:'Eg har lyst til å spille et spill.', snl:'Ik heb zin om een spelletje te spelen.',
  cmt:'Onzijdig, meervoud zonder uitgang. Het werkwoord is "å spille".'}),
 GW({id:'gw_vinne', tlbl:'ww. · onregelm.',
  phNB:'VIN-ne', phNL:'WIN-nen',
  hnb:'å '+X+'<b>vinne</b>'+_, hnl:'<b>winnen</b>',
  forms:[[X+'vinner'+_,'wint'],[X+'vant'+_,'won'],['har '+X+'vunnet'+_,'heeft gewonnen']],
  snb:'I dag skal eg vinne.', snl:'Vandaag ga ik winnen.',
  cmt:'Onregelmatig: vinne – vant – vunnet. Uit het hoofd leren.'}),
 GW({id:'gw_advare', tlbl:'ww.',
  phNB:'ad-VAA-re', phNL:'WAAR-schu-wen',
  hnb:'å <b>advare</b>', hnl:'<b>waarschuwen</b>',
  forms:[[X+'advarer'+_,'waarschuwt'],[X+'advarte'+_,'waarschuwde'],['har '+X+'advart'+_,'heeft gewaarschuwd']],
  snb:'Eg advarer deg!', snl:'Ik waarschuw je!'}),

/* ---------- eten en drinken ---------- */
 GW({id:'gw_pizza', tlbl:'zn.',
  phNB:'PIT-sa', phNL:'PIZ-za',
  hnb:'en <b>pizza</b> '+G+'♂'+_, hnl:'een <b>pizza</b>',
  forms:[['pizza'+E+'en'+_,'de pizza'],['pizza'+E+'er'+_,'pizza’s'],['pizza'+E+'ene'+_,'de pizza’s']],
  snb:'Skal vi ha pizza i dag?', snl:'Zullen we vandaag pizza eten?',
  cmt:'Uitspraak met een echte ts: PIT-sa.'}),
 GW({id:'gw_kjopepizza', tlbl:'zn.',
  phNB:'SJEU-pe-pit-sa', phNL:'ge-KOCH-te PIZ-za',
  hnb:'en <b>kjøpepizza</b> '+G+'♂'+_, hnl:'een <b>gekochte pizza</b> '+N+'kant-en-klaar'+_,
  forms:[['kjøpepizza'+E+'en'+_,'de gekochte pizza'],['å '+X+'kjøpe'+_,'kopen'],[N+'tegenover'+_,'hjemmelaget = zelfgemaakt']],
  snb:'Hjemmelaget eller kjøpepizza?', snl:'Zelfgemaakt of een gekochte pizza?',
  cmt:'"kjøpe-" vooraan een etenswoord betekent: uit de winkel, niet zelf gemaakt.'}),
 GW({id:'gw_taco', tlbl:'zn.',
  phNB:'TA-ko', phNL:'TA-co',
  hnb:'en <b>taco</b> '+G+'♂'+_, hnl:'een <b>taco</b>',
  forms:[['taco'+E+'en'+_,'de taco'],['taco'+E+'er'+_,'taco’s'],['taco'+E+'ene'+_,'de taco’s']],
  snb:'Pai, taco eller fisk?', snl:'Hartige taart, taco of vis?',
  cmt:'Fredagstaco — taco op vrijdag — is in Noorwegen bijna een instelling.'}),
 GW({id:'gw_pai', tlbl:'zn.',
  phNB:'pai', phNL:'HAR-ti-ge taart',
  hnb:'en <b>pai</b> '+G+'♂'+_, hnl:'een <b>hartige taart</b> · een <b>quiche</b>',
  forms:[['pai'+E+'en'+_,'de taart'],['pai'+E+'er'+_,'taarten'],['pai'+E+'ene'+_,'de taarten']],
  snb:'Pai, taco eller fisk?', snl:'Hartige taart, taco of vis?',
  cmt:'Uit het Engelse "pie". Meestal hartig (met ei, spek, groente) — een zoete taart is "en kake".'}),
 GW({id:'gw_yoghurt', tlbl:'zn.',
  phNB:'JOO-gurt', phNL:'YOG-hurt',
  hnb:'en <b>yoghurt</b> '+G+'♂'+_, hnl:'<b>yoghurt</b>',
  forms:[['yoghurt'+E+'en'+_,'de yoghurt'],[INV+' '+N+'geen meervoud'+_,INV],['yoghurt med '+X+'frukt'+_,'yoghurt met fruit']],
  snb:'Yoghurt med frukt?', snl:'Yoghurt met fruit?',
  cmt:'De y klinkt als een Noorse u: JOO-gurt.'}),
 GW({id:'gw_jordbaer', tlbl:'zn.',
  phNB:'JOOR-baer', phNL:'AARD-bei',
  hnb:'et <b>jordbær</b> '+G+'φ'+_, hnl:'een <b>aardbei</b>',
  forms:[['jordbær'+E+'et'+_,'de aardbei'],[X+'jordbær'+_,'aardbeien'],['jordbær'+E+'ene'+_,'de aardbeien']],
  snb:'Jordbær!', snl:'Aardbeien!',
  cmt:'"jord" = aarde (de d hoor je niet) + "bær" = bes. Onzijdig meervoud zonder uitgang.'}),
 GW({id:'gw_melkeskum', tlbl:'zn.',
  phNB:'MEL-ke-skum', phNL:'MELK-schuim',
  hnb:'et <b>melkeskum</b> '+G+'φ'+_, hnl:'<b>melkschuim</b>',
  forms:[['melkeskumm'+E+'et'+_,'het melkschuim'],[INV+' '+N+'geen meervoud'+_,INV],[N+'melk'+_,'melk · '+N+'skum'+_+' = schuim']],
  snb:'Vil du ha ristet melkeskum?', snl:'Wil je geroosterd melkschuim?',
  cmt:'De m verdubbelt in de bepaalde vorm: skum – skummet.'}),
 GW({id:'gw_matboks', tlbl:'zn.',
  phNB:'MAAT-boks', phNL:'BROOD-trom-mel',
  hnb:'en <b>matboks</b> '+G+'♂'+_, hnl:'een <b>broodtrommel</b> · een <b>lunchtrommel</b>',
  forms:[['matboks'+E+'en'+_,'de broodtrommel'],['matboks'+E+'er'+_,'broodtrommels'],['matboks'+E+'ene'+_,'de broodtrommels']],
  snb:'Ka vil du ha i matboksen?', snl:'Wat wil je in je broodtrommel?',
  cmt:'"mat" = eten + "boks" = doos.'}),
 GW({id:'gw_hamarretako', tlbl:'zn. · gezinswoord',
  phNB:'ha-ma-re-TA-ko', phNL:'TUS-sen-door-tje',
  hnb:'<b>hamarretako</b> '+N+'Baskisch'+_, hnl:'een <b>tussendoortje</b> · een <b>vieruurtje</b>',
  forms:[['et '+X+'mellommåltid'+_,'een tussendoortje '+N+'Noors'+_],[X+'kveldsmat'+_,'avondhapje '+N+'Noors'+_],[INV,INV]],
  snb:'Ka vil du ha til hamarretako i morgen?', snl:'Wat wil je morgen als tussendoortje?',
  cmt:'⚠ GEEN Noors: "hamarretako" is Baskisch voor het vieruurtje en staat hier als gezinswoord. Het Noorse woord is "et mellommåltid"; voor het hapje ’s avonds zegt men "kveldsmat".'}),
 GW({id:'gw_riste', tlbl:'ww.',
  phNB:'RIS-te', phNL:'ROOS-te-ren',
  hnb:'å <b>riste</b>', hnl:'<b>roosteren</b> · <b>schudden</b>',
  forms:[[X+'rister'+_,'roostert'],[X+'ristet'+_,'roosterde'],['har '+X+'ristet'+_,'heeft geroosterd'],['ristet '+X+'brød'+_,'geroosterd brood']],
  snb:'Ristet melkeskum?', snl:'Geroosterd melkschuim?',
  cmt:'Ook "schudden": riste på hodet = het hoofd schudden.'}),

/* ---------- gebeuren, voelen, oordelen ---------- */
 GW({id:'gw_skje', tlbl:'ww.',
  phNB:'sjee', phNL:'ge-BEU-ren',
  hnb:'å '+X+'<b>skje</b>'+_, hnl:'<b>gebeuren</b>',
  forms:[[X+'skjer'+_,'gebeurt'],[X+'skjedde'+_,'gebeurde'],['har '+X+'skjedd'+_,'is gebeurd'],['Ka '+X+'skjer'+_+'?','Wat is er? / Hoe gaat het?']],
  snb:'Ka skjedde?', snl:'Wat is er gebeurd?',
  cmt:'⚠ Niet verwarren met "en skje" = een lepel; dat is een ander woord met dezelfde spelling. "skj" klinkt als sj.'}),
 GW({id:'gw_forvente', tlbl:'ww.',
  phNB:'for-VEN-te', phNL:'ver-WACH-ten',
  hnb:'å <b>forvente</b>', hnl:'<b>verwachten</b>',
  forms:[[X+'forventer'+_,'verwacht'],[X+'forventet'+_,'verwachtte'],['har '+X+'forventet'+_,'heeft verwacht']],
  snb:'Var det slik du hadde forventet?', snl:'Was het zoals je had verwacht?',
  cmt:'"vente" alleen = wachten; met "for-" ervoor = verwachten.'}),
 GW({id:'gw_mote', tlbl:'ww.',
  phNB:'MEU-te', phNL:'ONT-moe-ten',
  hnb:'å '+X+'<b>møte</b>'+_, hnl:'<b>ontmoeten</b> · <b>opwachten</b>',
  forms:[[X+'møter'+_,'ontmoet'],[X+'møtte'+_,'ontmoette'],['har '+X+'møtt'+_,'heeft ontmoet'],['et '+X+'møte'+_,'een afspraak · een vergadering']],
  snb:'Kor vil du at eg skal møte deg?', snl:'Waar wil je dat ik je opwacht?',
  cmt:'Ook zelfstandig: "et møte" = een vergadering.'}),
 GW({id:'gw_sliten', tlbl:'bnw.',
  phNB:'SLII-ten', phNL:'moe',
  hnb:'<b>sliten</b> '+G+'♂/φ'+_, hnl:'<b>moe</b> · <b>uitgeput</b>',
  forms:[[X+'slitent'+_+' φ','moe '+N+'onz.'+_],[X+'slitne'+_+' mv.','moeë'],[N+'vergelijk'+_,'trøtt = slaperig']],
  snb:'Eg var bare sliten.', snl:'Ik was gewoon moe.',
  cmt:'"sliten" is opgebruikt-moe (na inspanning); "trøtt" is slaperig.'}),
 GW({id:'gw_kjekk', tlbl:'bnw.',
  phNB:'sjek', phNL:'leuk',
  hnb:'<b>kjekk</b> '+G+'♂'+_, hnl:'<b>leuk</b> · <b>fijn</b> · <b>knap</b>',
  forms:[[X+'kjekt'+_+' φ','leuk '+N+'onz.'+_],[X+'kjekke'+_+' mv.','leuke'],[X+'kjempekjekt'+_,'héél leuk '+N+'(tbc)'+_]],
  snb:'Eg synes det er kjempekjekt å se deg.', snl:'Ik vind het héél leuk om je te zien.',
  cmt:'⚠ "kjempekjekt" moet Johanne nog bevestigen. In Bergen hoor je "kjekt" waar Oslo eerder "hyggelig" of "gøy" zegt. "kj" klinkt als sj.'}),
 GW({id:'gw_kul', tlbl:'bnw.',
  phNB:'kuul', phNL:'gaaf',
  hnb:'<b>kul</b> '+G+'♂'+_, hnl:'<b>gaaf</b> · <b>cool</b>',
  forms:[[X+'kult'+_+' φ','gaaf '+N+'onz.'+_],[X+'kule'+_+' mv.','gave'],[N+'spreektaal'+_,'uit het Engelse «cool»']],
  snb:'Kult! Ka lærte du?', snl:'Gaaf! Wat heb je geleerd?',
  cmt:'Spreektaal, vooral bij jongeren. "Kult!" als uitroep op zichzelf.'}),
 GW({id:'gw_vill', tlbl:'bnw.',
  phNB:'vil', phNL:'wild',
  hnb:'<b>vill</b> '+G+'♂'+_, hnl:'<b>wild</b> · <b>waanzinnig</b>',
  forms:[[X+'vilt'+_+' φ','wild '+N+'onz.'+_],[X+'ville'+_+' mv.','wilde'],['helt '+X+'vilt'+_,'helemaal waanzinnig']],
  snb:'Vil du ha nokke helt vilt?', snl:'Wil je iets helemaal waanzinnigs?',
  cmt:'⚠ "vilt" (wild, onz.) lijkt op "vil" (wil, van å ville) — let op de t.'}),
 GW({id:'gw_hjemmelaget', tlbl:'bnw.',
  phNB:'JEM-me-laa-ge', phNL:'ZELF-ge-maakt',
  hnb:'<b>hjemmelaget</b>', hnl:'<b>zelfgemaakt</b>',
  forms:[['hjemme'+E+'laget'+_,'thuis gemaakt'],[N+'hjemme'+_,'thuis · '+N+'lage'+_+' = maken'],[N+'tegenover'+_,'kjøpe- = gekocht']],
  snb:'Hjemmelaget eller kjøpepizza?', snl:'Zelfgemaakt of een gekochte pizza?',
  cmt:'Onveranderlijk in de praktijk. "hj" klinkt als een j: JEM-me.'}),
 GW({id:'gw_vanlig', tlbl:'bnw.',
  phNB:'VAAN-li', phNL:'ge-WOON',
  hnb:'<b>vanlig</b> '+G+'♂/φ'+_, hnl:'<b>gewoon</b> · <b>normaal</b>',
  forms:[[X+'vanlige'+_+' mv.','gewone'],['som '+X+'vanlig'+_,'zoals gewoonlijk'],[X+'uvanlig'+_,'ongewoon']],
  snb:'Vil du ha vanlig melk?', snl:'Wil je gewone melk?',
  cmt:'De g op het einde hoor je nauwelijks: VAAN-li.'}),

/* ---------- kleine woorden ---------- */
 GW({id:'gw_ok', tlbl:'bijw.',
  phNB:'oh-KEI', phNL:'o-KÉ',
  hnb:'<b>ok</b>', hnl:'<b>oké</b>',
  forms:[[X+'okei'+_,'ook zo geschreven'],[X+'greit'+_,'prima · goed'],[INV,INV]],
  snb:'Ok, hvis du ikkje sier nokke til mamma.', snl:'Oké, als je niks tegen mama zegt.',
  cmt:'Geschreven als "ok" of "okei", uitgesproken oh-KEI. "Greit" is het Noorse woord ervoor.'}),
 GW({id:'gw_uff', tlbl:'uitdr.',
  phNB:'uf', phNL:'oei',
  hnb:'<b>uff</b>', hnl:'<b>oei</b> · <b>tjonge</b>',
  forms:[['uff '+X+'da'+_,'ach jee · och arme'],[INV,INV],[N+'medeleven'+_,'of lichte ergernis']],
  snb:'Uff. Ka skjedde?', snl:'Oei. Wat is er gebeurd?',
  cmt:'"Uff da!" is bijna een Noors visitekaartje — je zegt het bij tegenslag, groot of klein.'}),
 GW({id:'gw_altfor', tlbl:'bijw.',
  phNB:'ALT-for', phNL:'veel te',
  hnb:'<b>altfor</b>', hnl:'<b>veel te</b>',
  forms:[['altfor '+X+'mye'+_,'veel te veel'],['altfor '+X+'lite'+_,'veel te weinig'],[N+'let op'+_,'één woord, niet «alt for»']],
  snb:'Ja, altfor mye.', snl:'Ja, veel te veel.',
  cmt:'Aan elkaar geschreven. "alt for" los betekent «alles voor».'}),
 GW({id:'gw_dit', tlbl:'bijw.',
  phNB:'diit', phNL:'daar-HEEN',
  hnb:'<b>dit</b>', hnl:'<b>daarheen</b> · <b>daarnaartoe</b>',
  forms:[[X+'der'+_,'daar '+N+'plaats'+_],[X+'hit'+_,'hierheen'],['bort '+X+'dit'+_,'tot daar']],
  snb:'Nei, bare bort dit.', snl:'Nee, alleen tot daar.',
  cmt:'Zelfde paar als bort/borte: "dit" is de richting, "der" is de plaats.'}),
 GW({id:'gw_valg', tlbl:'zn.',
  phNB:'valg', phNL:'KEU-ze',
  hnb:'et <b>valg</b> '+G+'φ'+_, hnl:'een <b>keuze</b>',
  forms:[['valg'+E+'et'+_,'de keuze'],[X+'valg'+_,'keuzes'],['valg'+E+'ene'+_,'de keuzes'],['å '+X+'velge'+_,'kiezen']],
  snb:'Bra valg!', snl:'Goede keuze!',
  cmt:'Ook «verkiezing»: stortingsvalg = parlementsverkiezing.'}),
 GW({id:'gw_kyss', tlbl:'zn.',
  phNB:'sjus', phNL:'kus',
  hnb:'et <b>kyss</b> '+G+'φ'+_, hnl:'een <b>kus</b>',
  forms:[['kyss'+E+'et'+_,'de kus'],[X+'kyss'+_,'kussen'],['kyss'+E+'ene'+_,'de kussen'],['å '+X+'kysse'+_,'kussen '+N+'ww.'+_]],
  snb:'Kan eg gi deg et kyss?', snl:'Mag ik je een kus geven?',
  cmt:'"ky" klinkt als sju: sjus. Onzijdig meervoud zonder uitgang.'})

];

/* ---- §79 · `needs` PER GESPREKSREGEL --------------------------------
   Per regel de woordkaarten die je moet kennen (§63). Machinaal afgeleid uit
   de Noorse tekst van de regel zelf: elk woord → de kaart die dat woord leert.
   Eigennamen, merken en klanknabootsing (Emma · Lene · Mia · Nutella · Uno ·
   haha) tellen niet mee. Gemiddeld 5,7 kaarten per regel (min 0 · max 16) —
   dezelfde orde als de zinnen in data/home.js (2 tot 7).
   ⚠ De sleutel is `<gesprekje-id>#<gi>`, exact de id van het GSP-item.
   ⚠ 96 woorden pasten op meer dan één kaart. De machine kiest de kortste kop;
   37 keuzes zijn met de hand overschreven (o.a. du→n_deg, var→være, kan→
   n_kunne, skal→skulle, å→n_aa, en/et→n_lidwoord, løp→sm_l_lope).
   -------------------------------------------------------------------- */
const GNEEDS={
 'cv_morgen#0':['god','morgen'],
 'cv_morgen#1':['god','morgen','ha','n_deg','n_sove'],
 'cv_morgen#2':['n_ja','jeg','n_sove','n_kjempe'],
 'cv_morgen#3':['n_saa','n_bra','n_ville','n_deg','ha','kaffe'],
 'cv_morgen#4':['n_ja','takk','n_gjerne'],
 'cv_morgen#5':['jeg','lage','frokost','n_naa'],
 'cv_sulten#0':['jeg','være','n_sulten'],
 'cv_sulten#1':['ka','n_ville','n_deg','ha'],
 'cv_sulten#2':['ka','ha','n_oss','i','kjøleskap'],
 'cv_sulten#3':['n_det','være','n_brod','og','n_ost'],
 'cv_sulten#4':['n_kunne','jeg','n_faa','n_litt','melk','n_ogsaa'],
 'cv_sulten#5':['være','n_saa','god'],
 'cv_sulten#6':['takk','n_for','mat'],
 'jo_er_du_sulten#0':['være','n_deg','n_sulten'],
 'jo_er_du_sulten#1':['n_ja','n_veldig'],
 'jo_er_du_sulten#2':['ka','ha','n_deg','lyst','på'],
 'jo_er_du_sulten#3':['jeg','ha','n_veldig','lyst','på','n_pasta'],
 'jo_er_du_sulten#4':['n_pasta','hores','god','n_ut','skulle','n_oss','lage','n_det','n_sammen'],
 'jo_er_du_sulten#6':['n_brod','med'],
 'jo_er_du_sulten#7':['n_nei','n_deg','ha','n_allerede','spise','n_det','n_denne','n_uke'],
 'jo_er_du_sulten#8':['være','n_saa','n_snill'],
 'jo_er_du_sulten#9':['gw_ok','n_hvis','n_deg','ikke','si','n_noe','til','mamma'],
 'jo_er_du_sulten#11':['n_nei','jeg','være','ikke','n_sulten'],
 'jo_er_du_sulten#12':['n_nei','n_vel','være','n_deg','sm_h_torst','n_da'],
 'jo_er_du_sulten#13':['n_litt'],
 'jo_er_du_sulten#14':['ha','n_deg','lyst','på','sm_h_vann','melk','n_eller','n_noe','n_annen'],
 'jo_er_du_sulten#15':['kanskje','n_litt','melk'],
 'jo_hva_vil_du_ha_til_frokost#0':['ka','ha','n_deg','lyst','på','til','frokost','i','dag'],
 'jo_hva_vil_du_ha_til_frokost#1':['jeg','n_vite','ikke'],
 'jo_hva_vil_du_ha_til_frokost#2':['n_noe','sm_h_sot','n_eller','sm_h_salt'],
 'jo_hva_vil_du_ha_til_frokost#3':['n_noe','sm_h_sot'],
 'jo_hva_vil_du_ha_til_frokost#4':['gw_yoghurt','med','n_frukt','n_frokostblanding','n_eller','n_brod','n_syltetoy'],
 'jo_hva_vil_du_ha_til_frokost#6':['jeg','være','n_egentlig','ikke','n_sulten'],
 'jo_hva_vil_du_ha_til_frokost#7':['n_det','være','n_helt','n_greit_nok','n_ville','n_deg','n_bare','ha','n_noe','n_aa','n_drikke','n_naa'],
 'jo_hva_vil_du_ha_til_frokost#8':['n_ja','melk'],
 'jo_hva_vil_du_ha_til_frokost#9':['n_ville','n_deg','ha','gw_vanlig','melk','n_eller','n_helt','gw_vill','gw_riste','gw_melkeskum'],
 'jo_hva_skal_vi_ha_til_middag_#0':['ka','ha','n_deg','lyst','på','til','middag','i','morgen'],
 'jo_hva_skal_vi_ha_til_middag_#1':['gw_pizza'],
 'jo_hva_skal_vi_ha_til_middag_#2':['gw_hjemmelaget','n_eller','gw_kjopepizza'],
 'jo_hva_skal_vi_ha_til_middag_#3':['gw_hjemmelaget'],
 'jo_hva_skal_vi_ha_til_middag_#4':['n_bra','gw_valg','ka','skulle','n_oss','ha','på','n_den'],
 'jo_hva_skal_vi_ha_til_middag_#6':['n_vite','ikke'],
 'jo_hva_skal_vi_ha_til_middag_#7':['skulle','jeg','n_gi','n_deg','tall_3','gw_forslag'],
 'jo_hva_skal_vi_ha_til_middag_#8':['n_ja'],
 'jo_hva_skal_vi_ha_til_middag_#9':['gw_pai','gw_taco','n_eller','fisk'],
 'jo_hva_skal_vi_ha_til_middag_#10':['gw_taco'],
 'jo_ettermiddagsmat_hamarretak#0':['ka','n_ville','n_deg','ha','til','gw_hamarretako','i','morgen'],
 'jo_ettermiddagsmat_hamarretak#1':['kanskje','n_lidwoord','n_skive'],
 'jo_ettermiddagsmat_hamarretak#2':['ka','n_ville','n_deg','ha','på','n_den'],
 'jo_ettermiddagsmat_hamarretak#3':['n_skinke','og','n_ost'],
 'jo_ettermiddagsmat_hamarretak#4':['n_ville','n_deg','ha','med','n_litt','n_frukt','n_ogsaa'],
 'jo_ettermiddagsmat_hamarretak#6':['jeg','n_vite','ikke'],
 'jo_ettermiddagsmat_hamarretak#7':['ka','ha','være','n_ekstra','god','n_aa','n_finne','i','gw_matboks','morgen'],
 'jo_ettermiddagsmat_hamarretak#8':['gw_jordbaer'],
 'jo_ettermiddagsmat_hamarretak#9':['n_da','skulle','n_oss','se','n_om','ha','n_noen'],
 'jo_hvordan_var_skolen_i_dag#0':['kordan','være','n_skole','i','dag'],
 'jo_hvordan_var_skolen_i_dag#1':['n_bra'],
 'jo_hvordan_var_skolen_i_dag#2':['være','n_det','n_noe','n_spesiell','n_som','gw_skje'],
 'jo_hvordan_var_skolen_i_dag#3':['n_oss','gjøre','n_noe','morsom','i','gw_naturfag'],
 'jo_hvordan_var_skolen_i_dag#4':['n_aa','ka','gjøre','dere'],
 'jo_hvordan_var_skolen_i_dag#5':['n_oss','gjøre','n_lidwoord','gw_eksperiment'],
 'jo_hvordan_var_skolen_i_dag#7':['darlig'],
 'jo_hvordan_var_skolen_i_dag#8':['gw_uff','ka','gw_skje'],
 'jo_hvordan_var_skolen_i_dag#9':['n_venn','n_min','være','n_dum','jeg','alene','n_hele_tida','n_det','n_mye','n_braak','i','gw_klasse'],
 'jo_hvordan_var_skolen_i_dag#10':['n_det','hores','ikke','n_noe','hyggelig','n_ut','ha','n_deg','lyst','til','n_aa','n_fortelle','jeg','n_om'],
 'jo_har_du_laert_noe_nytt#0':['n_laere','n_deg','n_noe','n_ny','n_eller','n_spennende','i','dag'],
 'jo_har_du_laert_noe_nytt#1':['n_ja','n_faktisk'],
 'jo_har_du_laert_noe_nytt#2':['ka','n_da'],
 'jo_har_du_laert_noe_nytt#3':['n_oss','n_laere','n_om','gw_verdensrom'],
 'jo_har_du_laert_noe_nytt#4':['gw_kul','ka','være','n_det','n_mer','n_interessant','n_deg','n_laere'],
 'jo_har_du_laert_noe_nytt#6':['n_nei','n_ingenting'],
 'jo_har_du_laert_noe_nytt#7':['n_ingen','n_stor','gw_oppdagelse','i','dag','n_altsaa'],
 'jo_har_du_laert_noe_nytt#8':['n_nei'],
 'jo_har_du_laert_noe_nytt#9':['være','n_det','i','n_i_hvert_fall','n_noe','n_som','morsom'],
 'jo_hvordan_gikk_proven#0':['kordan','synes','n_deg','gw_prove','n_gaa'],
 'jo_hvordan_gikk_proven#1':['n_ganske','n_bra','n_tro','jeg'],
 'jo_hvordan_gikk_proven#2':['være','n_den','n_omtrent','n_slik','n_deg','ha','gw_forvente'],
 'jo_hvordan_gikk_proven#3':['n_ja','n_men','sm_h_en','sm_h_oppgave','være','n_vanskelig'],
 'jo_hvordan_gikk_proven#4':['ka','n_handle','n_den','n_om'],
 'jo_hvordan_gikk_proven#6':['n_den','n_gaa','darlig'],
 'jo_hvordan_gikk_proven#7':['være','n_den','n_vanskelig','n_enn','n_deg','ha','n_tro'],
 'jo_hvordan_gikk_proven#8':['n_ja','jeg','skjønne','ikke','n_stadig','n_av','sm_h_oppgave'],
 'jo_hvordan_gikk_proven#9':['n_ville','n_deg','n_fortelle','jeg','n_om','n_dem','n_eller','n_gjerne','n_bare','n_glemme','gw_prove','n_for','i','dag'],
 'jo_har_du_mye_lekser#0':['ha','n_deg','n_mye','sm_h_lekse','i','dag'],
 'jo_har_du_mye_lekser#1':['n_ja','gw_altfor','n_mye'],
 'jo_har_du_mye_lekser#2':['ka','n_maatte','n_deg','gjøre'],
 'jo_har_du_mye_lekser#3':['n_matematikk','n_engelsk','og','sm_l_lese'],
 'jo_har_du_mye_lekser#4':['ka','n_ville','n_deg','n_begynne','med'],
 'jo_har_du_mye_lekser#5':['n_matematikk','n_saa','n_bli','jeg','ferdig','med','n_det','darlig','n_forst'],
 'jo_har_du_mye_lekser#7':['n_nei','n_nesten','n_ingenting'],
 'jo_har_du_mye_lekser#8':['n_saa','deilig','ka','ha','n_deg','lyst','til','n_aa','gjøre','naar_vraag','være','ferdig'],
 'jo_har_du_mye_lekser#9':['n_bare','n_slappe_av','n_av'],
 'jo_har_du_mye_lekser#10':['n_det','hores','n_ut','n_som','n_lidwoord','god','plan'],
 'jo_noe_fint_fra_dagen#0':['ka','være','n_det','morsom','n_eller','god','n_som','gw_skje','i','dag'],
 'jo_noe_fint_fra_dagen#1':['jeg','n_hate','n_det','n_sporsmaal'],
 'jo_noe_fint_fra_dagen#2':['n_greit_nok','n_da','n_stryke','n_oss','n_det','n_sporsmaal'],
 'jo_noe_fint_fra_dagen#3':['n_bra'],
 'jo_noe_fint_fra_dagen#4':['n_men','gw_skje','n_det','n_noe','n_som','n_faa','n_deg','til','n_aa','n_le'],
 'jo_hvordan_var_friidretten#0':['være','n_det','goy','på','gw_friidrett','i','dag'],
 'jo_hvordan_var_friidretten#1':['n_ja'],
 'jo_hvordan_var_friidretten#2':['ka','gjøre','dere'],
 'jo_hvordan_var_friidretten#3':['n_oss','sm_l_lope','gw_stafett'],
 'jo_hvordan_var_friidretten#4':['ka','like','n_deg','n_bra','n_aa','sm_l_lope','n_hoppe','n_eller','n_kaste'],
 'jo_hvordan_var_friidretten#6':['n_nei','n_det','være','n_kjedelig'],
 'jo_hvordan_var_friidretten#7':['n_aa','ka','være','n_det','n_som','gjøre','n_kjedelig','i','dag'],
 'jo_hvordan_var_friidretten#8':['n_oss','n_maatte','n_vente','n_veldig','n_mye'],
 'jo_hvordan_var_friidretten#9':['n_ja','n_det','skjønne','jeg','være','n_noe','n_som','n_litt','goy','n_likevel'],
 'jo_sykling_eller_dansing#0':['kordan','være','sm_h_sykle','danse','i','dag'],
 'jo_sykling_eller_dansing#1':['n_kjempe'],
 'jo_sykling_eller_dansing#2':['ka','være','n_det','god'],
 'jo_sykling_eller_dansing#3':['n_oss','n_laere','n_noe','n_ny'],
 'jo_sykling_eller_dansing#4':['n_vise','jeg','n_eller','være','n_det','n_vanskelig','n_aa','hjemme'],
 'jo_sykling_eller_dansing#6':['ikke','n_saa','goy','i','dag'],
 'jo_sykling_eller_dansing#7':['n_nei','være','n_det','selv','n_trening','n_eller','n_noe','n_annen'],
 'jo_sykling_eller_dansing#8':['jeg','være','n_bare','gw_sliten'],
 'jo_sykling_eller_dansing#9':['n_det','skjønne','jeg','n_da','trenge','n_deg','kanskje','n_lidwoord','n_rolig','kveld'],
 'jo_skal_jeg_folge_deg#0':['n_ville','n_deg','n_at','jeg','skulle','n_folge','til','n_trening','n_eller','n_gaa','selv'],
 'jo_skal_jeg_folge_deg#1':['jeg','n_ville','n_gaa','selv'],
 'jo_skal_jeg_folge_deg#2':['n_helt','fin','n_ville','n_deg','n_at','jeg','skulle','n_hente','n_etterpaa'],
 'jo_skal_jeg_folge_deg#3':['n_ja','n_gjerne'],
 'jo_skal_jeg_folge_deg#4':['gw_ok','kor','n_ville','n_deg','n_at','jeg','skulle','gw_mote'],
 'jo_skal_jeg_folge_deg#6':['n_kunne','n_deg','n_bli','med','jeg'],
 'jo_skal_jeg_folge_deg#7':['n_selvfolgelig','n_ville','n_deg','n_at','jeg','n_folge','n_helt','n_inn'],
 'jo_skal_jeg_folge_deg#8':['n_nei','n_bare','n_bort','gw_dit'],
 'jo_skal_jeg_folge_deg#9':['n_greit_nok','n_da','gjøre','n_oss','n_det','n_saann'],
 'jo_har_du_noen_planer_med_ven#0':['ha','n_deg','gjøre','n_noen','n_avtale','med','n_venn','i','n_helg'],
 'jo_har_du_noen_planer_med_ven#1':['n_ja','jeg','skulle','være','med','på','lordag'],
 'jo_har_du_noen_planer_med_ven#2':['n_saa','hyggelig','n_vite','dere','ka','skulle','gjøre'],
 'jo_har_du_noen_planer_med_ven#3':['kanskje','n_leke','hjemme'],
 'jo_har_du_noen_planer_med_ven#4':['hores','n_koselig','n_ut','n_ville','dere','være','n_her','n_eller','n_hos','n_henne'],
 'jo_har_du_noen_planer_med_ven#6':['n_nei','jeg','ha','n_ingen','plan'],
 'jo_har_du_noen_planer_med_ven#7':['ha','n_deg','lyst','til','n_aa','n_finne','på','n_noe','med','n_noen','n_eller','n_ville','n_gjerne','n_lidwoord','n_rolig','n_helg'],
 'jo_har_du_noen_planer_med_ven#8':['jeg','n_ville','n_egentlig','n_bare','være','hjemme'],
 'jo_har_du_noen_planer_med_ven#9':['n_det','n_kunne','være','deilig','n_ogsaa'],
 'jo_hva_har_du_lyst_til_aa_gjo#0':['ka','ha','n_deg','lyst','til','n_aa','gjøre','i','n_helg'],
 'jo_hva_har_du_lyst_til_aa_gjo#1':['n_vite','ikke'],
 'jo_hva_har_du_lyst_til_aa_gjo#2':['n_ville','n_deg','n_gjerne','gjøre','n_noe','n_ute','n_eller','være','hjemme'],
 'jo_hva_har_du_lyst_til_aa_gjo#3':['n_ut'],
 'jo_hva_har_du_lyst_til_aa_gjo#4':['skulle','n_oss','n_finne','på','n_noe','n_sammen','n_eller','ha','n_deg','n_mer','lyst','til','n_aa','gjøre','med','n_venn'],
 'jo_hva_har_du_lyst_til_aa_gjo#6':['n_kunne','n_oss','dra','på','sm_h_tur'],
 'jo_hva_har_du_lyst_til_aa_gjo#7':['n_ja','kor','ha','n_deg','lyst','til','n_aa','dra'],
 'jo_hva_har_du_lyst_til_aa_gjo#8':['n_lidwoord','sted','med','sm_h_vann'],
 'jo_hva_har_du_lyst_til_aa_gjo#9':['god','n_ide','n_da','n_finne','n_oss','n_lidwoord','fin','sted','n_sammen'],
 'jo_skal_vi_spille_noe#0':['jeg','ha','lyst','til','n_aa','n_spille','n_lidwoord','gw_spill','n_deg'],
 'jo_skal_vi_spille_noe#1':['n_ja'],
 'jo_skal_vi_spille_noe#2':['ka','skulle','n_oss','n_spille'],
 'jo_skal_vi_spille_noe#3':[],
 'jo_skal_vi_spille_noe#4':['n_greit_nok','n_men','jeg','gw_advare','n_deg','i','dag','skulle','gw_vinne'],
 'jo_skal_vi_spille_noe#5':['n_det','n_komme','n_aldri','til','n_aa','gw_skje'],
 'jo_skal_vi_spille_noe#7':['n_nei','jeg','sm_gidkje','ikke'],
 'jo_skal_vi_spille_noe#8':['n_greit_nok','ka','ha','n_deg','lyst','til','n_aa','gjøre','i','sted'],
 'jo_skal_vi_spille_noe#9':['sm_h_tegne'],
 'jo_skal_vi_spille_noe#10':['gw_ok','n_ville','n_deg','sm_h_tegne','alene','n_eller','skulle','n_oss','gjøre','n_det','n_sammen'],
 'jo_skal_vi_spille_noe#11':['alene'],
 'jo_skal_vi_spille_noe#12':['n_greit_nok','kanskje','n_oss','n_kunne','n_spille','n_etterpaa','n_hvis','n_deg','n_faa','lyst'],
 'jo_naar_barnet_virker_stille#0':['n_deg','n_virke','n_litt','n_stille','i','dag','n_gaa','n_det','n_bra'],
 'jo_naar_barnet_virker_stille#1':['n_ja'],
 'jo_naar_barnet_virker_stille#2':['gw_ok','jeg','n_ville','n_bare','n_sporre'],
 'jo_naar_barnet_virker_stille#3':['jeg','være','n_bare','n_litt','gw_sliten'],
 'jo_naar_barnet_virker_stille#4':['skjønne','n_ville','n_deg','være','n_litt','alene','n_eller','n_at','jeg','skulle','n_sammen','med'],
 'jo_naar_barnet_virker_stille#6':['n_nei','n_egentlig','ikke'],
 'jo_naar_barnet_virker_stille#7':['ha','n_deg','lyst','til','n_aa','n_fortelle','ka','n_som','gw_skje'],
 'jo_naar_barnet_virker_stille#8':['kanskje','n_senere'],
 'jo_naar_barnet_virker_stille#9':['n_helt','n_greit_nok','n_deg','n_kunne','n_komme','til','jeg','naar_vraag','n_ville'],
 'jo_bli_kjent_med_jentene#0':['n_hei','n_kunne','jeg','n_gi','mamma','dere','n_lidwoord','n_klem','og','gw_kyss'],
 'jo_bli_kjent_med_jentene#1':['n_kunne','jeg','n_gi','n_deg','n_lidwoord','n_klem','n_ogsaa'],
 'jo_bli_kjent_med_jentene#2':['jeg','ha','n_noe','liten','med','til','n_deg'],
 'jo_bli_kjent_med_jentene#3':['jeg','synes','n_det','være','gw_kjekk','n_aa','se','n_deg'],
 'jo_bli_kjent_med_jentene#4':['jeg','n_glede_seg','n_veldig','til','n_aa','se','dere'],
 'jo_bli_kjent_med_jentene#5':['n_beklage','n_at','jeg','ikke','snakke','n_saa','god','n_norsk','n_ennaa','n_men','skulle','n_laere','n_det'],
 'jo_bli_kjent_med_jentene#6':['gw_kjekk','n_aa','n_bli','n_kjent','med','dere']
};


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
        needs:(GNEEDS[c.id+'#'+i]||[]),   /* v11.36 §79 */
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
