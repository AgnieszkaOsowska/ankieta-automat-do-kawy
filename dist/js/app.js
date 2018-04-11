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
      var place = document.getElementById('odpowiedz');
      place.innerHTML = 'Lubisz kolor zielony';
    }
  }, {
    key: 'nie',
    value: function nie() {
      var place = document.getElementById('odpowiedz');
      place.innerHTML = 'Nie lubisz kolor zielonego';
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
//# sourceMappingURL=app.js.map