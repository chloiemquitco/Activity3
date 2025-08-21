sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.NumberCounter", {
        onInit() {
            const number = 789;
            const finalResult = this.numberCounter(number);
            console.log("Output:", finalResult);
        },
    numberCounter(number) {
      if (number < 1 || number > 999) {
        return "Please enter a number between 1 and 999.";
      }

      const ones = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
      ];
      const teens = [
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
      ];
      const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
      ];

      let result = "";

      if (number >= 100) {
        const hundredDigit = Math.floor(number / 100);
        result += ones[hundredDigit] + " Hundred";
        number %= 100;
        if (number > 0) result += " ";
      }

      if (number >= 10 && number <= 19) {
        result += teens[number - 10];
      } else {
        const tenDigit = Math.floor(number / 10);
        const oneDigit = number % 10;
        if (tenDigit > 0) result += tens[tenDigit];
        if (tenDigit > 0 && oneDigit > 0) result += " ";
        if (oneDigit > 0) result += ones[oneDigit];
      }

      return result;
    }
    });

});