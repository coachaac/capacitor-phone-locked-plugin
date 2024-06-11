package fr.lelab.phonelocked;

import android.util.Log;
import android.app.KeyguardManager;
import android.content.Context;

public class CapacitorPhoneLocked {

    public String checkPhoneLocked(Context context)
    {
        String secure="no";

        // check if device secure by PIN, Password or pattern
        boolean securePin = isDeviceSecure(context);

        if (securePin)
        {
            secure = "yes";
        }
        return secure;
    }

    private boolean isDeviceSecure(Context context) {
        KeyguardManager keyguardManager = (KeyguardManager) context.getSystemService(Context.KEYGUARD_SERVICE);
        return keyguardManager.isDeviceSecure();
    }
}
