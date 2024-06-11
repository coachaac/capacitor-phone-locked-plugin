# capacitor-phone-locked

test if phone is protected by any means (code/paswordd ...)

## Install

```bash
npm install https://bitbucket.org/smartpilotteam/capacitor-phone-locked-plugin
npx cap sync
```

## API


* [`checkPhoneLocked()`](#checkphonelocked)


 JSDoc comments and rerun docgen to update the docs below-->

### checkPhoneLocked()

```typescript
checkPhoneLocked() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>
* yes: phone is lock protected
* no: phone not lock protected

--------------------

