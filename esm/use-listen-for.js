import { useEffect } from 'react';
export const useListenFor = (messageName, handler, options) => {
    useEffect(() => {
        if (options?.bundle) {
            nodecg.listenFor(messageName, options.bundle, handler);
            return () => {
                nodecg.unlisten(messageName, options.bundle, handler);
            };
        }
        nodecg.listenFor(messageName, handler);
        return () => {
            nodecg.unlisten(messageName, handler);
        };
    }, [handler, messageName, options]);
};
//# sourceMappingURL=use-listen-for.js.map