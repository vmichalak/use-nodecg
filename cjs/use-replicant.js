"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReplicant = void 0;
const react_1 = require("react");
const json_1 = require("klona/json");
/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object. Currently supports the optional `namespace` option
 */
const useReplicant = (replicantName, initialValue, options) => {
    const [value, updateValue] = (0, react_1.useState)(initialValue);
    const replicantOptions = options &&
        ({
            persistent: options.persistent,
            schemaPath: options.schemaPath,
        });
    if (options && 'defaultValue' in options) {
        replicantOptions.defaultValue = options.defaultValue;
    }
    let replicant;
    if (options?.namespace) {
        replicant = nodecg.Replicant(replicantName, options.namespace, replicantOptions);
    }
    else {
        replicant = nodecg.Replicant(replicantName, replicantOptions);
    }
    (0, react_1.useEffect)(() => {
        const changeHandler = (newValue) => {
            updateValue((oldValue) => {
                if (newValue !== oldValue) {
                    return newValue;
                }
                // replicant.value has always the same reference. Cloning to cause re-rendering
                return (0, json_1.klona)(newValue);
            });
        };
        replicant.on('change', changeHandler);
        return () => {
            replicant.removeListener('change', changeHandler);
        };
    }, [replicant]);
    return [
        value,
        (newValue) => {
            replicant.value = newValue;
        },
    ];
};
exports.useReplicant = useReplicant;
//# sourceMappingURL=use-replicant.js.map