import { _decorator, native } from 'cc';
import { FearthInitCallback, IFearthGdk } from './IFearthGdk';
import { FearthGdkConfig } from '../data/FearthGdkConfig';
import { FearthEvent } from '../defines/FearthEvent';
import { FearthErrorCode } from '../defines/FearthErrorCode';
import { FearthUtils } from '../utils/FearthUtils';

const { ccclass } = _decorator;

@ccclass('FearthGdkNative')
export abstract class FearthGdkNative implements IFearthGdk {
    protected initializeCallback: FearthInitCallback = null;

    protected abstract initializeNative(config: FearthGdkConfig): void;
    protected abstract createWalletNative(): string;

    public initialize(config: FearthGdkConfig, callback: FearthInitCallback): void {
        if (!config) {
            callback(FearthErrorCode.InvalidConfig);
            return;
        }
        this.initializeCallback = callback;
        const bridge = native.jsbBridgeWrapper;
        bridge.removeAllListenersForEvent(FearthEvent.InitDone);
        bridge.addNativeEventListener(FearthEvent.InitDone, this.onInitDone.bind(this));
        this.initializeNative(config);
    }

    public createWallet(): string {
        return this.createWalletNative();
    }

    private onInitDone(eventData: string): void {
        native.jsbBridgeWrapper.removeAllListenersForEvent(FearthEvent.InitDone);
        if (this.initializeCallback != null) {
            const errorCode = FearthUtils.string2Number(eventData, 0);
            this.initializeCallback(errorCode);
            this.initializeCallback = null;
        }
    }
}