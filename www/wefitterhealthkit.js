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
    },
    DataType: {
      ActiveEnergyBurned: 0,
      BasalEnergyBurned: 1,
      BloodGlucose: 2,
      BloodPressureDiastolic: 3,
      BloodPressureSystolic: 4,
      BodyFatPercentage: 5,
      BodyMass: 6,
      BodyMassIndex: 7,
      BodyTemperature: 8,
      DistanceCycling: 9,
      DistanceDownhillSnowSports: 10,
      DistanceSwimming: 11,
      DistanceWalkingRunning: 12,
      DistanceWheelchair: 13,
      Electrocardiogram: 14, // only available iOS 14+
      HeartRate: 15,
      HeartRateVariabilitySDNN: 16,
      Height: 17,
      MindfulSession: 18,
      OxygenSaturation: 19,
      RestingHeartRate: 20,
      SleepAnalysis: 21,
      StepCount: 22,
      Vo2Max: 23,
      Workout: 24
    }
}