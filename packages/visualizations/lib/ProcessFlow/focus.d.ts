import { IEvents, IFocus, IObject, IState, TD3Selection, TLink, TNode, TSeriesEl, TStateWriter, Focus } from "./typings";
declare class ProcessFlowFocus implements Focus {
    el: TSeriesEl;
    state: IState;
    stateWriter: TStateWriter;
    events: IEvents;
    constructor(state: IState, stateWriter: TStateWriter, events: IEvents, el: TD3Selection);
    onElementHover(payload: {
        focusPoint: IFocus;
        d: TNode | TLink;
        hideLabel: boolean;
    }): void;
    appendContent(container: TD3Selection, content: IObject[]): void;
    addNodeBreakdowns(content: TSeriesEl, datum: TNode): void;
    addSingleNodeVisitsComment(content: TSeriesEl, datum: TNode): void;
    getDrawingDimensions(): {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
    };
    onElementOut(): void;
    onMouseLeave(): void;
    remove(): void;
}
export default ProcessFlowFocus;
