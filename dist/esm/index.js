import { registerPlugin } from '@capacitor/core';
const CapacitorPhoneLocked = registerPlugin('CapacitorPhoneLocked', {
    web: () => import('./web').then(m => new m.CapacitorPhoneLockedWeb()),
});
export * from './definitions';
export { CapacitorPhoneLocked };
//# sourceMappingURL=index.js.map