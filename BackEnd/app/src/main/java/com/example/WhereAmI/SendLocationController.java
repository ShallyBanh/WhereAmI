package com.example.WhereAmI;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.RequestBody;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;

/**
 * SendLocationController class. This class will control the send of post requests to the server
 */
public class SendLocationController {
    private static final String BASE_URL = "http://10.0.2.2";
    private OkHttpClient client;

    /**
     * Sends a POST request which our location coordinates to our php server
     */
    public void registerCoordinates(String lat, String lon) {
        //Set up our POST request to the php server
        FormBody.Builder formBuilder = new FormBody.Builder()
                .add("lat", lat)
                .add("lon", lon);
        RequestBody formBody = formBuilder.build();
        Request request = new Request.Builder().url(BASE_URL).post(formBody).build();


        client =  new OkHttpClient();
        Call call = client.newCall(request);
        call.enqueue(new Callback() {

            @Override
            public void onFailure(Call call, IOException e) {
                System.out.println("Coordinates Not Sent Error" + e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                try {
                    String resp = response.body().string();
                    System.out.println(resp);
                    if (response.isSuccessful()) {
                        System.out.println("Sucess, coordinates sent");
                    }
                    else {
                        System.out.println("Failed, coordinates not sent");
                    }
                } catch (IOException e) {
                    System.out.println("Exception caught" + e.getMessage());
                }
            }
        });
    }
}
