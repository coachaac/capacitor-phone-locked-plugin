# capacitor-phone-locked

Test if phone is protected by any means (code/password ...)

- version 1.0.0 Capacitor 5 

## Install

```bash
npm install https://github.com/coachaac/capacitor-phone-locked-plugin
npx cap sync
```

## API


* [`checkPhoneLocked()`](#checkphonelocked)


### checkPhoneLocked()

```typescript
checkPhoneLocked() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

* "yes": phone is lock protected

* "no": phone not lock protected

--------------------

Usage

```typescript

import { CapacitorPhoneLocked } from 'capacitor-phone-locked';

    CapacitorPhoneLocked.checkPhoneLocked().then((lockValue)=>
    {
        console.log("Lock device value: ", lockValue);
    }),
    err =>{
        console.log("Error getting device locxk status")
    };
```


