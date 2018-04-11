'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 2.Stwórz obiektową reprezentację prostej ankiety. Ankieta składa się z pytania, na które możemy odpowiedzieć "tak" lub "nie". Ankieta udostępnia osobne metody do oddania głosu na "tak" oraz na "nie". Ankieta powinna pozwolić na sprawdzenie ile oddano głosów oraz jaki procent z nich oddano którą opcję.
 *Stwórz interfejs w HTML, który pozwoli na oddawanie głosów (oraz będzie wyświetlał wyniki). */

var Ankieta = function () {
    function Ankieta() {
        _classCallCheck(this, Ankieta);

        this.question = 'Czy lubisz kolor zielony?';
    }

    _createClass(Ankieta, [{
        key: 'tak',
        value: function tak() {
            document.getElementById('tak').checked = true;
            var place = document.getElementById('odpowiedz');
            place.innerHTML = 'Lubisz kolor zielony';
        }
    }, {
        key: 'nie',
        value: function nie() {
            document.getElementById('nie').checked = true;
            var place = document.getElementById('odpowiedz');
            place.innerHTML = 'Nie lubisz koloru zielonego';
        }
    }]);

    return Ankieta;
}();

var ankieta1 = new Ankieta();

var yes = document.getElementById('tak');
yes.addEventListener('click', function () {
    ankieta1.tak();
});
var no = document.getElementById('nie');
no.addEventListener('click', function () {
    ankieta1.nie();
});

/* 3.Zaprojektuj i stwórz obiektową reprezentację automatu do kawy. Automat pozwala zamówić dużą lub małą kawę. 
Do każdej kawy można wziąć jedną lub więcej porcji mleka lub/i cukru. Po wybraniu zamówienia, powinna być zwracana informacja o cenie lub o niepowodzeniu, 
jeśli nie udało sie go zrealizować z powodu braku składników. Cenę małej i dużej kawy oraz pojedynczej porcji mleka i cukru ustalamy tworząc obiekt. 
Automat przechowuje pewną ilość składników: mielonej kawy oraz porcji mleka i cukru. Dodawać je możemy przy pomocy osobnych metod. Mleko i cukier ładowane są w porcjach, 
natomiast kawa w gramach. Przygotowanie małej kawy zużywa 6 gramów, natomiast dużej - 15.
*Stwórz interfejs w HTML, który pozwoli skorzystać z automatu (a także doładowywać go składnikami). */

var Automat = function () {
    function Automat(priceSmallCoffee, priceLargeCoffee, priceSugar, priceMilk) {
        _classCallCheck(this, Automat);

        this.priceSmallCoffee = priceSmallCoffee;
        this.priceLargeCoffee = priceLargeCoffee;
        this.priceSugar = priceSugar;
        this.priceMilk = priceMilk;
        this.amountSugar = 4;
        this.amountMilk = 4;
        this.amountCoffee = 21;
    }

    _createClass(Automat, [{
        key: 'orderSmallCoffee',
        value: function orderSmallCoffee(milk, sugar) {
            var pricePlace = document.getElementById('price');
            var messagePlace = document.getElementById('message');
            if (milk < this.amountMilk && sugar < this.amountSugar && this.amountCoffee >= 6) {
                var totalPrice = milk * this.priceMilk + sugar * this.priceSugar + this.priceSmallCoffee;
                pricePlace.innerHTML = totalPrice;
                this.amountSugar -= sugar;
                this.amountMilk -= milk;
                this.amountCoffee -= 6;
            } else {
                if (milk >= this.amountMilk) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości mleka';
                }
                if (sugar >= this.amountSugar) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości cukru';
                }
                if (this.amountCoffee < 6) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości kawy';
                }
            }
        }
    }, {
        key: 'orderLargeCoffee',
        value: function orderLargeCoffee(milk, sugar) {
            var pricePlace = document.getElementById('price');
            var messagePlace = document.getElementById('message');
            if (milk < this.amountMilk && sugar < this.amountSugar && this.amountCoffee >= 15) {
                var totalPrice = milk * this.priceMilk + sugar * this.priceSugar + this.priceSmallCoffee;
                pricePlace.innerHTML = totalPrice;
                this.amountSugar -= sugar;
                this.amountMilk -= milk;
                this.amountCoffee -= 15;
            } else {
                if (milk >= this.amountMilk) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości mleka';
                }
                if (sugar >= this.amountSugar) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości cukru';
                }
                if (this.amountCoffee < 15) {
                    messagePlace.innerHTML = 'Automat nie ma wystarczającej ilości kawy';
                }
            }
        }
    }]);

    return Automat;
}();

var automat1 = new Automat(6, 9, 1, 2);
automat1.orderLargeCoffee(3, 3);
//# sourceMappingURL=app.js.map