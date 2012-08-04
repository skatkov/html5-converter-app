package com.ixonos.html5;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class Html5converterActivity extends Activity {
	WebView webView; 
	
	@Override
    public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
 
    	setContentView(R.layout.webview);
    	webView = (WebView) findViewById(R.id.webView1);
    	   	
    	WebSettings webSettings = webView.getSettings();
    	webSettings.setJavaScriptEnabled(true);
    	webSettings.setDomStorageEnabled(true);
    	webView.loadUrl("file:///android_asset/www/index.html");
    }
    
    public boolean onKeyDown(int keyCode, KeyEvent event) {
    	if (keyCode == KeyEvent.KEYCODE_MENU) {
    		this.webView.loadUrl("javascript:changeCurrency()");
    	}
    	return false;
    }
}
