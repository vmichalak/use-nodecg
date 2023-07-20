export interface UseListenForOptions {
    bundle: string;
}
export declare const useListenFor: <T>(messageName: string, handler: (message: T) => void, options?: UseListenForOptions) => void;
