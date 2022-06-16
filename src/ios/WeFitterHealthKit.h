/********* WeFitterHealthKit.h Cordova Plugin Header *******/

#import <Cordova/CDVPlugin.h>
#import <WeFitterLib/WeFitterLib-Swift.h>

@interface WeFitterHealthKit : CDVPlugin

- (void)configure:(CDVInvokedUrlCommand*)command;
- (void)connect:(CDVInvokedUrlCommand*)command;
- (void)disconnect:(CDVInvokedUrlCommand*)command;
- (void)canConnectToHealthData:(CDVInvokedUrlCommand*)command;
- (void)getConnectedProfileId:(CDVInvokedUrlCommand*)command;
- (void)getStatus:(CDVInvokedUrlCommand*)command;

@end
