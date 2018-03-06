import Series from "./series";
import { StateHandler } from "../utils/state_handler";
import EventEmitter from "../utils/event_bus";
import { Canvas, Components, IAccessors, IComputedState, IConfig, IObject } from "./typings";
declare class Facade {
    __disposed: boolean;
    canvas: Canvas;
    components: IObject;
    context: Element;
    events: EventEmitter;
    series: Series;
    state: StateHandler<IConfig>;
    constructor(context: Element);
    insertState(): StateHandler<IConfig>;
    initialConfig(): IConfig;
    initialAccessors(): IAccessors;
    initialComputed(): IComputedState;
    insertCanvas(): Canvas;
    insertComponents(): Components;
    insertSeries(): Series;
    data<T>(data?: T): T;
    config(config?: Partial<IConfig>): IConfig;
    accessors(type: string, accessors: IObject): IObject;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): Element;
    close(): void;
}
export default Facade;
