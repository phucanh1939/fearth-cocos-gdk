package com.fearth.gdk;

import com.cocos.lib.JsbBridgeWrapper;

import com.fearth.gdk.data.GdkConfig;
import com.fearth.gdk.utils.JsonHelper;

import android.util.Log;

public class FearthGdkWrapper {
    public static final String EventInitDone = "InitDone";
    
    public static void initialize(String configJson) {
        Log.d("FearthGdk", "[FearthGdkWrapper] <initialize> " + configJson);
        GdkConfig config = JsonHelper.fromJson(configJson, GdkConfig.class);
        FearthGdk.getInstance().initialize(config, (errorCode) -> {
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.EventInitDone, String.valueOf(errorCode));
        });
    }

    public static String createWallet() {
        Log.d("FearthGdk", "[FearthGdkWrapper] <createWallet>");
        return FearthGdk.getInstance().createWallet();
    }
}
