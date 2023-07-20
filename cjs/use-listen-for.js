"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListenFor = void 0;
const react_1 = require("react");
const useListenFor = (messageName, handler, options) => {
    (0, react_1.useEffect)(() => {
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
exports.useListenFor = useListenFor;
//# sourceMappingURL=use-listen-for.js.map