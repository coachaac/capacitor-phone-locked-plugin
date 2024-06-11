import { WebPlugin } from '@capacitor/core';
export class CapacitorPhoneLockedWeb extends WebPlugin {
    async checkPhoneLocked() {
        console.log('PhoneLocked undefined for this device');
        return { value: 'unknown' };
    }
}
//# sourceMappingURL=web.js.map