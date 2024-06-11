import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPhoneLockedPlugin)
public class CapacitorPhoneLockedPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorPhoneLockedPlugin"
    public let jsName = "CapacitorPhoneLocked"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "checkPhoneLocked", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorPhoneLocked()

    @objc func checkPhoneLocked(_ call: CAPPluginCall) {
        call.resolve([
            "value": implementation.checkPhoneLocked()
        ])
    }
}
