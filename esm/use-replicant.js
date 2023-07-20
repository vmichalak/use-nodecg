import { useEffect, useState } from 'react';
import { klona as clone } from 'klona/json';
/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object. Currently supports the optional `namespace` option
 */
export const useReplicant = (replicantName, initialValue, options) => {
    const [value, updateValue] = useState(initialValue);
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
    useEffect(() => {
        const changeHandler = (newValue) => {
            updateValue((oldValue) => {
                if (newValue !== oldValue) {
                    return newValue;
                }
                // replicant.value has always the same reference. Cloning to cause re-rendering
                return clone(newValue);
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
//# sourceMappingURL=use-replicant.js.map