package com.example.WhereAmI;

import android.app.Application;

/**
 * This application class will initialze all our dependencies thus on start up
 * everything dependency will be initialized. The Base Activity class extends this application
 * */
public class SendLocationApplication extends Application {

    public SendLocationController getSendLocationController(){
        return new SendLocationController();
    }

}
