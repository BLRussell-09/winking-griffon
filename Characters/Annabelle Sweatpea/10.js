var d10 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//prints dice roll to the page

function printNumber(number) {
  var krakra = document.getElementById('krakra');
  krakra.innerHTML = number;
}

var noobish = document.getElementById('noobish');

noobish.onclick = function() {
  var result = d10.roll();
  printNumber(result);
};
