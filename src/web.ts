import { WebPlugin } from '@capacitor/core';

import type { CapacitorPhoneLockedPlugin } from './definitions';

export class CapacitorPhoneLockedWeb
  extends WebPlugin
  implements CapacitorPhoneLockedPlugin
{
  async checkPhoneLocked(): Promise<{ value: string }> {
    console.log('PhoneLocked undefined for this device');
    return  {value: 'unknown'};
  }
}
