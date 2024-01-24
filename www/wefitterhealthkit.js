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
        AppleExerciseTime: 1,
        AppleMoveTime: 2, // only available iOS 14.5+
        BasalEnergyBurned: 3,
        BloodGlucose: 4,
        BloodPressureDiastolic: 5,
        BloodPressureSystolic: 6,
        BodyFatPercentage: 7,
        BodyMass: 8,
        BodyMassIndex: 9,
        BodyTemperature: 10,
        CyclingCadence: 11, // only available iOS 17+
        CyclingPower: 12, // only available iOS 17+
        CyclingSpeed: 13, // only available iOS 17+
        DistanceCycling: 14,
        DistanceDownhillSnowSports: 15,
        DistanceSwimming: 16,
        DistanceWalkingRunning: 17,
        DistanceWheelchair: 18,
        Electrocardiogram: 19, // only available iOS 14+
        HeartRate: 20,
        HeartRateVariabilitySDNN: 21,
        Height: 22,
        MindfulSession: 23,
        OxygenSaturation: 24,
        RestingHeartRate: 25,
        RunningPower: 26, // only available iOS 16+
        RunningSpeed: 27, // only available iOS 16+
        SleepAnalysis: 28,
        StairAscentSpeed: 29, // only available iOS 14+
        StairDescentSpeed: 30, // only available iOS 14+
        StepCount: 31,
        Vo2Max: 32,
        WalkingSpeed: 33, // only available iOS 14+
        Workout: 34,
    },
    Status: {
        NotConfigured: 0,
        Disconnected: 1,
        Connected: 2
    }
}
