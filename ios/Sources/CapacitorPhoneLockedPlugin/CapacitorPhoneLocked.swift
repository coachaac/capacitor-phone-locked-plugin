import Foundation

@objc public class CapacitorPhoneLocked: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
