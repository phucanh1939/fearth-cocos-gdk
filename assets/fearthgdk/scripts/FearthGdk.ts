import { _decorator, sys } from 'cc';
import { IFearthGdk } from './interfaces/IFearthGdk';
import { FearthGdkIOS } from './interfaces/FearthGdkIOS';
import { FearthGdkAndroid } from './interfaces/FearthGdkAndroid';
import { FearthGdkWeb } from './interfaces/FearthGdkWeb';

const { ccclass } = _decorator;

@ccclass('FearthGdk')
export abstract class FearthGdk {
    private static instance: IFearthGdk = null;

    private static createInstance(): IFearthGdk {
        if (sys.isNative && sys.os === sys.OS.IOS) return new FearthGdkIOS();
        if (sys.isNative && sys.os === sys.OS.ANDROID) return new FearthGdkAndroid();
        return new FearthGdkWeb();
    }

    public static getInstance(): IFearthGdk {
        if (!this.instance) this.instance = this.createInstance();
        return FearthGdk.instance;
    }
}

