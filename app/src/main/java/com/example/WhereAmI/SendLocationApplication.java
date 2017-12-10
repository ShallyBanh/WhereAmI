package com.example.WhereAmI;

import android.app.Application;
import com.example.WhereAmI.SendLocationController;

/**
 * Created by shallybanh on 2017-12-02.
 */

public class SendLocationApplication extends Application {

    public SendLocationController getSendLocationController(){
        return new SendLocationController();
    }
}
