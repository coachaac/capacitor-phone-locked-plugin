package fr.lelab.phonelocked;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorPhoneLocked")
public class CapacitorPhoneLockedPlugin extends Plugin {

    private CapacitorPhoneLocked implementation = new CapacitorPhoneLocked();

    @PluginMethod
    public void checkPhoneLocked(PluginCall call) {

        JSObject ret = new JSObject();


        ret.put("value", implementation.checkPhoneLocked(getContext()));
        call.resolve(ret);
    }
}
