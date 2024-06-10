import { registerPlugin } from '@capacitor/core';

import type { CapacitorPhoneLockedPlugin } from './definitions';

const CapacitorPhoneLocked = registerPlugin<CapacitorPhoneLockedPlugin>(
  'CapacitorPhoneLocked',
  {
    web: () => import('./web').then(m => new m.CapacitorPhoneLockedWeb()),
  },
);

export * from './definitions';
export { CapacitorPhoneLocked };
