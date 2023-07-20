"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReplicantOnce = void 0;
const react_1 = require("react");
const useReplicantOnce = (replicantName, initialValue, options) => {
    const [state, setState] = (0, react_1.useState)(initialValue);
    if (options?.bundle) {
        nodecg.readReplicant(replicantName, options.bundle, (value) => {
            setState(value);
        });
    }
    else {
        nodecg.readReplicant(replicantName, (value) => {
            setState(value);
        });
    }
    return state;
};
exports.useReplicantOnce = useReplicantOnce;
//# sourceMappingURL=use-replicant-once.js.map