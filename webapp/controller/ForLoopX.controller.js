sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.ForLoopX", {
        onInit() {
            let xPattern = this.genPattern(5);
            console.log(xPattern);
        },

        genPattern: function(height) {
            if (isNaN(height) || height < 1 || height % 2 === 0) {
                return "Height must be a positive odd number.";
            }

            let xPattern = "";

            for (let row = 0; row < height; row++) {
                let line = "";
                for (let col = 0; col < height; col++) {
                    if (col === row || col === (height - row - 1)) {
                        line += "*";
                    } else {
                        line += " ";
                    }
                }
                xPattern += line + "\n";
            }

            return xPattern;
        }
    });
});
