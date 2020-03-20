import React from 'react';
import { RootState } from './store/store.redux';
import { increaseClickCount } from './store/actions.redux';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const INVALID_PAGEID = 0;

// Routing parameters we are expecting, accessed via this.props.match.params
interface IRouteParams {
    id?: string;
}

// IOwnProps type to receive both routing params and props from parent component
type IOwnProps = RouteComponentProps<IRouteParams> & {
    pageName: string;
}

const getPageIdFromRoute = (props: IOwnProps) => !props.match.params.id ? INVALID_PAGEID : parseInt(props.match.params.id!);

// mapStateToProps - note we are using ownProps to filter the state but it's not necessary, if not needed just don't take the second parameter
const mapState = (store: RootState, ownProps: IOwnProps) => {
    const pageId = getPageIdFromRoute(ownProps);
    const validPageId = pageId >= 1 && pageId < store.ClickCounts.length ? pageId : INVALID_PAGEID;
    const clickCount = store.ClickCounts[validPageId];
    return {
        clickCount: clickCount,
    };
};

// mapDispatchToProps - we are using the object short hand for map dispatch to props. No need to call bindActionCreators manually
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapDispatch = {
    increaseClickCount
};

// Interring the connected prop type automatically. We need it for the class component definition
// https://react-redux.js.org/using-react-redux/static-typing#inferring-the-connected-props-automatically
const connector = connect(mapState, mapDispatch);
type IRoutePageProps = IOwnProps & ConnectedProps<typeof connector>;

// Class component
class RouterPageC extends React.PureComponent<IRoutePageProps> {
    public render(): JSX.Element {
        const pageId = getPageIdFromRoute(this.props);
        return (
            <div>
                <h3>{this.props.pageName}</h3>
                <div>Click count: {this.props.clickCount}
                </div>
                <button onClick={() => this.props.increaseClickCount(pageId)}>
                    Click Me
                </button>
            </div>
        );
    }
}

// wrapped component
export const RouterPage = withRouter(connector(RouterPageC));