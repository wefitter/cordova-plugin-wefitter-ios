/********* WeFitterHealthKit.m Cordova Plugin Implementation *******/

#import <Cordova/CDVPlugin.h>
#import "WeFitterHealthKit.h"

@implementation WeFitterHealthKit

- (void)configure:(CDVInvokedUrlCommand*)command {
    NSDictionary* params = [command.arguments objectAtIndex:0];
    NSString* token = params[@"token"];
    NSString* url = params[@"url"];
    NSString* startDateString = params[@"startDate"];
    NSArray* enabledDataTypes = params[@"enabledDataTypes"];

    // convert NString to NSDate
    NSDate* startDate = nil;
    if (startDateString != nil) {
        NSDateFormatter* dateFormatter = [[NSDateFormatter alloc] init];
        [dateFormatter setDateFormat:@"yyyy-MM-dd"];
        startDate = [dateFormatter dateFromString:startDateString];
    }

    WeFitterConfig* config = [[WeFitterConfig alloc] initWithToken:token url:url startDate:startDate enabledDataTypes:enabledDataTypes];

    [WeFitter configure:config
             completion:^(BOOL success, NSError* error) {
               CDVPluginResult* pluginResult = nil;
               if (success) {
                   pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Configured HealthKit"];
               } else {
                   NSString* msg = [NSString stringWithFormat:@"Failed to configure HealthKit: %@", error.localizedDescription];
                   pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:msg];
               }
               [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
             }];
}

- (void)connect:(CDVInvokedUrlCommand*)command {
    [WeFitter connect:^(BOOL success, NSError* error) {
      CDVPluginResult* pluginResult = nil;
      if (success) {
          pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Connected to HealthKit"];
      } else {
          NSString* msg = [NSString stringWithFormat:@"Error connecting profile: %@", error.localizedDescription];
          pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:msg];
      }
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void)disconnect:(CDVInvokedUrlCommand*)command {
    [WeFitter disconnect];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Disconnected from HealthKit"];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)canConnectToHealthData:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:WeFitter.canConnectToHealthData];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getConnectedProfileId:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:WeFitter.connectedProfileId];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getStatus:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsNSInteger:WeFitter.currentStatus];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
