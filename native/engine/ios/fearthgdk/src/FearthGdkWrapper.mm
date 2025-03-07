#import "FearthGdkWrapper.h"
#import "platform/apple/JsbBridgeWrapper.h"
#import <FearthGdk/FearthGdk.h>
#import <FearthGdk/FearthJsonHelper.h>

@implementation FearthGdkWrapper

+ (void)initialize:(NSString *)configJson {
    NSLog(@"[FearthGdkWrapper] <initialize> configJson: %@", configJson);
    FearthGdkConfig *config = [FearthJsonHelper fromJson:configJson toClass:FearthGdkConfig.class];
    [FearthGdk.sharedInstance initialize:config callback:^(NSInteger errorCode){
        JsbBridgeWrapper* bridge = [JsbBridgeWrapper sharedInstance];
        [bridge dispatchEventToScript:FEARTH_EVENT_INIT_DONE arg:@(errorCode).stringValue];
    }];
}

+ (NSString *)createWallet {
    NSLog(@"[FearthGdkWrapper] <createWallet>");
    return [FearthGdk.sharedInstance createWallet];
}

@end

