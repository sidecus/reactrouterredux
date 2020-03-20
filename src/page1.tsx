import React from 'react';
import { StoreType as RootState } from './store';
import { increasePageCount } from './reducer';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (store: RootState) => store.page1Count;
const mapDispatch = {
    increasePageCount,
}

interface IPageProps {
    id: number;
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & IPageProps;

class Page1C extends React.PureComponent {
    constructor(props: IProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div>page 1</div>;
    }
}

export const Page1 = connector(Page1C);