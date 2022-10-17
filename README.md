# cordova-plugin-wefitter-ios

Cordova plugin for integrating WeFitter and HealthKit into your app.

## Installation

```sh
cordova plugin add https://github.com/wefitter/cordova-plugin-wefitter-ios.git#v1.3.0
```

In Xcode for your target:

- Set the minimum deployment target to at least iOS 11.3
- Add `HealthKit` in `Signing & Capabilities` and enable `Background Delivery`
- Add `Privacy - Health Share Usage Description` in `Info` with an appropriate message
- Add `Privacy - Health Update Usage Description` in `Info` with an appropriate message
- Add an Objective-C bridging header file

## Usage

Add the following code inside `onDeviceReady` in `www/js/index.js`:

```js
var configureSuccess = function (message) {
  console.log(message);
  // Connect can be called after configure has succeeded
  wefitterhealthkit.connect(success, failure);
};

var success = function (message) {
  console.log(message);
  alert(message);
};

var failure = function (message) {
  console.log(message);
  alert(message);
};

var config = {
  token: "YOUR_TOKEN", // required, WeFitter API profile bearer token
  url: "CUSTOM_URL", // optional, the url should be base without `v1.3/ingest/` as the library will append this. Default: `https://api.wefitter.com/api/`
  startDate: "CUSTOM_START_DATE", // optional with format `yyyy-MM-dd`, by default data of the past 7 days will be uploaded
};

// Configure should be called every time your app starts when HealthKit is supported
wefitterhealthkit.canConnectToHealthData((supported) => {
  if (supported) {
    wefitterhealthkit.configure(config, configureSuccess, failure);
  }
});
```

See [wefitterhealthkit.js](www/wefitterhealthkit.js) for all available functions.
