//promenljive za dodatne i sakrivene filtere
let btnPrikaziDodatneFiltere = document.querySelector(".DivPrikaziDodatniFilter");
let kontejnerDugujeDodatniFilter = document.querySelector(".KontejnerDuguje");
let kontejnerVazenjeKarticeDodatniFilter = document.querySelector(".KontejnerVazenjeKartice");
let btnSakrijDodatneFiltere = document.querySelector(".DivPrikaziSakrijDodatneFiltere");
//promenljive iks za brisanje sadrzaja iz inputa
let btnBrisiImePrezime = document.getElementById("btnBrisiImePrezime");
let btnBrisiGodinuRodjenjaOd = document.getElementById("btnBrisiGodinuRodjenjaOd");
let btnBrisiGodinuRodjenjaDo = document.getElementById("btnBrisiGodinuRodjenjaDo");
let btnBrisiBrendKartice = document.getElementById("btnObrisiBrend");
//inputi za unos kriterijuma za pretragu
let txtImePrezime = document.getElementById("txtImePrezime");
let txtGodinaRodjenjaOd = document.getElementById("txtGodinaRodjenjaOd");
let txtGodinaRodjenjaDo = document.getElementById("txtGodinaRodjenjaDo");
let txtBrendKartice = document.getElementById("txtBrendKartice");
let txtIznosDuga = document.getElementById("txtIznosDuga");
let txtMinVazenjeKartice = document.getElementById("txtPeriodVazenjaKartice");
let listaKlijenata = document.querySelector(".ListaKlijenata");
let checkBoxKlijentiBezDuga = document.getElementById("chkKlijentiBezDuga");
let checkBoxKlijentiDuznici = document.getElementById("chkKlijentiKojiDuguju");
let checkBoxRokVazenjaKartice = document.getElementById("chkPeriodVazenjaKartice");
//promenljive za modalni prozor o detaljima klijenta
let tabZaposlenje = document.getElementById("tabZaposlenje");
let tabRacuni = document.getElementById("tabRacuni");
let tabKartice = document.getElementById("tabKartice");
let glavniOmotacZaModalniProzorTabova = document.querySelector(".GlavniOmotacModalnogProzora");
let kontejnerModalnogProzoraDetalji = document.querySelector(".KontejnerModalnogProzora");
let sviTabovi = document.querySelectorAll(".NaziviTabova p");
let modalniProzorDetaljiZaglavlje = document.querySelector(".ZaglavljeModalnogProzora");
//promenljive za modalni porzor snimanje filtera
let kontejnerModalnogProzoraZaSnimanjeFiltera = document.querySelector(".KontejnerModalnogProzoraZaSnimanjeFiltera");
let btnObrisiNazivSetaFIltera = document.getElementById("btnIzbrisiImeSetaKriterijuma");
let indeksSnimanjaFiltera = 1;
//promenljive za modalni prozor raspolozivi set filtera
let kontejnerModalnogProzoraRaspolozivogSetaFiltera = document.querySelector(".KontejnerModalnogProzoraRaspoloziviSetFiltera");
let teloModalnogProzoraRaspolozivogSetaFiltera = document.querySelector(".TeloModalnogProzoraRaspolozivogSetaFiltera");
let naziviRaspolozivogSetaFiltera = document.querySelectorAll(".TeloModalnogProzoraRaspolozivogSetaFiltera div p:first-child");
let btnZatvoriModalniProzorRaspolozivogSetaFiltera = document.getElementById("btnZatvoriModalniProzorRaspolozivogSeta");
let btnOdustaniOdIzboraRaspolozivogSetaFiltera = document.getElementById("btnOdustaniOdIzbora");
let btnPredefinisaniSetFiltera = document.getElementById("btnPredefinisaniSetoviFiltera");
let btnPrimeniFilterIzSeta = document.getElementById("btnPrimeniFilter");
let snackBar = document.getElementById("snackBar");
let btnBrisiSveFiltere = document.getElementById("btnBrisiFiltere");
let btnPretraziSetFIltera = document.getElementById("btnSnimiSetFiltera");
let btnIzadjiIzSnackBara = document.getElementById("iksIzSnacka");
let btnOdustaniOdSNimanjaFiltera = document.getElementById("btnOdustani");
let btnZatvoriSnimanjeSetaFiltera = document.getElementById("btnZatvoriModalniProzorSnimanjaSetaFiltera");
let txtNazivSetaFiltera = document.getElementById("txtNazivSetaKriterijuma");
let btnSnimiGenerisanSetFiltera = document.getElementById("btnSnimi");
//promenljive za iskacuci prozor-sigurnosno pitanje
let kontejnerSigurnosnoPitanje = document.getElementById("KontejnerSigurnosnoPitanje");
let btnOdustaniOdBrisanjaFiltera = document.getElementById("btnOdustaniOdBrisanja");
let btnPotvrdiBrisanjeFiltera = document.getElementById("btnPotvrdiBrisanje");
let btnZatvoriModalniProzorSigurnosnoPitanje = document.getElementById("btnZatvoriModalniProzorSigurnosnoPitanje");
//promenljive za modalni prozzor recent searches
let btnRecentSearches = document.getElementById("btnRecentSearces");
let teloModalnogProzoraRecentSeatches = document.querySelector(".TeloModalnogProzoraRecentSearches");
let kontejnerModalnogProzoraRecentSearches = document.querySelector(".KontejnerModalnogProzoraRecentSearches");

btnZatvoriModalniProzorRaspolozivogSetaFiltera.addEventListener("click", () => {
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
    kontejnerModalnogProzoraRaspolozivogSetaFiltera.classList.add("Sakrij");
});
btnOdustaniOdIzboraRaspolozivogSetaFiltera.addEventListener("click", () => {
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
    kontejnerModalnogProzoraRaspolozivogSetaFiltera.classList.add("Sakrij");
});
//klik na dogadjaj prikazi dodatni filter
{
    btnPrikaziDodatneFiltere.addEventListener("click", () => {
        kontejnerDugujeDodatniFilter.classList.remove("Sakrij");
        kontejnerVazenjeKarticeDodatniFilter.classList.remove("Sakrij");
        btnSakrijDodatneFiltere.classList.remove("Sakrij");
        btnPrikaziDodatneFiltere.classList.add("Sakrij");
    });
}

//klik na dogadjaj sakrij dodatni filter
{
    btnSakrijDodatneFiltere.addEventListener("click", () => {
        kontejnerDugujeDodatniFilter.classList.add("Sakrij");
        kontejnerVazenjeKarticeDodatniFilter.classList.add("Sakrij");
        btnSakrijDodatneFiltere.classList.add("Sakrij");
        btnPrikaziDodatneFiltere.classList.remove("Sakrij");
    });
}

//brisi unos iz inputa-imeprezime, godina rodjenja on/do, brend kartice
{
    btnBrisiImePrezime.addEventListener("click", () => {
        txtImePrezime.value = "";
    });
    btnBrisiGodinuRodjenjaOd.addEventListener("click", () => {
        txtGodinaRodjenjaOd.value = "";
    });
    btnBrisiGodinuRodjenjaDo.addEventListener("click", () => {
        txtGodinaRodjenjaDo.value = "";
    });
    btnBrisiBrendKartice.addEventListener("click", () => {
        txtBrendKartice.value = "";
        azurirajListuBrendovaKartica();
        txtBrendKartice.focus();
    });
    btnObrisiNazivSetaFIltera.addEventListener("click", () => {
        txtNazivSetaFiltera.value = "";
    });
}

/*PADAJUCA LISTA ************/
//promenljive za padajucu listu
let privremeniNizDuplikataBrendova = [];
let privremeniNizDuplikataVrstiKartice = [];
let distinctNizBrendova = [];
let distinctNizVrstaKartica = [];
let listaBrendova = document.getElementById("BrendoviKartice");
let stavkeIzListeBrendova = document.querySelectorAll("#BrendoviKartice span");
let btnOtvaranjeListe = document.getElementById("btnOvaranjeListe");
let padajucaLista = document.querySelector(".PadajucaLista");
let inputZaUpisBrendaKartice = document.getElementById("txtBrendKartice");
//popunjavanje drop down lista-prvo pronalazim sve brendove kartica i onda isfiltriram da mi se eleminisu svi duplikati
PopunjavanjeBrendovaKartice();
function FiltrirajBrendoveKartice(privremeni) {
    let inputBrend = txtBrendKartice.value.toUpperCase();

    privremena = privremeni.filter((klijent) => {
        for (const kartica of klijent.karticeKlijenta) {
            let brendIVrstaKartice = kartica.BrendKartice.toUpperCase() + " " + kartica.VrstaKartice.toUpperCase();
            if (brendIVrstaKartice.includes(inputBrend)) {
                return true;
            }
        }
        return false;
    });
    return privremena;
}

function PopunjavanjeBrendovaKartice() {
    for (let klijent of klijenti) {
        for (let kartica of klijent.karticeKlijenta) {
            privremeniNizDuplikataBrendova.push(kartica.BrendKartice);
            privremeniNizDuplikataVrstiKartice.push(kartica.VrstaKartice);
        }
    }

    for (let brend of privremeniNizDuplikataBrendova) {
        if (!distinctNizBrendova.includes(brend)) {
            distinctNizBrendova.push(brend);
        }
    }
    for (let vrstaKartice of privremeniNizDuplikataVrstiKartice) {
        if (!distinctNizVrstaKartica.includes(vrstaKartice)) {
            distinctNizVrstaKartica.push(vrstaKartice);
        }
    }
    if (distinctNizBrendova.length !== 0 && distinctNizVrstaKartica.length !== 0) {
        for (const brend of distinctNizBrendova) {
            for (const vrstaKartice of distinctNizVrstaKartica) {
                let brendKartice = document.createElement("span");
                brendKartice.innerHTML = `<span>${brend} ${vrstaKartice}</span>`;
                listaBrendova.appendChild(brendKartice);
            }
        }
    }
}

//dogadjaj na klik strelice za padajucu listu
btnOtvaranjeListe.addEventListener("click", () => {
    padajucaLista.classList.toggle("SakrijStavke");
    btnOtvaranjeListe.classList.toggle("OtvorenaLista");
});
//upisi u input kad izaberemo iz padajuce liste
for (const brend of listaBrendova.children) {
    brend.addEventListener("click", (e) => {
        txtBrendKartice.value = e.target.innerText;
        padajucaLista.classList.add("SakrijStavke");
    });
}

//dogadjaj input na upis brenda kartice
txtBrendKartice.addEventListener("input", azurirajListuBrendovaKartica);
function azurirajListuBrendovaKartica() {
    for (let indeksBrenda = 0; indeksBrenda < listaBrendova.children.length; indeksBrenda++) {
        padajucaLista.classList.remove("SakrijStavke");
        let tekstUnosa = txtBrendKartice.value.toUpperCase();
        let nazivBrendaIVrsteKartice = listaBrendova.children[indeksBrenda].innerText.toUpperCase().split(" ");
        if (nazivBrendaIVrsteKartice[0].includes(tekstUnosa) || nazivBrendaIVrsteKartice[1].includes(tekstUnosa)) {
            listaBrendova.children[indeksBrenda].style.display = "";
        } else {
            listaBrendova.children[indeksBrenda].style.display = "none";
        }
    }
    console.log(listaBrendova);
}

/*INPUT IME PREZIME*/
let btnPrikazi = document.getElementById("btnPretrazi");
function FiltrirajKlijentePremaDeluIzImenaPrezimena() {
    let inputImePrezime = txtImePrezime.value.split(",");
    let privremena = klijenti.filter((klijent) => {
        let imeKlijenta = klijent.ImeKlijenta.toUpperCase();
        let prezimeKlijenta = klijent.PrezimeKlijenta.toUpperCase();
        for (let indeks = 0; indeks < inputImePrezime.length; indeks++) {
            if (imeKlijenta.includes(inputImePrezime[indeks].toUpperCase()) || prezimeKlijenta.includes(inputImePrezime[indeks].toUpperCase())) {
                return true;
            }
        }
        return false;
    });
    //console.log(privremena);
    return privremena;
}

function FiltrirajKlijentePremaGodiniRodjenja(privremeni) {
    let unosGodinaRodjenjaOd = parseInt(txtGodinaRodjenjaOd.value);
    let unosGodinaRodjenjaDo = parseInt(txtGodinaRodjenjaDo.value);
    let privremena = privremeni.filter((klijent) => {
        let godinaRodjenjaKlijenta = parseInt(klijent.DatRodjKlijenta.split("-")[0]);
        if (unosGodinaRodjenjaOd && unosGodinaRodjenjaDo && unosGodinaRodjenjaOd > 0 && unosGodinaRodjenjaDo > 0) {
            if ((unosGodinaRodjenjaOd < unosGodinaRodjenjaDo) && (godinaRodjenjaKlijenta >= unosGodinaRodjenjaOd) && (godinaRodjenjaKlijenta <= unosGodinaRodjenjaDo)) {
                return true;
            }
        } else if (unosGodinaRodjenjaOd || unosGodinaRodjenjaDo) {
            if ((godinaRodjenjaKlijenta >= unosGodinaRodjenjaOd) || (godinaRodjenjaKlijenta <= unosGodinaRodjenjaDo)) {
                return true;
            }
        }

        return false;
    });
    //console.log(privremena);
    return privremena;
}

function FiltrirajKlijenteBezDuga(privremeni) {
    let privremena = privremeni.filter((klijent) => {
        let zbirStanja = 0;
        for (let racun of klijent.racuniKlijenta) {
            zbirStanja += racun.Stanje;
        }
        return zbirStanja >= 0;
    });
    return privremena;
}

function FiltrirajKlijenteSaDugom(privremeni) {
    let inputIznosDuga = parseInt(txtIznosDuga.value);
    let privremena = privremeni.filter((klijent) => {
        let zbirStanja = 0;
        for (const racun of klijent.racuniKlijenta) {
            zbirStanja += racun.Stanje;
        }
        return (zbirStanja + inputIznosDuga) < 0;
    });
    //console.log(privremena);
    return privremena;
}

function FiltrirajKlijentePremaVazenjuKartice(privremeni) {
    let inputMinVazenjaKartice = txtMinVazenjeKartice.value;
    let trenutniMesec = new Date().getMonth() + 1;
    let trenutnaGodina = new Date().getFullYear();
    let privremena = privremeni.filter((klijent) => {
        for (let i = 0; i < klijent.karticeKlijenta.length; i++) {
            let datumVazenjaKarticeKlijenta = klijent.karticeKlijenta[i].VaziDo.split("/");
            //pomocu split je datum vazenja razdvojen na niz koji ima 2 vrednosti, na indeksu 0 je mesec, a na indeksu 1 je godina
            //posto je u script klijenti godian predstavljena /22, sabiram je sa 2000 da bih dobila full year
            let mesecVazenjaKarticeKlijenta = parseInt(datumVazenjaKarticeKlijenta[0]);
            let godinaVazenjaKarticeKlijenta = (parseInt(datumVazenjaKarticeKlijenta[1])) + 2000;
            let razlikaIzmedjuGodina = godinaVazenjaKarticeKlijenta - trenutnaGodina;
            let razlikaIzmedjuMeseci = mesecVazenjaKarticeKlijenta - trenutniMesec;
            let ukupnaRazlikeUMesecima = razlikaIzmedjuGodina * 12 + razlikaIzmedjuMeseci;
            //console.log(ukupnaRazlikeUMesecima);      
            if (ukupnaRazlikeUMesecima >= inputMinVazenjaKartice) {
                return true;
            }
        }
        return false;
    });
    //console.log(privremena);
    return privremena;
}

btnPrikazi.addEventListener("click", () => {
    PostaviNoviURL();
});
function ProveriIspravnostFiltera() {
    let argumentiOK = true;
    if (NumerickaVrednost(txtImePrezime.value)) {
        argumentiOK = false; //unesen je broj
        txtImePrezime.className = "NeispravanFilter";
    } else {
        txtImePrezime.className = "";
    }
    if (txtGodinaRodjenjaOd.value !== "") {
        if (!NumerickaVrednost(txtGodinaRodjenjaOd.value)) {
            argumentiOK = false;
            txtGodinaRodjenjaOd.className = "NeispravanFilter";
        } else {
            txtGodinaRodjenjaOd.className = "";
        }
    }
    if (txtGodinaRodjenjaDo.value !== "") {
        if (!NumerickaVrednost(txtGodinaRodjenjaDo.value) || !txtGodinaRodjenjaDo.value === "") {
            argumentiOK = false;
            txtGodinaRodjenjaDo.className = "NeispravanFilter";
        } else {
            txtGodinaRodjenjaDo.className = "";
        }
    }
    if (!NumerickaVrednost(txtIznosDuga.value) && checkBoxKlijentiDuznici.checked) {
        argumentiOK = false;
        txtIznosDuga.className = "NeispravanFilter";
    } else if (NumerickaVrednost(txtIznosDuga.value) && checkBoxKlijentiDuznici.checked === false) {
        argumentiOK = false;
        txtIznosDuga.className = "NeispravanFilter";
    } else {
        txtIznosDuga.className = "";
    }
    if (!NumerickaVrednost(txtMinVazenjeKartice.value) && checkBoxRokVazenjaKartice.checked) {
        argumentiOK = false;
        txtMinVazenjeKartice.className = "NeispravanFilter";
    } else if (NumerickaVrednost(txtMinVazenjeKartice.value) && checkBoxRokVazenjaKartice.checked === false) {
        argumentiOK = false;
        txtMinVazenjeKartice.className = "NeispravanFilter";
    } else {
        txtMinVazenjeKartice.className = "";
    }
    if (NumerickaVrednost(txtBrendKartice.value)) {
        argumentiOK = false;
        txtBrendKartice.className = "NeispravanFilter";
    } else {
        txtBrendKartice.className = "";
    }

    if (!argumentiOK) {
        return false;
    } else {
        return true;
    }
}

function PrikaziRezultatePretrage() {
//na pocetku svake nove pretrage praznim listu    
    listaKlijenata.innerHTML = '';

    if (ProveriIspravnostFiltera()) {
        let privremena = FiltrirajKlijentePremaDeluIzImenaPrezimena();
        if (txtBrendKartice.value)
            privremena = FiltrirajBrendoveKartice(privremena);
        if (txtGodinaRodjenjaOd.value || txtGodinaRodjenjaDo.value)
            privremena = FiltrirajKlijentePremaGodiniRodjenja(privremena);
        if (checkBoxKlijentiBezDuga.checked)
            privremena = FiltrirajKlijenteBezDuga(privremena);
        if (checkBoxKlijentiDuznici.checked && txtIznosDuga.value)
            privremena = FiltrirajKlijenteSaDugom(privremena);
        if (checkBoxRokVazenjaKartice.checked && txtMinVazenjeKartice.value)
            privremena = FiltrirajKlijentePremaVazenjuKartice(privremena);
        GenerisiPretragu(privremena);
    }
    if (ProveriPopunjenostPolja()) {
        btnPretraziSetFIltera.classList.remove("Sakrij");
    } else {
        btnPretraziSetFIltera.classList.add("Sakrij");
    }
}

function ProveriPopunjenostPolja() {
    let popunjenaPolja = true;
    if (txtImePrezime.value === "" && txtGodinaRodjenjaOd.value === "" && txtGodinaRodjenjaDo.value === "" && txtBrendKartice.value === "" && checkBoxKlijentiBezDuga.checked === false && checkBoxKlijentiDuznici.checked === false && txtIznosDuga.value === "" && checkBoxRokVazenjaKartice.checked === false && txtMinVazenjeKartice.value === "") {
        popunjenaPolja = false;
    }
    return popunjenaPolja;
}


function GenerisiPretragu(privremena) {
    console.log(privremena);
    for (let i = 0; i < privremena.length; i++) {
        let id = privremena[i].idKlijenta;
        let ime = privremena[i].ImeKlijenta;
        let prezime = privremena[i].PrezimeKlijenta;
        let datumRodjenja = privremena[i].DatRodjKlijenta;
        let stanje = "Nema racun";
        let blokiranRacun = false;
        if (privremena[i].racuniKlijenta.length !== 0) {
            stanje = 0;
            for (let indeks = 0; indeks < privremena[i].racuniKlijenta.length; indeks++) {
                stanje += privremena[i].racuniKlijenta[indeks].Stanje;
                if (privremena[i].racuniKlijenta[indeks].Blokada) {
                    //console.log("Ima blokiran racun " + privremena[i].ImeKlijenta + privremena[i].idKlijenta);
                    blokiranRacun = true;
                }
            }
        }

        let stavkaKlijenta = document.createElement("div");
        stavkaKlijenta.className = "StavkaKlijent";
        stavkaKlijenta.innerHTML = `<div class="KlijentOsnovneInformacije">
                    <div>
                        <img src="svg ikone/client.png" alt="">  
                    </div>
                    <div class="ImePrezime">
                        <p>Id: <label>${id}</label></p>
                        <p>Prezime:</p>
                        <p>${prezime}</p>
                        <p>Ime:</p>
                        <p>${ime}</p>                    
                    </div>
                </div>

                <div class="KlijentPodaci">
                    <p><span>Datum rodjenja:</span> 
                        <span>${datumRodjenja}</span>
                    </p>
                    <p><span>Stanje na racunima:</span> 
                        <span>${stanje}</span>
                    </p>
                </div>
                <button id="btnDetaljnije">Detaljnije</button>`;
        if (stanje < 0) {
            stavkaKlijenta.classList.add("RacunUMinusu");
        } else if (stanje >= 0) {
            stavkaKlijenta.classList.add("RacunNulaPozitivan");
        }
        if (blokiranRacun) {
            stavkaKlijenta.classList.add("BlokiranRacun");
        }
        listaKlijenata.appendChild(stavkaKlijenta);
    }

    let btnDetalji = document.querySelectorAll(".ListaKlijenata button");
    for (let indeksKlijentStavke = 0; indeksKlijentStavke < listaKlijenata.children.length; indeksKlijentStavke++) {
        for (let indeksDetalji = 0; indeksDetalji < btnDetalji.length; indeksDetalji++) {
            if (indeksKlijentStavke === indeksDetalji) {
                btnDetalji[indeksDetalji].addEventListener("click", () => {
//  console.log(listaKlijenata.children[indeksKlijentStavke]);
                    PrikaziDetaljeOKlijentu(listaKlijenata.children[indeksKlijentStavke]);
                });
            }
        }
    }
    if (ProveriPopunjenostPolja())
        SmestiUSessionStorage();
}

btnBrisiSveFiltere.addEventListener("click", () => {
    txtImePrezime.value = "";
    txtGodinaRodjenjaOd.value = "";
    txtGodinaRodjenjaDo.value = "";
    txtBrendKartice.value = "";
    txtIznosDuga.value = "";
    checkBoxKlijentiBezDuga.checked = false;
    checkBoxKlijentiDuznici.checked = false;
    checkBoxRokVazenjaKartice.checked = false;
    txtMinVazenjeKartice = "";
    btnPretraziSetFIltera.classList.add("Sakrij");
    // PostaviNoviURL();
});
function PrikaziDetaljeOKlijentu(klijentDetalji) {
    console.log(klijentDetalji);
    let idKlijenta = klijentDetalji.children[0].children[1].children[0].children[0].innerText;
    let imeKlijenta = klijentDetalji.children[0].children[1].children[4];
    let prezimeKlijenta = klijentDetalji.children[0].children[1].children[2];
    let naslovModalnogProzora = document.querySelector(".NaslovModalnogProzora p");
    let teloModalnogProzora = document.querySelectorAll(".TeloModalnogProzora p label");
    let idMestaIAdresaKlijenta = teloModalnogProzora[0];
    let datumRodjenjaKlijenta = teloModalnogProzora[1];
    let idDrzavljanstvaKlijenta = teloModalnogProzora[2];
    let sadrzajTaba = document.querySelector(".SadrzajTaba");
    let btnZatvoriModalniProzor = document.getElementById("btnZatvoriModalniProzor");
    let btnOKModalnogProzora = document.getElementById("btnOK");
    naslovModalnogProzora.innerText = idKlijenta;
    naslovModalnogProzora.innerText += " ";
    naslovModalnogProzora.innerText += imeKlijenta.innerText + " " + prezimeKlijenta.innerText;
    glavniOmotacZaModalniProzorTabova.classList.remove("Sakrij");
    kontejnerModalnogProzoraDetalji.classList.remove("Sakrij");
    SkiniOznacenostSaSvihTabova();
    sadrzajTaba.innerText = "";
    for (const klijent of klijenti) {
        if (klijent.idKlijenta === parseInt(idKlijenta)) {
            idMestaIAdresaKlijenta.innerText = klijent.idMesta + " , " + klijent.AdresaKlijenta;
            datumRodjenjaKlijenta.innerText = klijent.DatRodjKlijenta;
            idDrzavljanstvaKlijenta.innerText = klijent.idDrzavljanin;
            tabZaposlenje.addEventListener("click", () => {
                SkiniOznacenostSaSvihTabova();
                tabZaposlenje.classList.add("Oznaceno");
                sadrzajTaba.classList.add("Oznaceno");
                if (klijent.Zaposlen) {
                    sadrzajTaba.innerHTML = `<p>${klijent.Poslodavac}</p><p>${klijent.SedistePoslodavca}</p>`;
                } else {
                    sadrzajTaba.innerHTML = `<p>Nezaposlen klijent</p>`;
                }
            });
            let brojRacunaUkupan = document.querySelector("#tabRacuni span");
            brojRacunaUkupan.innerText = ` (${klijent.racuniKlijenta.length})`;
            tabRacuni.addEventListener("click", () => {
                SkiniOznacenostSaSvihTabova();
                tabRacuni.classList.add("Oznaceno");
                sadrzajTaba.classList.add("Oznaceno");
                sadrzajTaba.innerHTML = `<p style="font-weight:bold;">Ukupan broj racuna klijenta: ${klijent.racuniKlijenta.length}</p></br>`;
                for (const racun of klijent.racuniKlijenta) {
                    sadrzajTaba.innerHTML += `<p>Broj racuna klijenta: ${racun.BrojRacuna}</p>`;
                    sadrzajTaba.innerHTML += `<p>Kontrolni broj: ${racun.KontrolniBroj}</p>`;
                    sadrzajTaba.innerHTML += `<p>Pun broj racuna: ${racun.BrojRacunaPun}</p>`;
                    sadrzajTaba.innerHTML += `<p>Datum otvaranja: ${racun.DatumOtv}</p>`;
                    sadrzajTaba.innerHTML += `<p>Datum poslednje promene: ${racun.DatPoslPromene}</p>`;
                    sadrzajTaba.innerHTML += `<p>Stanje: ${racun.Stanje}</p>`;
                    if (racun.Blokada)
                        sadrzajTaba.innerHTML += `<p>Blokada: Blokiran</p>`;
                    else
                        sadrzajTaba.innerHTML += `<p>Blokada: Nije blokiran</p>`;

                    sadrzajTaba.innerHTML += `<p>Id vrste racuna: ${racun.idVrsteRacuna}</p>`;
                    sadrzajTaba.innerHTML += `<p>Sifra valute: ${racun.SifraValute}</p>`;
                    sadrzajTaba.innerHTML += `<p>---------------------------------------------</p>`;
                }
            });
            let brojKarticaUkupan = document.querySelector("#tabKartice span");
            brojKarticaUkupan.innerText = ` (${klijent.karticeKlijenta.length})`;
            tabKartice.addEventListener("click", () => {
                SkiniOznacenostSaSvihTabova();
                tabKartice.classList.add("Oznaceno");
                sadrzajTaba.classList.add("Oznaceno");
                sadrzajTaba.innerHTML = `<p style="font-weight:bold;">Ukupan broj kartica klijenta: ${klijent.karticeKlijenta.length}</p></br>`;
                for (const kartica of klijent.karticeKlijenta) {
                    sadrzajTaba.innerHTML += `<p>Broj kartice: ${kartica.BrojKartice}</p>`;
                    sadrzajTaba.innerHTML += `<p>Brend kartice: ${kartica.BrendKartice}</p>`;
                    sadrzajTaba.innerHTML += `<p>Rok vazenja kartice do: ${kartica.VaziDo}</p>`;
                    sadrzajTaba.innerHTML += `<p>Datum izrade: ${kartica.DatumIzrade}</p>`;
                    sadrzajTaba.innerHTML += `<p>Datum urucenja: ${kartica.DatumUrucenja}</p>`;
                    sadrzajTaba.innerHTML += `<p>Vrsta kartice: ${kartica.VrstaKartice}</p>`;
                    if (kartica.Limit)
                        sadrzajTaba.innerHTML += `<p>Limit: ${kartica.Limit}</p>`;
                    else
                        sadrzajTaba.innerHTML += `<p>Limit: Nema limit</p>`;
                    sadrzajTaba.innerHTML += `<p>---------------------------------------------</p>`;
                }
            });
            btnZatvoriModalniProzor.addEventListener("click", () => {
                glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
                kontejnerModalnogProzoraDetalji.classList.add("Sakrij");
            });
            btnOKModalnogProzora.addEventListener("click", () => {
                glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
                kontejnerModalnogProzoraDetalji.classList.add("Sakrij");
            });
        }
    }
}

function SkiniOznacenostSaSvihTabova() {
    {
        for (const tab of sviTabovi) {
            tab.classList.remove("Oznaceno");
        }
    }
}

btnPretraziSetFIltera.addEventListener("click", () => {
    if (ProveriPopunjenostPolja()) {
        glavniOmotacZaModalniProzorTabova.classList.remove("Sakrij");
        kontejnerModalnogProzoraZaSnimanjeFiltera.classList.remove("Sakrij");
    }
});
function ProveriPopunjenostPolja() {
    let poljePopunjeno = false;
    let kriterijumskaPolja = document.querySelector(".Kriterijumi div");
    if (ProveriIspravnostFiltera()) {
        kriterijumskaPolja.innerHTML = "";
        if (txtImePrezime.value) {
            kriterijumskaPolja.innerHTML = `<p>Ime, prezime:  <label>${txtImePrezime.value}</label></p>`;
            poljePopunjeno = true;
        }
        if (txtGodinaRodjenjaOd.value) {
            kriterijumskaPolja.innerHTML += `<p>Godina rodjenja:<label> od ${txtGodinaRodjenjaOd.value} godine</label> </p>`;
            poljePopunjeno = true;
        }
        if (txtGodinaRodjenjaDo.value) {
            kriterijumskaPolja.innerHTML += `<p>Godina rodjenja:<label> do ${txtGodinaRodjenjaDo.value} godine</label> </p>`;
            poljePopunjeno = true;
        }
        if (txtBrendKartice.value) {
            kriterijumskaPolja.innerHTML += `<p>Brend i vrsta kartice:<label> ${txtBrendKartice.value}</label> </p>`;
            poljePopunjeno = true;
        }
        if (checkBoxKlijentiBezDuga.checked) {
            kriterijumskaPolja.innerHTML += `<p>Dug:<label>klijenti bez duga</label> </p>`;
            poljePopunjeno = true;
        }
        if (checkBoxKlijentiDuznici.checked) {
            kriterijumskaPolja.innerHTML += `<p>Dug:<label>klijenti koji duguju iznos veci od ${txtIznosDuga.value}</label> </p>`;
            poljePopunjeno = true;
        }
        if (checkBoxRokVazenjaKartice.checked) {
            kriterijumskaPolja.innerHTML += `<p>Vazenje kartice:<label>katica vazi jos najmanje ${txtMinVazenjeKartice.value} meseci</label> </p>`;
            poljePopunjeno = true;
        }
    }

    if (poljePopunjeno) {
        return true;
    } else {
        return false;
    }
}

btnIzadjiIzSnackBara.addEventListener("click", () => {
    snackBar.classList.add("Sakrij");
});
btnOdustaniOdSNimanjaFiltera.addEventListener("click", () => {
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
    kontejnerModalnogProzoraZaSnimanjeFiltera.classList.add("Sakrij");
    console.log("Radi");
});
btnZatvoriSnimanjeSetaFiltera.addEventListener("click", () => {
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
    kontejnerModalnogProzoraZaSnimanjeFiltera.classList.add("Sakrij");
    console.log("Radi");
});
/*rad sa raspolozivim setom filtera*/
btnSnimiGenerisanSetFiltera.addEventListener("click", SnimiGenerisaniSetFiltera);
function SnimiGenerisaniSetFiltera() {
    let kriterijumskiPodaci = VratiPopunjanaKriterijumskaPolja();
    //console.log(kriterijumskiPodaci);    
    localStorage.setItem(txtNazivSetaFiltera.value, JSON.stringify(kriterijumskiPodaci));
    txtNazivSetaFiltera.value = "";
    snackBar.classList.remove("Sakrij");
    snackBar.classList.add("SnackOK");
    snackBar.children[1].innerText = "Uspesno ste snimili set filtera";
}

//funkcija koja vraca kriterijumska polja za pretragu koja ce se smestati u local storage
function VratiPopunjanaKriterijumskaPolja() {
    let polja = {
        "imePrezime": txtImePrezime.value,
        "godinaRodjenjaOd": txtGodinaRodjenjaOd.value,
        "godinaRodjenjaDo": txtGodinaRodjenjaDo.value,
        "brendKartice": txtBrendKartice.value,
        "klijentiKojiDuguju": checkBoxKlijentiDuznici.checked,
        "klijentiBezDuga": checkBoxKlijentiBezDuga.checked,
        "rokVazenjaKartice": checkBoxRokVazenjaKartice.checked,
        "iznosDuga": txtIznosDuga.value,
        "minVazenjaKarticeUMesecima": txtMinVazenjeKartice.value
    };
    return polja;
}

btnPredefinisaniSetFiltera.addEventListener("click", () => {
    teloModalnogProzoraRaspolozivogSetaFiltera.innerHTML = "";
    for (let indeksLokal = 0; indeksLokal < localStorage.length; indeksLokal++) {
        let raspoloziviFilter = document.createElement("div");
        raspoloziviFilter.className = "RaspolozivFilter";
        raspoloziviFilter.innerHTML = `<p>${localStorage.key(indeksLokal)}</p>
                        <div class="rbPrimeni">
                            <div class="Ikonica">
                                <div></div>
                            </div>
                            <p>Primeni</p>
                        </div>
                        <div class="rbObrisi">
                            <div class="Ikonica">
                                <div></div>
                            </div>
                            <p>Obrisi</p>
                        </div>`;
        teloModalnogProzoraRaspolozivogSetaFiltera.appendChild(raspoloziviFilter);
    }

    glavniOmotacZaModalniProzorTabova.classList.remove("Sakrij");
    kontejnerModalnogProzoraRaspolozivogSetaFiltera.classList.remove("Sakrij");
    let radioButtonsPrimeni = document.querySelectorAll(".RaspolozivFilter .rbPrimeni");
    let radioButtonsObrisi = document.querySelectorAll(".RaspolozivFilter .rbObrisi");
    for (const rbPrimeni of radioButtonsPrimeni) {
        dodajOznacenostNaPredefinisanFilter(rbPrimeni);
    }
    for (const rbObrisi of radioButtonsObrisi) {
        dodajOznacenostNaPredefinisanFilter(rbObrisi);
    }
});
btnPrimeniFilterIzSeta.addEventListener("click", () => {
    let radioButtonsPrimeni = document.querySelectorAll(".RaspolozivFilter .rbPrimeni");
    let radioButtonsObrisi = document.querySelectorAll(".RaspolozivFilter .rbObrisi");
    let primeniFilter = false;
    for (const rbPrimeni of radioButtonsPrimeni) {
        if (rbPrimeni.classList.contains("Obelezeno")) {
            let nazivRaspolozivogFiltera = rbPrimeni.previousElementSibling.innerText;
            console.log(nazivRaspolozivogFiltera);
            let kriterijumiFiltera = JSON.parse(localStorage.getItem(nazivRaspolozivogFiltera));
            console.log(kriterijumiFiltera);
            if (kriterijumiFiltera.imePrezime !== "") {
                txtImePrezime.value = kriterijumiFiltera.imePrezime;
            }
            if (kriterijumiFiltera.godinaRodjenjaOd !== "") {
                txtGodinaRodjenjaOd.value = kriterijumiFiltera.godinaRodjenjaOd;
            }
            if (kriterijumiFiltera.godinaRodjenjaDo !== "") {
                txtGodinaRodjenjaDo.value = kriterijumiFiltera.godinaRodjenjaDo;
            }
            if (kriterijumiFiltera.brendKartice !== "") {
                txtBrendKartice.value = kriterijumiFiltera.brendKartice;
            }
            if (kriterijumiFiltera.klijentiKojiDuguju) {
                checkBoxKlijentiDuznici.checked = true;
            }
            if (kriterijumiFiltera.iznosDuga !== "") {
                txtIznosDuga.value = kriterijumiFiltera.iznosDuga;
            }
            if (kriterijumiFiltera.klijentiBezDuga) {
                checkBoxKlijentiBezDuga.checked = true;
            }
            if (kriterijumiFiltera.rokVazenjaKartice) {
                checkBoxRokVazenjaKartice.checked = true;
            }
            if (kriterijumiFiltera.minVazenjaKarticeUMesecima) {
                txtMinVazenjeKartice.value = kriterijumiFiltera.minVazenjaKarticeUMesecima;
            }
            primeniFilter = true;
        }
    }
    if (primeniFilter) {
        glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
        kontejnerModalnogProzoraRaspolozivogSetaFiltera.classList.add("Sakrij");
    } else {
        snackBar.classList.remove("Sakrij");
        snackBar.children[1].innerText = "Niste oznacili filter za primenu";
    }

    for (const rbObrisi of radioButtonsObrisi) {
        if (rbObrisi.classList.contains("Obelezeno")) {
            snackBar.classList.add("Sakrij");
            kontejnerSigurnosnoPitanje.classList.remove("Sakrij");
        }
    }
});
/*iskacuci prozor za sigurnosno pitanje NE-odustani od brisanja, DA-potvrdi brisanje*/
btnOdustaniOdBrisanjaFiltera.addEventListener("click", SakrijProzorSigurnosnoPitanje);
btnZatvoriModalniProzorSigurnosnoPitanje.addEventListener("click", SakrijProzorSigurnosnoPitanje);
btnPotvrdiBrisanjeFiltera.addEventListener("click", () => {
    let radioButtonsObrisi = document.querySelectorAll(".RaspolozivFilter .rbObrisi");
    for (const rbObrisi of radioButtonsObrisi) {
        if (rbObrisi.classList.contains("Obelezeno")) {
            let obelezenFilter = rbObrisi.previousElementSibling.previousElementSibling.innerText;
            console.log(obelezenFilter);
            localStorage.removeItem(obelezenFilter);
            snackBar.classList.remove("Sakrij");
            snackBar.classList.add("SnackOK");
            snackBar.children[1].innerText = "Uspesno ste obrisali filter";
            kontejnerSigurnosnoPitanje.classList.add("Sakrij");
            kontejnerModalnogProzoraRaspolozivogSetaFiltera.classList.add("Sakrij");
            glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
        }
    }
});
function SakrijProzorSigurnosnoPitanje() {
    kontejnerSigurnosnoPitanje.classList.add("Sakrij");
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
}

function dodajOznacenostNaPredefinisanFilter(elem) {
    elem.addEventListener("click", () => {
        skiniOznacenostSaSvihElemenata();
        elem.classList.toggle("Obelezeno");
    });
}
function skiniOznacenostSaSvihElemenata() {
    let radioButtonsPrimeni = document.querySelectorAll(".RaspolozivFilter .rbPrimeni");
    let radioButtonsObrisi = document.querySelectorAll(".RaspolozivFilter .rbObrisi");
    for (const rbPrimeni of radioButtonsPrimeni) {
        rbPrimeni.classList.remove("Obelezeno");
    }
    for (const rbObrisi of radioButtonsObrisi) {
        rbObrisi.classList.remove("Obelezeno");
    }
}

//pomocna funkcija
function NumerickaVrednost(str) {
    if (typeof str !== "string")
        return false;
    return (!isNaN(str) && !isNaN(parseFloat(str)));
}

//shareabilnost
function PokupiArgumenteIzURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams) {
//popunjava direktno inpute
        if (urlParams.has('txtImePrezime'))
            txtImePrezime.value = urlParams.get('txtImePrezime');
        if (urlParams.has('txtGodinaRodjenjaOd'))
            txtGodinaRodjenjaOd.value = urlParams.get('txtGodinaRodjenjaOd');
        if (urlParams.has('txtGodinaRodjenjaDo'))
            txtGodinaRodjenjaDo.value = urlParams.get('txtGodinaRodjenjaDo');
        if (urlParams.has('txtBrendKartice'))
            txtBrendKartice.value = urlParams.get('txtBrendKartice');
        if (urlParams.has('txtIznosDuga'))
            txtIznosDuga.value = urlParams.get('txtIznosDuga');
        if (urlParams.has('txtMinVazenjeKartice'))
            txtMinVazenjeKartice.value = urlParams.get('txtMinVazenjeKartice');
        if (urlParams.has('chkKlijentiBezDuga'))
            checkBoxKlijentiBezDuga.checked = urlParams.get('chkKlijentiBezDuga');
        if (urlParams.has('chkKlijentiDuznici'))
            checkBoxKlijentiDuznici.checked = urlParams.get('chkKlijentiDuznici');
        if (urlParams.has('chkRokVazenjaKartice'))
            checkBoxRokVazenjaKartice.checked = urlParams.get('chkRokVazenjaKartice');
        if (ProveriIspravnostFiltera()) {
            PrikaziRezultatePretrage();
        }
    }
}

//funkcija koja menja url svaki put kad pretrazujem ili brisem sve  filtere
function PostaviNoviURL() {
    if (ProveriIspravnostFiltera()) {
        let url = "";
        if (txtImePrezime.value) {
            url += "&txtImePrezime=" + txtImePrezime.value;
        }
        if (txtGodinaRodjenjaOd.value) {
            url += "&txtGodinaRodjenjaOd=" + txtGodinaRodjenjaOd.value;
        }
        if (txtGodinaRodjenjaDo.value) {
            url += "&txtGodinaRodjenjaDo=" + txtGodinaRodjenjaDo.value;
        }
        if (txtBrendKartice.value) {
            url += "&txtBrendKartice=" + txtBrendKartice.value;
        }
        if (checkBoxKlijentiBezDuga.checked) {
            url += "&chkKlijentiBezDuga=" + checkBoxKlijentiBezDuga.checked;
        }
        if (checkBoxKlijentiDuznici.checked) {
            url += "&chkKlijentiDuznici=" + checkBoxKlijentiDuznici.checked;
        }
        if (checkBoxRokVazenjaKartice.checked) {
            url += "&chkRokVazenjaKartice=" + checkBoxRokVazenjaKartice.checked;
        }
        if (txtIznosDuga.value) {
            url += "&txtIznosDuga=" + txtIznosDuga.value;
        }
        if (txtMinVazenjeKartice.value) {
            url += "&txtMinVazenjeKartice=" + txtMinVazenjeKartice.value;
        }
        window.location.search = url;
    }
}

window.addEventListener("load", (event) => {
    PokupiArgumenteIzURL();
});

function SmestiUSessionStorage() {
    let kriterijumskiPodaci = VratiPopunjanaKriterijumskaPolja();

    let nizStorage = [];
    for (let indeksSesion = 0; indeksSesion < sessionStorage.length; indeksSesion++) {
        nizStorage.push(sessionStorage.key(indeksSesion));
    }

    if (sessionStorage.length < 10) {
        let maxRedBroj = 0;
        if (sessionStorage.length) {
            maxRedBroj = Math.max.apply(Math, nizStorage);
        }
        sessionStorage.setItem(maxRedBroj + 1, JSON.stringify(kriterijumskiPodaci));
    } else {
        maxRedBroj = Math.max.apply(Math, nizStorage);
        let minRedBroj = Math.min.apply(Math, nizStorage);
        console.log(minRedBroj);
        window.sessionStorage.removeItem(minRedBroj);
        sessionStorage.setItem(maxRedBroj + 1, JSON.stringify(kriterijumskiPodaci));
    }

}

btnRecentSearches.addEventListener("click", () => {
    teloModalnogProzoraRecentSeatches.innerHTML = "";
    let indeksDuzinaSessionStorage = sessionStorage.length;
    for (let indeksSession = indeksDuzinaSessionStorage; indeksSession >= (indeksDuzinaSessionStorage - 10); indeksSession--) {
        if (sessionStorage.key(indeksSession) !== null) {
            let recentFilter = document.createElement("div");
            recentFilter.className = "RecentFilter";
            recentFilter.innerHTML = `<p>${sessionStorage.key(indeksSession)}</p>
                        <div class="BtnPrimeni">
                            <img src="svg ikone/011-checked.svg" width="15" height="15" alt="alt"/>
                            <p>Primeni</p>
                        </div>`;
            teloModalnogProzoraRecentSeatches.appendChild(recentFilter);
        }
    }
    let buttonsPrimeni = document.querySelectorAll(".RecentFilter .BtnPrimeni");
    let naziviRecentFiltera = document.querySelectorAll(".RecentFilter p:first-child");

    for (let indeksNazivaRecFilt = 0; indeksNazivaRecFilt < naziviRecentFiltera.length; indeksNazivaRecFilt++) {
        for (let indeksPrimeni = 0; indeksPrimeni < buttonsPrimeni.length; indeksPrimeni++) {
            if (indeksPrimeni === indeksNazivaRecFilt) {
                buttonsPrimeni[indeksPrimeni].addEventListener("click", () => {
                    let nazivFiltera = naziviRecentFiltera[indeksNazivaRecFilt].innerText;
                    let kriterijumiRecentFiltera = JSON.parse(sessionStorage.getItem(Number(nazivFiltera)));

                    if (kriterijumiRecentFiltera.imePrezime !== "") {
                        txtImePrezime.value = kriterijumiRecentFiltera.imePrezime;
                    }
                    if (kriterijumiRecentFiltera.godinaRodjenjaOd !== "") {
                        txtGodinaRodjenjaOd.value = kriterijumiRecentFiltera.godinaRodjenjaOd;
                    }
                    if (kriterijumiRecentFiltera.godinaRodjenjaDo !== "") {
                        txtGodinaRodjenjaDo.value = kriterijumiRecentFiltera.godinaRodjenjaDo;
                    }
                    if (kriterijumiRecentFiltera.brendKartice !== "") {
                        txtBrendKartice.value = kriterijumiRecentFiltera.brendKartice;
                    }
                    if (kriterijumiRecentFiltera.klijentiKojiDuguju) {
                        checkBoxKlijentiDuznici.checked = true;
                    }
                    if (kriterijumiRecentFiltera.iznosDuga !== "") {
                        txtIznosDuga.value = kriterijumiRecentFiltera.iznosDuga;
                    }
                    if (kriterijumiRecentFiltera.klijentiBezDuga) {
                        checkBoxKlijentiBezDuga.checked = true;
                    }
                    if (kriterijumiRecentFiltera.rokVazenjaKartice) {
                        checkBoxRokVazenjaKartice.checked = true;
                    }
                    if (kriterijumiRecentFiltera.minVazenjaKarticeUMesecima) {
                        txtMinVazenjeKartice.value = kriterijumiRecentFiltera.minVazenjaKarticeUMesecima;
                    }
                    PostaviNoviURL();
                    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
                    kontejnerModalnogProzoraRecentSearches.classList.add("Sakrij");
                });
                glavniOmotacZaModalniProzorTabova.classList.remove("Sakrij");
                kontejnerModalnogProzoraRecentSearches.classList.remove("Sakrij");
            }

        }
    }
});
let btnZatvoriModalniProzorRecentSearch = document.getElementById("btnZatvoriModalniProzorRecentSearches");
btnZatvoriModalniProzorRecentSearch.addEventListener("click", () => {
    glavniOmotacZaModalniProzorTabova.classList.add("Sakrij");
    kontejnerModalnogProzoraRecentSearches.classList.add("Sakrij");
}
);
              