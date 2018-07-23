import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

export const StoreContext = React.createContext({});

class App extends React.Component {
  state = this.props.store.getState();
  
  render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        <SearchBar />
        <ArticleList
          articles={this.state.articles}
        />
      </StoreContext.Provider>
    )
  }
};

export default App;
