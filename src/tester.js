"use strict";
const $dom = Cypress.dom;
const CypressJquery = Cypress.$.bind(Cypress)

function testForElementExists(selector)
{
    const found = CypressJquery(selector);
    return (found && found.length > 0);
}

function testForElementHidden(selector)
{
    return !testForElementExists(selector);
}
function testForElementVisible(selector)
{
    return !$dom.isHidden(selector);
}
function testForElementNotVisible(selector)
{
    return $dom.isHidden(selector);

}
function loadElement(selector) {
    const el = CypressJquery(selector);
    if (!!el && el.length > 0){
        return cy.wrap(el);
    }
    return false;
}
function waitForElementTimer(callback, options) {
    const waitMaxTime = ((new Date).getTime() + options.timeout);
    const waitHandler = setTimeout(callback(() => clearInterval(waitHandler), waitMaxTime), options.interval);
}

function waitForElement(selector, testCallback, options) {
    return new Cypress.Promise((resolve, reject) => {
        waitForElementTimer((stopTimer, waitMaxTime) => {
            /** check if test passed */
            if (testCallback(selector)){
                stopTimer();
                /** resolve Promise */
                resolve(loadElement(selector));$dom.getElements
            }
            /** make sure we haven't exceeded wait time */
            if (waitMaxTime < (new Date).getTime()){
                /** too much time has passed, give up */
                stopTimer();
                /** reject Promise */
                reject(loadElement(selector));
            }
        });
    });
}



export function waitUntilExists(selector)
{
    return waitForElement(selector, testForElementExists)
        .catch(value => {
            /** throw error */
            return value;
        });
}
export function waitUntilNotExists(selector)
{
    return waitForElement(selector, testForElementHidden)
        .catch(value => {
            /** throw error */
            return value;
        });
}
export function waitUntilVisible(selector)
{
    return waitForElement(selector, testForElementVisible)
        .catch(value => {
           /** throw error */
           return value;
        });
}
export function waitUntilHidden(selector)
{
    return waitForElement(selector, testForElementNotVisible)
        .catch(value => {
            /** throw error */
            return value;
        });

}
