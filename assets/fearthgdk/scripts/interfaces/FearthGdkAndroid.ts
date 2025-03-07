

import { _decorator, native } from 'cc';
import { FearthGdkNative } from './FearthGdkNative';
import { FearthGdkConfig } from '../data/FearthGdkConfig';
const { ccclass } = _decorator;

@ccclass('FearthGdkAndroid')
export class FearthGdkAndroid extends FearthGdkNative {
    private readonly ClassName = "com/fearth/gdk/FearthGdkWrapper";
    private readonly InitializeFuncName = "initialize";
    private readonly InitializeFuncSignature = "(Ljava/lang/String;)V";
    private readonly CreateWalletFuncName = "createWallet";
    private readonly CreateWalletFuncSignature = "(Ljava/lang/String;)Ljava/lang/String;";

    protected initializeNative(config: FearthGdkConfig): void {
        native.reflection.callStaticMethod(
            this.ClassName,
            this.InitializeFuncName,
            this.InitializeFuncSignature,
            JSON.stringify(config)
        );
    }
    
    protected createWalletNative(): string {
        return native.reflection.callStaticMethod(
            this.ClassName,
            this.CreateWalletFuncName,
            this.CreateWalletFuncSignature
        );
    }
}