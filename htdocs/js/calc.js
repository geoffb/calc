(function () {

  var calc = new Calculator();

  var output = document.getElementById("output");

  var updateDisplay = function () {
    output.textContent = calc.buffer;
  };

  var init = function () {
    var buttons = document.querySelectorAll("#input button");
    for (var i = 0; i < buttons.length; ++i) {
      var button = buttons[i];
      button.addEventListener("click", function (e) {
        calc.input(e.target.getAttribute("x-value"));
        updateDisplay();
      }, false);
    }
    updateDisplay();
  };

  init();

}());
