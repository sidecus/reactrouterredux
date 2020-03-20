export enum PageActionTypes {
    // This is for demo purpose so I am doing something dumb here with two actions doing similar stuff
    INCREASE_PAGE1COUNT = "INCREASE_PAGE1COUNT",
    INCREASE_PAGE2COUNT = "INCREASE_PAGE2COUNT",
};

export interface IncreasePageCountAction {
    type: PageActionTypes,
    payload: number;
};

export const increasePageCount = (page: number): IncreasePageCountAction => {
    return {
        type: page === 1 ? PageActionTypes.INCREASE_PAGE1COUNT : PageActionTypes.INCREASE_PAGE2COUNT,
        payload: page,
    };
}