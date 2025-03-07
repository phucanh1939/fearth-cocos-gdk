import { FearthGdkConfig } from "../data/FearthGdkConfig";

export type FearthInitCallback = (errorCode: number) => void;

export interface IFearthGdk {
    initialize(config: FearthGdkConfig, callback: FearthInitCallback): void;
    createWallet(): string; // Returns wallet phrase
}
