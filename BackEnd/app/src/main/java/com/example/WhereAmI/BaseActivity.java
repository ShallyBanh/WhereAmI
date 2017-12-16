package com.example.WhereAmI;

import android.support.v7.app.AppCompatActivity;

/**
 * Base Activity class. Any activity will extend this base activity
 */
public class BaseActivity extends AppCompatActivity{

    public SendLocationApplication getSendLocationApplication(){
        return (SendLocationApplication) getApplication();
    }
}
