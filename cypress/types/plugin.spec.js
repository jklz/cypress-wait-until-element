/// <reference types="cypress" />
/// <reference path="../../index.d.ts" />
cy.get('body').waitUntilExists('body');
cy.waitUntilExists('body');
