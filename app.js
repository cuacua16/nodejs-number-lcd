const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ws = " ";

class Numero {
  constructor(numero, ancho, alto) {
    this.numero = numero.split("");
    this.ancho = ancho;
    this.alto = alto;
  }
  validar() {
    if (this.numero.some((e) => isNaN(e))) {
      readline.question("Numero inválido, ingrese otro: ", (numerito) => {
        this.numero = numerito.split("");
        this.toLCD();
      });
    } else {
      return true;
    }
  }

  toLCD() {
    if (this.validar()) {
      let l1 = "";
      let l2 = "";
      let l3 = "";
      let l4 = "";
      let l5 = "";
      switch (this.alto) {
        case 1:
          if (this.ancho == 1) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws;
              } else {
                l1 += ws + "_" + ws;
              }
              if (e == 0) {
                l2 += "| |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "|_|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + "_|";
              } else {
                l2 += "|_" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l3 += "|_|";
              } else if (e == 2) {
                l3 += "|_" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l3 += ws + ws + "|";
              } else {
                l3 += ws + "_|";
              }
            });
          } else if (this.ancho == 2) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws + ws;
              } else {
                l1 += ws + "_" + "_" + ws;
              }
              if (e == 0) {
                l2 += "|  |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "|__|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + "__|";
              } else {
                l2 += "|__" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l3 += "|__|";
              } else if (e == 2) {
                l3 += "|__" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l3 += ws + ws + ws + "|";
              } else {
                l3 += ws + "__|";
              }
            });
          } else if (this.ancho == 3) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws + ws + ws;
              } else {
                l1 += ws + "___" + ws;
              }
              if (e == 0) {
                l2 += "|   |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "|___|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + "___|";
              } else {
                l2 += "|___" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l3 += "|___|";
              } else if (e == 2) {
                l3 += "|___" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l3 += ws + ws + ws + ws + "|";
              } else {
                l3 += ws + "___|";
              }
            });
          }
          break;
        case 2:
          if (this.ancho == 1) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws;
              } else {
                l1 += ws + "_" + ws;
              }
              if (e == 0) {
                l2 += "| |";
                l3 += "| |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "| |";
                l3 += "|_|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + "|";
                l3 += ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + " |";
                l3 += ws + "_|";
              } else {
                l2 += "| " + ws;
                l3 += "|_" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l4 += "| |";
                l5 += "|_|";
              } else if (e == 2) {
                l4 += "| " + ws;
                l5 += "|_" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l4 += ws + ws + "|";
                l5 += ws + ws + "|";
              } else {
                l4 += ws + ws + "|";
                l5 += ws + "_|";
              }
            });
          } else if (this.ancho == 2) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws + ws;
              } else {
                l1 += ws + "__" + ws;
              }
              if (e == 0) {
                l2 += "|  |";
                l3 += "|  |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "|  |";
                l3 += "|__|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + ws + "|";
                l3 += ws + ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + "  |";
                l3 += ws + "__|";
              } else {
                l2 += "|  " + ws;
                l3 += "|__" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l4 += "|  |";
                l5 += "|__|";
              } else if (e == 2) {
                l4 += "|  " + ws;
                l5 += "|__" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l4 += ws + ws + ws + "|";
                l5 += ws + ws + ws + "|";
              } else {
                l4 += ws + ws + ws + "|";
                l5 += ws + "__|";
              }
            });
          } else if (this.ancho == 3) {
            this.numero.forEach((e) => {
              if (e == 1 || e == 4) {
                l1 += ws + ws + ws + ws + ws;
              } else {
                l1 += ws + "___" + ws;
              }
              if (e == 0) {
                l2 += "|   |";
                l3 += "|   |";
              } else if (e == 4 || e == 8 || e == 9) {
                l2 += "|   |";
                l3 += "|___|";
              } else if (e == 1 || e == 7) {
                l2 += ws + ws + ws + ws + "|";
                l3 += ws + ws + ws + ws + "|";
              } else if (e == 2 || e == 3) {
                l2 += ws + "   |";
                l3 += ws + "___|";
              } else {
                l2 += "|   " + ws;
                l3 += "|___" + ws;
              }
              if (e == 0 || e == 6 || e == 8) {
                l4 += "|   |";
                l5 += "|___|";
              } else if (e == 2) {
                l4 += "|   " + ws;
                l5 += "|___" + ws;
              } else if (e == 1 || e == 4 || e == 7) {
                l4 += ws + ws + ws + ws + "|";
                l5 += ws + ws + ws + ws + "|";
              } else {
                l4 += ws + ws + ws + ws + "|";
                l5 += ws + "___|";
              }
            });
          }
          break;
        default:
          console.log("Error!");
      }

      console.log(l1);
      console.log(l2);
      console.log(l3);
      console.log(l4);
      console.log(l5);
      readline.close();
    }
  }
}

let num, ancho, alto;
const iniciar = () => {
  readline.question("Ingrese un número: ", (numerito) => {
    readline.question("Elija el ancho de dígito (1 a 3): ", (x) => {
      ancho = parseInt(x.trim());
      readline.question("Elija el alto de dígito (1 o 2): ", (y) => {
        alto = parseInt(y.trim());
        num = new Numero(numerito.trim(), ancho, alto);
        num.toLCD();
      });
    });
  });
};

iniciar();
