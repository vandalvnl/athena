var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../rules", "ramda"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const rules_1 = __importDefault(require("../rules"));
    const ramda_1 = require("ramda");
    class Validation {
        constructor() {
            this.validations = [];
        }
        validate(object) {
            let rules;
            if (!ramda_1.has("rules")(object)) {
                for (const method of rules_1.default.rulesName()) {
                    if (method.toLowerCase() === object.name.toLowerCase()) {
                        rules = rules_1.default.new();
                        rules = rules[method]();
                    }
                }
            }
            else {
                rules = object.rules;
            }
            this.validations.push({
                name: object.name,
                value: object.value,
                isValid: rules.check(object.value),
                logs: [...rules.$rules]
            });
            return this;
        }
        logs() {
            return [...this.validations];
        }
        msgErrors() {
            const errors = {};
            this.logs().forEach(x => {
                const message = x.logs
                    .filter((y) => !y.isValid)
                    .filter((x) => !x.isValid)
                    .reduce((acc, el) => acc + `${el.message} `, []);
                if (message != "") {
                    errors[x.name] = message.trim();
                }
            });
            return errors;
        }
        allRight() {
            return this.filter().length === this.logs().length;
        }
        hasErrors() {
            return this.filter().length !== this.logs().length;
        }
        filter() {
            return this.logs().filter(element => element.isValid === true);
        }
    }
    exports.default = Validation;
});
//# sourceMappingURL=index.js.map