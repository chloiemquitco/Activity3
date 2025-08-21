sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.Array", {
        onInit() {
            let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
            let o = ["th", "st", "nd", "rd"];

            for (let i = 0; i < colors.length; i++) {
                let position = i + 1;
                let suffix;

                if (position === 1) {
                    suffix = o[1];
                } else if (position === 2) {
                    suffix = o[2];
                } else if (position === 3) {
                    suffix = o[3];
                } else {
                    suffix = o[0];
                }

                console.log(position + suffix + " choice is " + colors[i] + ".");
            }
        }
    });
});
