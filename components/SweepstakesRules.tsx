import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';

export const SweepstakesRules: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                <ArrowLeft size={16} /> Nazaj na domačo stran
            </a>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
            <h1 className="text-2xl md:text-4xl font-serif font-black text-white mb-4 leading-tight">
                Splošni pogoji sodelovanja in določila varovanja osebnih podatkov v nagradni igri »Nagradna igra AI Univerza«
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Scale size={16} />
                <span>Uradni dokument</span>
            </div>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-12 leading-relaxed text-sm md:text-base text-gray-300">
            
            <section>
                <h2 className="text-white font-bold text-2xl mb-6 border-b border-white/10 pb-2">I. Splošni pogoji</h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">1. Organizator nagradne igre</h3>
                        <p>
                            Nagradno igro organizira družba <strong>3PM d.o.o.</strong>, Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID, matična številka: 9861459000, ID za DDV: SI 29078750 (v nadaljevanju »organizator«).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">2. Namen nagradne igre</h3>
                        <p>
                            Namen izvedbe te nagradne igre je promocija <strong>AI Univerze</strong> ter izvajanje trženjskega komuniciranja na območju Republike Slovenije.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">3. Trajanje nagradne igre</h3>
                        <p>
                            Nagradna igra traja od dne <strong>11. 1. 2026 (od 00:01 ure)</strong> do dne <strong>16. 1. 2026 (do 23:59 ure)</strong>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">4. Sodelovanje v nagradni igri</h3>
                        <p className="mb-4">
                            V nagradni igri lahko sodelujejo fizične osebe, starejše od 18 let, s stalnim prebivališčem v Republiki Sloveniji, ki izpolnjujejo v teh splošnih pogojih navedene pogoje za sodelovanje. V nagradni igri ni dovoljeno sodelovati osebam, ki so zaposlene pri organizatorju. Udeleženci ne smejo sodelovati v imenu tretjih oseb.
                        </p>
                        <p className="mb-4">
                            Pogoj za sodelovanje v nagradni igri je, da so udeleženci seznanjeni in se strinjajo z vsemi pogoji in pravili nagradne igre ter soglašajo s posredovanjem in obdelavo osebnih podatkov za namen izvedbe nagradne igre. Šteje se, da s sodelovanjem v nagradni igri na enega izmed načinov, opisanega v teh pravilih, udeleženec pristane na vse pogoje in pravila v zvezi z nagradno igro, ki so objavljeni na <span className="text-brand-gold">www.aiuniverza.si/pravila</span>.
                        </p>
                        <p>
                            Nagrajenci, ki ne izpolnjujejo pogojev opredeljenih v splošnih pogojih sodelovanja v nagradni igri, bodo iz nagradne igre izključeni s strani organizatorja. Organizator si pridržuje pravico do dopolnitev in sprememb teh splošnih pogojev. Vsaka sprememba oz. dopolnitev bo objavljena na www.aiuniverza.si/pravila.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">5. Način sodelovanja v nagradni igri</h3>
                        <p className="mb-4">Sodelovanje v nagradni igri je mogoče na dva načina:</p>
                        <ul className="list-disc pl-5 space-y-4 mb-4">
                            <li>
                                <strong>1. način (z nakupom):</strong> Za sodelovanje v nagradni igri mora udeleženec v času trajanja nagradne igre opraviti <strong>nakup programa AI Univerza</strong>. Vsak opravljen nakup v obdobju trajanja nagradne igre, navedenem v točki 3. teh splošnih pogojev, šteje kot ena prijava za sodelovanje v žrebanju.
                            </li>
                            <li>
                                <strong>2. način (brez nakupa):</strong> Posameznik lahko v nagradni igri sodeluje tudi tako, da pošlje ročno napisano pismo na naslov organizatorja: <strong>3PM d.o.o., Prušnikova ulica 19, Ljubljana, 1210 LJUBLJANA-ŠENTVID</strong>. Pismo mora vsebovati naslednje osebne podatke udeleženca: ime, priimek ter elektronski naslov. S posredovanjem pisma in osebnih podatkov se šteje, da se posameznik strinja s splošnimi pogoji sodelovanja v nagradni igri in jih sprejema. Če organizator ugotovi, da prijava udeleženca ni veljavna, ker ji manjka kateri od zahtevanih podatkov ali če prijava ni skladna s pravili, lahko takšnega udeleženca izključi iz sodelovanja v nagradni igri.
                            </li>
                        </ul>
                        <p className="mb-4">
                            <strong>Omejitve sodelovanja:</strong> Možno je večkratno sodelovanje v nagradni igri, pri čemer posameznik lahko sodeluje največ <strong>1-krat (enkrat) na dan</strong>, ne glede na izbrani način sodelovanja.
                        </p>
                        <p>
                            Vsi, ki sodelujejo s pomočjo prepovedanih sredstev (npr. avtomatiziranih skript, lažnih profilov itd.), bodo iz sodelovanja izključeni. Skupinsko sodelovanje ter sodelovanje na podlagi avtomatizirane storitve ni dovoljeno.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">6. Izbor in obveščanje nagrajencev</h3>
                        <p className="mb-4">
                            Komisija, ki jo sestavlja predstavnik zaposlenih pri organizatorju (v nadaljevanju: komisija), bo med tistimi sodelujočimi, ki bodo v nagradni igri sodelovali v skladu s temi pravili, po zaključku nagradne igre izžrebala <strong>3 (tri) nagrajence</strong> in <strong>3 (tri) nadomestne nagrajence</strong>.
                        </p>
                        <p className="mb-4">
                            Komisija bo žreb nagrajencev izvedla dne <strong>1. 2. 2026</strong> na lokaciji <strong>Letališka 1, 1000 Ljubljana</strong>. Žreb ne bo javen.
                        </p>
                        <p className="mb-4">
                            Izvedla se bo interna preverba, da nihče od izžrebanih nagrajencev ni zaposlen pri organizatorju. V primeru izžrebanega zaposlenega bo komisija tega izžrebanca izločila in nagrado podelila nadomestnemu izžrebancu po vrstnem redu izžrebanih.
                        </p>
                        <p className="mb-4">
                            Zapisnik o nagrajencih z njihovimi osebnimi podatki bo podpisan s strani komisije in se bo hranil na sedežu organizatorja deset (10) let od njegovega zapisa.
                        </p>
                        <p className="mb-4">
                            <strong>Objava in obveščanje:</strong> Rezultati žrebanja bodo objavljeni 1 dan po žrebu (dne 2. 2. 2026) v <strong>Skool skupnosti AI Univerza</strong> in na <strong>Instagram profilu @nepridiprav</strong>.
                        </p>
                        <p className="mb-4">
                            Nagrajenci bodo s strani organizatorja o izboru obveščeni tudi po sporočeni elektronski pošti. V roku <strong>7 (sedmih) dni</strong> po prejemu obvestila o nagradi mora nagrajenec organizatorju sporočiti vse potrebne podatke za pošiljanje oziroma prevzem nagrade (naslov stalnega prebivališča, davčna številka).
                        </p>
                        <p>
                            Če se nagrajenec v 7 (sedmih) dneh od obvestila o izboru ne bo javil, ne bo javil točnih ali celotnih podatkov ali z njim ne bo mogoče vzpostaviti stika, bo to pomenilo, da se njegovo sodelovanje v igri prekine in se mu nagrada ne podeli. V tem primeru se imenuje novega nagrajenca iz seznama nadomestnih nagrajencev.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">7. Podelitev nagrad</h3>
                        <p>
                            Organizator bo nagrade nagrajencem poslal po pošti ali omogočil prevzem po dogovoru. Stroške pošiljanja krije organizator. Nagrada ni prenosljiva na tretje osebe. Izplačilo nagrade v denarju ni možno.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">8. Obdavčitev nagrad</h3>
                        <p className="mb-4">
                            Prejemnik nagrade je po Zakonu o dohodnini (ZDoh-2) davčni zavezanec, zato mora skladno z ZDoh-2 in Zakonom o davčnem postopku (ZDavP-2) pred prevzemom nagrade organizatorju predložiti osebne podatke (ime, priimek, naslov, davčna številka).
                        </p>
                        <p>
                            Ker vrednost posameznih nagrad presega zakonsko določeno mejo (42 EUR), organizator za nagrajence odvede <strong>akontacijo dohodnine</strong> v skladu z veljavnimi predpisi. Akontacijo dohodnine plača organizator. Morebitna doplačila dohodnine v skladu z letno dohodninsko odločbo gredo v breme nagrajenca.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">9. Nagradni sklad</h3>
                        <p className="mb-4">
                            Organizator bo v nagradni igri podelil 3 nagrade. Skupna vrednost nagradnega sklada znaša <strong>15.069,94 EUR</strong> (z DDV).
                        </p>
                        <p className="mb-4 font-bold">Nagrade:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>1 x MacBook Pro M5 14 inch (vrednost: 1.939,95 €)</li>
                            <li>1 x iPhone 17 Pro (vrednost: 1.379,99 €)</li>
                            <li>1 x Rolex Datejust (vrednost: 11.750,00 €)</li>
                        </ul>
                        <p>
                            Namesto nagrade ni mogoče zahtevati njene denarne protivrednosti. Navedena vrednost posamezne nagrade predstavlja njeno tržno vrednost (z DDV) na dan sprejema teh pravil.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">10. Izključitev odgovornosti</h3>
                        <p className="mb-4">
                            Sodelujoči sodelujejo v nagradni igri na lastno odgovornost. Organizator ne odgovarja za morebitno škodo, ki bi izvirala iz nagrade. Organizator ne prevzema nobene odgovornosti za kakršnekoli nezaželene posledice, ki bi jih sodelujoči in/ali kdorkoli tretji utrpel kot posledica sodelovanja v nagradni igri ali kot posledica koriščenja nagrade.
                        </p>
                        <p className="mb-4">
                            Organizator prav tako ni odgovoren, če je strežnik ali spletna stran nedosegljiva, razen če bi bilo to mogoče pripisati skrajno malomarnim ali namernim dejanjem na strani organizatorja. Organizator ni odgovoren za točnost in popolnost posredovanih informacij s strani udeležencev.
                        </p>
                        <p>
                            V primeru reklamacij ali uveljavljanja jamčevalnih zahtevkov na izdelku, ki je predmet nagradnega sklada, se nagrajenec obrne na proizvajalca izdelka oz. njegovega zastopnika v Republiki Sloveniji.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-white font-bold text-2xl mb-6 border-b border-white/10 pb-2">II. Določila o varstvu osebnih podatkov</h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">1. Podatki o upravljavcu osebnih podatkov</h3>
                        <p>
                            Upravljavec osebnih podatkov udeležencev in nagrajencev je organizator <strong>3PM d.o.o.</strong>. Organizator bo pridobljene osebne podatke varoval v skladu z veljavno zakonodajo na področju varstva osebnih podatkov (Splošna uredba GDPR in ZVOP-2) ter v skladu s svojimi notranjimi akti. Organizator pridobljenih osebnih podatkov v nobenem primeru ne bo posredoval ali razkril nepooblaščenim tretjim osebam.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">2. Kategorije in izvor podatkov</h3>
                        <p className="mb-4">Za izvedbo nagradne igre organizator zbira in obdeluje naslednje osebne podatke udeležencev:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>ime in priimek,</li>
                            <li>elektronski naslov.</li>
                        </ul>
                        <p className="mb-4">Pri nagrajencih, ki prejmejo nagrado v vrednosti nad 42 EUR, organizator dodatno zbira še:</p>
                        <ul className="list-disc pl-5">
                            <li>naslov stalnega prebivališča,</li>
                            <li>davčno številko (za namen odmere akontacije dohodnine).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">3. Namen in pravna podlaga obdelave osebnih podatkov</h3>
                        <p className="mb-4">
                            Organizator bo osebne podatke, zbrane v okviru sodelovanja v nagradni igri, uporabil izključno za namen izvedbe nagradne igre (žrebanje nagrajencev, obveščanje in objava nagrajencev, pošiljanje nagrad, izpolnjevanje davčnih obveznosti).
                        </p>
                        <p className="mb-4">Pravna podlaga za obdelavo osebnih podatkov v okviru nagradne igre je:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li><strong>Privolitev</strong> (člen 6(1)(a) GDPR) za sodelovanje v igri in obveščanje o izidu.</li>
                            <li><strong>Zakonska obveznost</strong> (člen 6(1)(c) GDPR) v povezavi z davčno zakonodajo za nagrajence.</li>
                        </ul>
                        <p>
                            Brez posredovanja podatkov sodelovanje v nagradni igri in prevzem nagrade nista možna.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">4. Prejemniki podatkov</h3>
                        <p>
                            Osebne podatke obdeluje organizator. Tretjim osebam se osebni podatki posredujejo le, kadar je to potrebno za izvedbo nagradne igre (npr. dostavni službi za pošiljanje nagrade ali FURS-u za potrebe davčnega poročanja).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">5. Čas shranjevanja</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Osebni podatki neizžrebanih udeležencev se izbrišejo po zaključku nagradne igre in razglasitvi nagrajencev.</li>
                            <li>Osebni podatki nagrajencev se obdelujejo in hranijo <strong>10 let</strong> od podelitve nagrade oz. kolikor je to potrebno na podlagi davčne zakonodaje. Po preteku roka hrambe organizator osebne podatke izbriše.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">6. Pravice posameznikov</h3>
                        <p className="mb-4">
                            Udeleženci imajo pravico do dostopa do svojih osebnih podatkov, popravka, izbrisa (do trenutka žreba oz. če to ni v nasprotju z zakonodajo), omejitve obdelave in prenosljivosti podatkov. Če obdelava temelji na privolitvi, jo lahko udeleženec kadar koli prekliče, kar pa ne vpliva na zakonitost obdelave pred preklicem.
                        </p>
                        <p className="mb-4">
                            Svoja vprašanja ali zahteve v zvezi z varstvom osebnih podatkov lahko naslovite na elektronski naslov: <a href="mailto:pici@aiuniverza.si" className="text-brand-gold hover:underline">pici@aiuniverza.si</a>.
                        </p>
                        <p>
                            Posameznik ima pravico do pritožbe pri nadzornem organu: Informacijski pooblaščenec Republike Slovenije (gp.ip@ip-rs.si).
                        </p>
                    </div>
                </div>
            </section>

            <div className="pt-12 border-t border-white/10 mt-12 text-center text-gray-500 text-xs">
                 <p className="mb-2">Ljubljana, 10. 1. 2026</p>
                 <p className="font-bold">3PM d.o.o.</p>
            </div>

        </div>

      </div>
    </div>
  );
};