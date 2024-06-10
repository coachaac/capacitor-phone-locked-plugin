import { WebPlugin } from '@capacitor/core';

import type { CapacitorPhoneLockedPlugin } from './definitions';

export class CapacitorPhoneLockedWeb
  extends WebPlugin
  implements CapacitorPhoneLockedPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
