import LocalAuthentication

@objc public class CapacitorPhoneLocked: NSObject {
    @objc public func checkPhoneLocked() -> String {
    let context = LAContext()
    var error: NSError?

    var isProtected = "no";

    // verify if an authentication method is available at this time
    if context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) 
    {
        isProtected = "yes"
    
    }        

    return isProtected
    }
}
