import type NodeCG from '@nodecg/types';
/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object. Currently supports the optional `namespace` option
 */
export declare const useReplicant: <T>(replicantName: string, initialValue: T, options?: (NodeCG.Replicant.Options<T> & {
    namespace?: string | undefined;
}) | undefined) => [T | undefined, (newValue: T) => void];
