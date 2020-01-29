/// <reference types="Cypress" />


declare namespace Cypress {
    interface Chainable<Subject = any> {
        waitUntilExists<Subject>(
            selector: string,
            options?: WaitUntilElementOptions
        ): Chainable<Subject>;
        waitUntilNotExists<Subject>(
            selector: string,
            options?: WaitUntilElementOptions
        ): Chainable<Subject>;
        waitUntilVisible<Subject>(
            selector: string,
            options?: WaitUntilElementOptions
        ): Chainable<Subject>;
        waitUntilHidden<Subject>(
            selector: string,
            options?: WaitUntilElementOptions
        ): Chainable<Subject>;
    }
}
/** options */
interface WaitUntilElementOptions {
    timeout?: number;
    interval?: number;
    errorMsg?: string;
    description?: string;
    customMessage?: string;
    verbose?: boolean;
    log?: boolean;
}

/** testing */
export function waitForElement(selector: string, testCallback: (selector: string) => boolean, options?: WaitUntilElementOptions): Cypress.Chainable;
declare function waitForElementTimer(callback: (stopTimer: CallableFunction, waitMaxTime: number) => void , options?: WaitUntilElementOptions): void;
declare function testForElementExists(selector: string): boolean;
declare function testForElementNotExists(selector: string): boolean;
declare function testForElementVisible(selector: string): boolean;
declare function testForElementNotVisible(selector: string): boolean;

/** logging */
interface WaitUntilElementLoggingEvent {
    name?: string;
    message?: string;
    errorMsg?: string;
    description?: string;
    customMessage?: string;
    verbose?: boolean;
    log?: boolean;
}

declare function logEvent(event, options?: WaitUntilElementOptions): void;

