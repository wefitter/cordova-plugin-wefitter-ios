/********* WeFitterHealthKit.m Cordova Plugin Implementation *******/

#import "WeFitterHealthKit.h"
#import <Cordova/CDVPlugin.h>

@implementation WeFitterHealthKit

- (void)connect:(CDVInvokedUrlCommand*)command
{
    NSString* token = [command.arguments objectAtIndex:0];
    
    if (WeFitter.canConnectToHealthData) {
        [WeFitter connectBearerToken:token completion:^(BOOL success, NSError * error) {
            CDVPluginResult* pluginResult = nil;
            if (success) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString: @"Connected to HealthKit"];
            } else {
                NSString* msg = [NSString stringWithFormat:@"Error connecting profile: %@", error.localizedDescription];
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString: msg];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    } else {
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString: @"Cannot connect to HealthKit"];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

- (void)disconnect:(CDVInvokedUrlCommand*)command
{
    [WeFitter disconnect];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString: @"Disconnected from HealthKit"];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getStatus:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsNSInteger:WeFitter.currentStatus];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
