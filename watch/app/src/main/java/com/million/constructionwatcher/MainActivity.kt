package com.million.constructionwatcher

import android.os.Bundle
import android.support.wearable.activity.WearableActivity
import android.view.View


class MainActivity : WearableActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Enables Always-on
        setAmbientEnabled()

        // Setting listener on clock in button
        findViewById<View>(R.id.clockIn).setOnClickListener { v -> onClockInButtonClicked(v) }

        // Setting listener on sos button
        findViewById<View>(R.id.sos).setOnClickListener { v -> onSOSButtonClicked(v) }
    }

    private fun onClockInButtonClicked(v: View?) {

    }

    private fun onSOSButtonClicked(v: View?) {

    }
}