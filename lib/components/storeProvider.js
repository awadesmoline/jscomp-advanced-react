import React from 'react';
import { StoreContext } from './App';

const storeProvider = (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    render() {
      return (
        <StoreContext.Consumer>
          {store => <Component {...this.props} store={store} />}
        </StoreContext.Consumer>
      )
    }
  }
};

export default storeProvider;
