module.exports = {
    connect: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "connect", [name]);
    },
    disconnect: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "disconnect", []);
    },
    getStatus: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WeFitterHealthKit", "getStatus", []);
    }
}