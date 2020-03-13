import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles = [] }) => {
  const articlesRenderedList = articles.map((article, index) => {
    return <ArticleItem key={index} article={article} />;
  });
  return (
    <div className='ui grid'>
      <div className='ui items'>{articlesRenderedList}</div>
    </div>
  );
};

export default ArticleList;
