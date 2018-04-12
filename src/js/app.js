/* 2.Stwórz obiektową reprezentację prostej ankiety. Ankieta składa się z pytania, na które możemy odpowiedzieć "tak" lub "nie". Ankieta udostępnia osobne metody do oddania głosu na "tak" oraz na "nie". Ankieta powinna pozwolić na sprawdzenie ile oddano głosów oraz jaki procent z nich oddano którą opcję.
 *Stwórz interfejs w HTML, który pozwoli na oddawanie głosów (oraz będzie wyświetlał wyniki). */

 class Ankieta {
     constructor() {
         this.question = 'Czy lubisz kolor zielony?';
     }
     tak() {
        document.getElementById('tak').checked = true;   // czy to jest potrzebne?
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
    orderSmallCoffee(milk, sugar) {
        const messagePlace = document.getElementById('message');
        if(milk<this.amountMilk && sugar<this.amountSugar && this.amountCoffee>=6) {
            let totalPrice = milk * this.priceMilk + sugar * this.priceSugar + this.priceSmallCoffee;
            messagePlace.innerHTML = totalPrice;
            this.amountSugar -= sugar;
            this.amountMilk -= milk;
            this.amountCoffee -= 6;
        }
        else {
            if(milk>=this.amountMilk) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości mleka';
            }
            if(sugar>=this.amountSugar) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości cukru';
            }
            if(this.amountCoffee<6) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości kawy';
            }
        }
    }
    orderLargeCoffee(milk, sugar) {
        const messagePlace = document.getElementById('message');
        if(milk<this.amountMilk && sugar<this.amountSugar && this.amountCoffee>=15) {
            let totalPrice = milk * this.priceMilk + sugar * this.priceSugar + this.priceLargeCoffee;
            messagePlace.innerHTML = totalPrice;
            this.amountSugar -= sugar;
            this.amountMilk -= milk;
            this.amountCoffee -= 15;
        }
        else {
            if(milk>=this.amountMilk) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości mleka';
            }
            if(sugar>=this.amountSugar) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości cukru';
            }
            if(this.amountCoffee<15) {
                messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości kawy';
            }
        }
    }
    addCoffee(coffee) {
        this.amountCoffee += parseInt(coffee, 10);
    }
    addMilk(addMilk) {
        this.amountMilk += parseInt(addMilk, 10);
    }
    addSugar(addSugar) {
        this.amountSugar += parseInt(addSugar, 10);
    }
}

let automat1 = new Automat(6, 9, 1, 2);

const btnMakeOrder = document.getElementById('order');


btnMakeOrder.addEventListener('click', ()=> {
    let milk = document.getElementById('milkI').value;
    let sugar = document.getElementById('sugarI').value;
    if(document.getElementById('small').checked) {
        automat1.orderSmallCoffee(milk, sugar);
    }
    else {
        automat1.orderLargeCoffee(milk, sugar);
    }
})

const btnAddSugar = document.getElementsByClassName('add')[0];
btnAddSugar.addEventListener('click', ()=> {
    let addSugar = document.getElementById('addSugarI').value;
    automat1.addSugar(addSugar);
    console.log(automat1.amountSugar);
})
const btnAddMilk = document.getElementsByClassName('add')[1];
btnAddMilk.addEventListener('click', ()=> {
    let addMilk = document.getElementById('addMilkI').value;
    automat1.addMilk(addMilk);
    console.log(automat1.amountMilk);
})
const btnAddCoffee = document.getElementsByClassName('add')[2];
btnAddCoffee.addEventListener('click', ()=> {
    let addCoffee = document.getElementById('addCoffeeI').value;
    automat1.addCoffee(addCoffee);
    console.log(automat1.amountCoffee);
})


