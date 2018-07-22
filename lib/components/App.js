import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

export const StoreContext = React.createContext({});

class App extends React.Component {
  state = this.props.store.getState();
  
  render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        <ArticleList
          articles={this.state.articles}
        />
      </StoreContext.Provider>
    )
  }
};

export default App;
