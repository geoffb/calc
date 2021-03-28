(function (window) {

  const OPERATIONS = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
    "^": function (a, b) {
      return Math.pow(a, b);
    }
  };

  var isOperator = function (char) {
    var ops = Object.keys(OPERATIONS);
    return ops.indexOf(char) !== -1;
  };

  var Calculator = window.Calculator = function () {
    this._buffer = ["0"];
  };

  var proto = Calculator.prototype;

  proto.input = function (char) {
    var buffer = this._buffer;
    var len = buffer.length;

    if (char == "C") {
      this._buffer = ["0"];
    } else if (char == "X") {
      if (buffer[len - 1].length > 1) {
        buffer[len - 1] = buffer[len - 1].substring();
      } else {
        buffer[len - 1] = "0";
      }
    } else if (char == "=") {
      this._evaluate();
    } else if (isOperator(char)) {
      if (isOperator(buffer[len - 1])) {
        buffer[len - 1] = char;
      } else {
        len = buffer.push(char);
      }
    } else if (char == ".") {
      if (buffer[len - 1].indexOf(".") === -1) {
        buffer[len - 1] += ".";
      }
    } else if (char == "_") {
      var value = buffer[len - 1];
      if (value.charAt(0) == "-") {
        buffer[len - 1] = value.substring(1);
      } else {
        buffer[len - 1] = "-" + value;
      }
    } else {
      if (isOperator(buffer[len - 1])) {
        len = buffer.push("0");
      }
      buffer[len - 1] += char;
    }

    // Remove front zeros
    var value = String(buffer[len - 1]);
    while (value.charAt(0) == "0" && value.length > 1) {
      value = value.substring(1);
    }
    buffer[len - 1] = value;
  };

  proto._evaluate = function () {
    var buffer = this._buffer;
    var result = Number(buffer[0]);
    var op = null;
    for (var i = 1; i < buffer.length; ++i) {
      var value = buffer[i];
      if (isOperator(value)) {
        op = value;
      } else {
        result = OPERATIONS[op](result, Number(value));
      }
    }
    this._buffer = [String(result)];
  };

  Object.defineProperty(proto, "buffer", {
    get: function () {
      return this._buffer.join(" ");
    }
  });

})(window);
