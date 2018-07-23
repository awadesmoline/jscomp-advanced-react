import React from 'react';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

export const StoreContext = React.createContext({});

class App extends React.Component {
  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    this.props.store.unSubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm)
      })
    }
    return (
      <StoreContext.Provider value={this.props.store}>
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList
          articles={articles}
        />
      </StoreContext.Provider>
    )
  }
};

export default App;
