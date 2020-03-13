import React from 'react';
import ArticleList from './ArticleList';
import { pluralize } from '../utilities/string';

const Result = ({ data }) => {
  return (
    <div>
      <div className='ui grid'>
        <div className='row'>
          <div className='column'>
            <div className='ui segment'>
              <div className='result-title'>Search Result!</div>
              <div>Found {pluralize(data.totalResults || 0, 'article')}</div>
            </div>
          </div>
        </div>
      </div>
      <ArticleList articles={data.articles || []} />
    </div>
  );
};

export default Result;
