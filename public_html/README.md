Projekat je izrađen putem HTML-a, CSS-a i JS. Kao baza je iskorišćen js fajl klijenti u kom su klijenti banke prikazani u JSON formatu. Zadatak projekta jeste da se iskreira responzivan interfejs koji omogućava unos/selektovanje kriterijuma filtriranja. Filteri su podeljeni u dve grupe: osnovnu i dodatnu. Dodatna grupa se prikazuje klikom na „Prikaži dodatne filtere“, odnosno, sakriva klikom na „Sakrij dodatne filtere“. 

Filteri funkcionišu na sledeći način:
1.	Ime, prezime: Unosi se deo imena i/ili prezimena. Omogućen je unos više stringova, razdojenih zapetom. Pretraga nije case sensitive.
2.	Godina rođenja: Unosi se opseg traženih godina rođenja. Nije potrebno da su oba input-a popunjena
3.	Brend kartice: Unosom teksta u combo box (bez pritiska na taster ENTER), lista brendova kartica treba da se automatski filtrira na osnovu toga da li naziv brenda ili pripadajuće vrste kartice sadrži string unet u input

Klikom na „Pretraži“ se proverava ispravnost unetih filtera i u slučaju grešaka, korisnik se obaveštava putem tzv. snackbar-ova, a problematični filteri se vizuelno naglašavaju. Ako su filteri ispravno uneti, prikazuju se rezultati pretrage. Rezultati pretrage su dati u kartičnom prikazu u kom svaka kartica ima obojenu pozadinu u skladu sa sledećom informacijom:
a)	Crvena pozadina ako ima negativan zbir stanja svojih računa</br>
b)	Zelena pozadina ukoliko ima račun I pozitivno zbirno stanje računa</br>
c)	Ako klijent ima bar jedan blokiran račun, kartica je uokvirena neisprekidanom, crnom linijom</br>
d)	Narandžasta pozadina ukoliko nema račun

