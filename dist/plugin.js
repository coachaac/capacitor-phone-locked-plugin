var capacitorCapacitorPhoneLocked = (function (exports, core) {
    'use strict';

    const CapacitorPhoneLocked = core.registerPlugin('CapacitorPhoneLocked', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorPhoneLockedWeb()),
    });

    class CapacitorPhoneLockedWeb extends core.WebPlugin {
        async checkPhoneLocked() {
            console.log('PhoneLocked undefined for this device');
            return { value: 'unknown' };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorPhoneLockedWeb: CapacitorPhoneLockedWeb
    });

    exports.CapacitorPhoneLocked = CapacitorPhoneLocked;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
