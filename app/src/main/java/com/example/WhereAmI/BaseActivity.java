package com.example.WhereAmI;

import android.support.v7.app.AppCompatActivity;
import com.example.WhereAmI.SendLocationApplication;

/**
 * Created by shallybanh on 2017-12-02.
 */

public class BaseActivity extends AppCompatActivity{
    public SendLocationApplication getSendLocationApplication(){
        return (SendLocationApplication) getApplication();
    }
}
