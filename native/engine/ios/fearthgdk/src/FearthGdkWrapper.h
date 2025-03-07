#ifndef FearthGdkWrapper_h
#define FearthGdkWrapper_h

#define FEARTH_EVENT_INIT_DONE @"InitDone"

#import <Foundation/Foundation.h>

@interface FearthGdkWrapper : NSObject
+ (void)initialize:(NSString *)configJson;
+ (NSString *)createWallet;
@end

#endif /* FearthGdkWrapper_h */
