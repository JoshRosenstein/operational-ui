import { StateHandler } from "../utils/state_handler";
import EventEmitter from "../utils/event_bus";
import { Canvas, Components, IAccessors, IComputedState, IConfig, IObject } from "./typings";
declare class Facade {
    __disposed: boolean;
    canvas: Canvas;
    components: IObject;
    context: Element;
    customColorAccessor: boolean;
    events: EventEmitter;
    state: StateHandler<IConfig>;
    constructor(context: Element);
    insertState(): StateHandler<IConfig>;
    initialConfig(): IConfig;
    defaultColorAssigner(palette: string[]): (key: string) => string;
    initialAccessors(): IAccessors;
    initialComputed(): IComputedState;
    insertCanvas(): Canvas;
    insertComponents(): Components;
    data<T>(data?: T): T;
    config(config?: Partial<IConfig>): IConfig;
    accessors(type: string, accessors: IObject): IObject;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    private findNode;
    draw(): Element;
    close(): void;
}
export default Facade;
