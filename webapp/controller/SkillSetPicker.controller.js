sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2day3.controller.SkillSetPicker", {
        onInit() {
            var record = [
            {
                "Name": "Gibo",
                "Age": 16,
                "SkillSet": [
                    { "Skill": "SAP UI5" },
                    { "Skill": "SAP HANA" }
                ]
            },
            {
                "Name": "Patrick",
                "Age": 22,
                "SkillSet": [
                    { "Skill": "SAP UI5" },
                    { "Skill": "SAP HANA" },
                    { "Skill": "SAP ABAP" }
                ]
            },
            {
                "Name": "MJ",
                "Age": 24,
                "SkillSet": [
                    { "Skill": "SAP HANA" }
                ]
            }
        ];
        let maxPerson = record[0];

        for (let i = 1; i < record.length; i++) {
            if (record[i].SkillSet.length > maxPerson.SkillSet.length) {
                maxPerson = record[i];
            }
        }

        console.log("Name:", maxPerson.Name);
        console.log("Age:", maxPerson.Age);
        },
    });
});
