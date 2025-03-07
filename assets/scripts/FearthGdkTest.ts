import { _decorator, Button, Component, director, Label } from 'cc';
import { FearthGdk } from '../fearthgdk/scripts/FearthGdk';
import { FearthGdkConfig } from '../fearthgdk/scripts/data/FearthGdkConfig';
const { ccclass, property } = _decorator;

@ccclass('FearthGdkTest')
export class FearthGdkTest extends Component {
    @property({type: Label})
    public txtInitStatus: Label = null!;

    @property({type: Label})
    public txtInitPhrase: Label = null!;

    @property({type: Button})
    public btnInit: Button = null!;

    @property({type: Button})
    public btnCreateWallet: Button = null!;

    protected onLoad(): void {
        this.btnInit.node.on(Button.EventType.CLICK, this.initGdk, this);
        this.btnCreateWallet.node.on(Button.EventType.CLICK, this.createWallet, this);
    }

    protected onGdkInitDone(errorCode: number) {
        this.txtInitStatus.string = `GDK init status: ${errorCode}`;
    }

    protected initGdk(): void {
        const config: FearthGdkConfig = {
            id: 1939,
            name: 'TestGdk',
        };
        FearthGdk.getInstance().initialize(config, this.onGdkInitDone.bind(this));
    }

    protected createWallet(): void {
        const phrase = FearthGdk.getInstance().createWallet();
        this.txtInitPhrase.string = `Phrase: ${phrase}`;
    }
}
