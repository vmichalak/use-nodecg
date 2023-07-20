export interface UseReplicantOnceOptions {
    bundle: string;
}
export declare const useReplicantOnce: <T>(replicantName: string, initialValue: T, options?: UseReplicantOnceOptions) => T | undefined;
