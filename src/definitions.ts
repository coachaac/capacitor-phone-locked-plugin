export interface CapacitorPhoneLockedPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
