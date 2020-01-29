"use strict";

import { waitUntilExists, waitUntilHidden, waitUntilNotExists, waitUntilVisible } from "./tester";

Cypress.Commands.add('waitUntilExists', {prevSubject: "optional"}, waitUntilExists);
Cypress.Commands.add('waitUntilNotExists', {prevSubject: "optional"}, waitUntilNotExists);
Cypress.Commands.add('waitUntilVisible', {prevSubject: "optional"}, waitUntilVisible);
Cypress.Commands.add('waitUntilHidden', {prevSubject: "optional"}, waitUntilHidden);
