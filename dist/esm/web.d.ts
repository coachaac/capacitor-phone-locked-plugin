import { WebPlugin } from '@capacitor/core';
import type { CapacitorPhoneLockedPlugin } from './definitions';
export declare class CapacitorPhoneLockedWeb extends WebPlugin implements CapacitorPhoneLockedPlugin {
    checkPhoneLocked(): Promise<{
        value: string;
    }>;
}
