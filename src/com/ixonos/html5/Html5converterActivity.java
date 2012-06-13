package com.ixonos.html5;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class Html5converterActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
