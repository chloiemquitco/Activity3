sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.RightTriangle", {
        onInit() {
            var height = 5;
            let rightTriangle = this.generatePattern(height);
            console.log(rightTriangle);
        },

        generatePattern: function(height) {
            if (isNaN(height) || height < 1) {
                return "Height must be a positive number.";
            }
            let row = 0;
            let rightTriangle = "";

            while (row < height) {
                let spaces = " ".repeat(row * 2);
                let stars = "";

                let count = 0;
                while (count < (height - row)) {
                    stars += "* ";
                    count++;
                }
                rightTriangle += spaces + stars.trim() + "\n";
                row++;
            }

            return rightTriangle;
        }
    });
});