import { useState } from 'react';
export const useReplicantOnce = (replicantName, initialValue, options) => {
    const [state, setState] = useState(initialValue);
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
//# sourceMappingURL=use-replicant-once.js.map