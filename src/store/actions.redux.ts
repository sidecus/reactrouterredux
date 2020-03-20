export enum ClickActionTypes {
    INCREASE_CLICKCOUNT = "INCREASE_CLICKCOUNT",
};

export interface IncreaseClickCountAction {
    type: ClickActionTypes,
    payload: number;
};

export const increaseClickCount = (id: number): IncreaseClickCountAction => {
    return {
        type: ClickActionTypes.INCREASE_CLICKCOUNT,
        payload: id,
    };
}