

import { _decorator, native } from 'cc';
import { FearthGdkNative } from './FearthGdkNative';
import { FearthGdkConfig } from '../data/FearthGdkConfig';
const { ccclass } = _decorator;

@ccclass('FearthGdkIOS')
export class FearthGdkIOS extends FearthGdkNative {
    private readonly ClassName = "FearthGdkWrapper";
    private readonly InitializeFuncName = "initialize:";
    private readonly CreateWalletFuncName = "createWallet";

    protected initializeNative(config: FearthGdkConfig): void {
        native.reflection.callStaticMethod(
            this.ClassName,
            this.InitializeFuncName,
            JSON.stringify(config)
        );
    }
    
    protected createWalletNative(): string {
        return native.reflection.callStaticMethod(
            this.ClassName,
            this.CreateWalletFuncName
        );
    }
}