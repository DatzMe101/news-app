import React, { Component } from 'react';
import ArticleSearch from './ArticleSearch';
import Result from './Result';
import news from '../apis/news';
import './style.scss';

class App extends Component {
  state = {
    result: {}
  };
  onArticleSearch = async ({ country, endpoint, q }) => {
    const countryObj = country ? { country } : {};
    const { data } = await news.get(`/${endpoint}`, {
      params: {
        ...countryObj,
        q
      }
    });
    this.setState({ result: data });
  };
  render() {
    const { result } = this.state;
    return (
      <div className='ui container news-app'>
        <h1 className='ui center aligned app-header'>Elmer News App</h1>
        <ArticleSearch onSearch={this.onArticleSearch} />
        <Result data={result} />
      </div>
    );
  }
}

export default App;
