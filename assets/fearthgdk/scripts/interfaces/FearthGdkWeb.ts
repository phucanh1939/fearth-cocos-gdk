import { _decorator } from 'cc';

import { FearthGdkConfig } from "../data/FearthGdkConfig";
import { FearthInitCallback, IFearthGdk } from "./IFearthGdk";

const { ccclass } = _decorator;

@ccclass('FearthGdkWeb')
export class FearthGdkWeb implements IFearthGdk {
    initialize(config: FearthGdkConfig, callback: FearthInitCallback): void {
        throw new Error("Method not implemented.");
    }

    createWallet(): string {
        throw new Error("Method not implemented.");
    }

}
