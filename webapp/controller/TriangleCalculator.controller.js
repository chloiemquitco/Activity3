sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.TriangleCalculator", {
        onInit() {
            var a = 1;
            var b = 2;
            var c = 3;
            let perimeter = this.getTrianglePerimeter(a, b, c);
            console.log("Perimeter of triangle:", perimeter);
        },

        getTrianglePerimeter: function(a, b, c) {
            if (a <= 0 || b <= 0 || c <= 0) {
                return "All sides must be positive numbers.";
            }
            let perimeter = a + b + c;
            return perimeter;
        }
    });
});
