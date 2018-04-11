/* 2.Stwórz obiektową reprezentację prostej ankiety. Ankieta składa się z pytania, na które możemy odpowiedzieć "tak" lub "nie". Ankieta udostępnia osobne metody do oddania głosu na "tak" oraz na "nie". Ankieta powinna pozwolić na sprawdzenie ile oddano głosów oraz jaki procent z nich oddano którą opcję.
 *Stwórz interfejs w HTML, który pozwoli na oddawanie głosów (oraz będzie wyświetlał wyniki). */

 class Ankieta {
     constructor() {
         this.question = 'Czy lubisz kolor zielony?';
     }
     tak() {
             const place = document.getElementById('odpowiedz');
             place.innerHTML = 'Lubisz kolor zielony';
     }
     nie() {
            const place = document.getElementById('odpowiedz');
            place.innerHTML = 'Nie lubisz kolor zielonego';
    }
 }

 let ankieta1 = new Ankieta;

 const yes = document.getElementById('tak');
 yes.addEventListener('click', ()=> {
     ankieta1.tak();
 })
 const no = document.getElementById('nie');
 no.addEventListener('click', ()=> {
     ankieta1.nie();
 })
 
