/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        alert("deviceready event called");
        console.log("deviceready event called");
        navigator.notification.alert("deviceready event called");
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);

        var element = document.getElementById('dlDeviceInfo');
        element.innerHTML =
        '<dt>Cordova:</dt><dd>' + device.cordova + '</dd>' +
        '<dt>Model:</dt><dd>' + device.model + '</dd>' +
        '<dt>Platform:</dt><dd>' + device.platform + '</dd>' +
        '<dt>Version:</dt><dd>' + device.version + '</dd>' +
        '<dt>Manufacturer:</dt><dd>' + device.manufacturer + '</dd>';
    }
};

app.initialize();