import React from 'react';
import { StoreContext } from './App';

export default (extraProps = () => ({})) => (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    render() {
      return (
        <StoreContext.Consumer>
          {store => <Component {...this.props} {...extraProps(store, this.props)} store={store} />}
        </StoreContext.Consumer>
      )
    }
  }
};
