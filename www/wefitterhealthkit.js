module.exports = {
    configure: function (config, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "configure", [config])
    },
    connect: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "connect", []);
    },
    disconnect: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "disconnect", []);
    },
    canConnectToHealthData: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "canConnectToHealthData", []);
    },
    getConnectedProfileId: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "getConnectedProfileId", []);
    },
    getStatus: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "getStatus", []);
    }
}