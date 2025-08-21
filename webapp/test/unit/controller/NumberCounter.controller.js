/*global QUnit*/

sap.ui.define([
	"project2day3/controller/NumberCounter.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NumberCounter Controller");

	QUnit.test("I should test the NumberCounter controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
