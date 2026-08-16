/* ============================================================
   Side om side — TIJD & GETALLEN (databestand, v11.2 §29.9)
   Weekdagen, maanden en de getallen 0–20.
   Alle drie de groepen dragen het label 'next' (§29.6): ze staan meteen bij ZWAK,
   maar krijgen GEEN kunstmatige foutswipe — hun score blijft leeg tot je ze echt swipet.
   Deze woorden zijn standaard-Noors; Bergens wijkt hier niet af in schrijfwijze,
   enkel in uitspraak (keel-r, geen retroflex). Onzekere klanken staan als «tbc».
   Markup-helpers (E/X/G/N/_) komen uit index.html.
   ============================================================ */
(function(){
const T = (o)=>Object.assign({type:'woord',kern:false,labels:['next','tijd'],episodes:[],src:'',cmt:''},o);

/* een weekdag: en-woord, bepaalde vorm op -en, meervoud op -er/-ene */
function DAG(id,nb,nl,ph,phnl,cmt){
  return T({id:id, tlbl:'zn.', phNB:ph, phNL:phnl, cmt:cmt||'',
    hnb:'en <b>'+nb+'</b> '+G+'♂'+_, hnl:'een <b>'+nl+'</b>',
    forms:[[nb+E+'en'+_,'de '+nl],[nb+E+'er'+_,nl+'en'],[nb+E+'ene'+_,'de '+nl+'en']],
    snb:'Vi sees på '+nb+'.', snl:'We zien elkaar op '+nl+'.'});
}
/* een maand: staat zonder lidwoord, gebruikt met «i» */
function MND(id,nb,nl,ph,phnl){
  return T({id:id, tlbl:'zn.', phNB:ph, phNL:phnl,
    hnb:'<b>'+nb+'</b>', hnl:'<b>'+nl+'</b>',
    snb:'Eg har bursdag i '+nb+'.', snl:'Ik ben jarig in '+nl+'.'});
}
/* een getal */
function TAL(id,nb,nl,ph,phnl,cmt){
  return T({id:id, tlbl:'telw.', phNB:ph, phNL:phnl, cmt:cmt||'',
    hnb:'<b>'+nb+'</b>', hnl:'<b>'+nl+'</b>'});
}

window.TID = [

/* ---------- WEEKDAGEN (ukedager) ---------- */
 DAG('mandag','mandag','maandag','MAN-dag','MAAN-dakh',
     'In gewone spreektaal hoor je vaak «-da» in plaats van «-dag»: MAN-da.'),
 DAG('tirsdag','tirsdag','dinsdag','TIRS-dag','DINS-dakh',
     'In Bergen géén retroflex: je hoort de r en de s apart, niet als «sj».'),
 DAG('onsdag','onsdag','woensdag','ONS-dag','WOENS-dakh',''),
 DAG('torsdag','torsdag','donderdag','TORS-dag','DON-der-dakh',''),
 DAG('fredag','fredag','vrijdag','FREE-dag','VRIJ-dakh',''),
 DAG('sondag','søndag','zondag','SÖN-dag','ZON-dakh',''),
 /* zaterdag staat al in words.js als «lordag» (Side om side, aflevering 3) */

/* ---------- MAANDEN (måneder) ---------- */
 MND('januar','januar','januari','ja-nu-AAR','ja-nu-AA-rie'),
 MND('februar','februar','februari','FE-bru-aar','fee-bru-AA-rie'),
 MND('mars_mnd','mars','maart','marss','maart'),
 MND('april','april','april','a-PRIL','aa-PRIL'),
 MND('mai','mai','mei','maai','mei'),
 MND('juni','juni','juni','JUU-ni','JUU-nie'),
 MND('juli','juli','juli','JUU-li','JUU-lie'),
 MND('august','august','augustus','au-GUST','au-GUS-tus'),
 MND('september','september','september','sep-TEM-ber','sep-TEM-ber'),
 MND('oktober','oktober','oktober','ok-TOO-ber','ok-TOO-ber'),
 MND('november','november','november','no-VEM-ber','no-VEM-ber'),
 MND('desember','desember','december','de-SEM-ber','dee-SEM-ber'),

/* ---------- GETALLEN 0–20 ---------- */
 TAL('tall_0','null','nul','nul','nul',''),
 TAL('tall_1','en / ett','een','een / ett','een',
     'Tellen doe je met «én» (en-woord) of «ett» (et-woord): én bil · ett hus. Als lidwoord blijft het en/et.'),
 TAL('tall_2','to','twee','tuu','twee',''),
 TAL('tall_3','tre','drie','tree','drie',''),
 TAL('tall_4','fire','vier','FII-re','vier',''),
 TAL('tall_5','fem','vijf','femm','vijf',''),
 TAL('tall_6','seks','zes','seks','zes',''),
 TAL('tall_7','sju','zeven','sjuu','ZEE-ven',
     'Ook «syv» is correct bokmål; «sju» is de gewone spreekvorm.'),
 TAL('tall_8','åtte','acht','OT-te','acht',''),
 TAL('tall_9','ni','negen','nii','NEE-ghen',''),
 TAL('tall_10','ti','tien','tii','tien',''),
 TAL('tall_11','elleve','elf','EL-ve','elf','De tweede e hoor je nauwelijks: «EL-ve».'),
 TAL('tall_12','tolv','twaalf','toll','twaalf','De v hoor je niet: «toll».'),
 TAL('tall_13','tretten','dertien','TRET-ten','DER-tien',''),
 TAL('tall_14','fjorten','veertien','FJOR-ten','VEER-tien',''),
 TAL('tall_15','femten','vijftien','FEM-ten','VIJF-tien',''),
 TAL('tall_16','seksten','zestien','SEIS-ten','ZES-tien','Let op: de k hoor je niet — «SEIS-ten».'),
 TAL('tall_17','sytten','zeventien','SÖT-ten','ZEE-ven-tien',''),
 TAL('tall_18','atten','achttien','AT-ten','ACHT-tien',''),
 TAL('tall_19','nitten','negentien','NIT-ten','NEE-ghen-tien',''),
 TAL('tall_20','tjue','twintig','KJUU-e','TWIN-tikh',
     'Ook «tyve» bestaat, maar «tjue» is vandaag de gewone vorm. Of de tj- in Bergen als «sj» klinkt: tbc — voorleggen aan Johanne.')
];
})();
