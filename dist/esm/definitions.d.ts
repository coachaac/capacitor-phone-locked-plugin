export interface CapacitorPhoneLockedPlugin {
    checkPhoneLocked(): Promise<{
        value: string;
    }>;
}
