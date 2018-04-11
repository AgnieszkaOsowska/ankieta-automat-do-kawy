/* 2.Stwórz obiektową reprezentację prostej ankiety. Ankieta składa się z pytania, na które możemy odpowiedzieć "tak" lub "nie". Ankieta udostępnia osobne metody do oddania głosu na "tak" oraz na "nie". Ankieta powinna pozwolić na sprawdzenie ile oddano głosów oraz jaki procent z nich oddano którą opcję.
 *Stwórz interfejs w HTML, który pozwoli na oddawanie głosów (oraz będzie wyświetlał wyniki). */

 class Ankieta {
     constructor() {
         this.question = 'Czy lubisz kolor zielony?';
     }
     tak() {
        document.getElementById('tak').checked = true;
        const place = document.getElementById('odpowiedz');
        place.innerHTML = 'Lubisz kolor zielony';
     }
     nie() {
        document.getElementById('nie').checked = true;
        const place = document.getElementById('odpowiedz');
        place.innerHTML = 'Nie lubisz koloru zielonego';
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
 

 /* 3.Zaprojektuj i stwórz obiektową reprezentację automatu do kawy. Automat pozwala zamówić dużą lub małą kawę. 
 Do każdej kawy można wziąć jedną lub więcej porcji mleka lub/i cukru. Po wybraniu zamówienia, powinna być zwracana informacja o cenie lub o niepowodzeniu, 
 jeśli nie udało sie go zrealizować z powodu braku składników. Cenę małej i dużej kawy oraz pojedynczej porcji mleka i cukru ustalamy tworząc obiekt. 
 Automat przechowuje pewną ilość składników: mielonej kawy oraz porcji mleka i cukru. Dodawać je możemy przy pomocy osobnych metod. Mleko i cukier ładowane są w porcjach, 
 natomiast kawa w gramach. Przygotowanie małej kawy zużywa 6 gramów, natomiast dużej - 15.
 *Stwórz interfejs w HTML, który pozwoli skorzystać z automatu (a także doładowywać go składnikami). */

class Automat {
    constructor(priceSmallCoffee, priceLargeCoffee, priceSugar, priceMilk) {
        this.priceSmallCoffee = priceSmallCoffee;
        this.priceLargeCoffee = priceLargeCoffee;
        this.priceSugar = priceSugar;
        this.priceMilk = priceMilk;
        this.amountSugar = 4;
        this.amountMilk = 4;
        this.amountCoffee = 21;
    }
    /*orderSmallCoffee(sugar, milk) {
        switch(sugar, milk) {
            case (sugar > this.amountSugar):
            const messagePleace = document.getElementById('message');

            break;
            case (milk > this.amountMilk):
            const messagePleace = document.getElementById('message');

            break;
            default:
            let totalPrice = sugar * this.priceSugar + milk * this.priceMilk + this.priceSmallCoffee;
            console.log(totalPrice);
            this.amountSugar -= sugar;
            this.amountMilk -= milk;
            this.amountCoffee -= 6;
        }
    }
}

let automat1 = new Automat(6, 9, 2, 3);
automat1.orderSmallCoffee(2, 2);*/