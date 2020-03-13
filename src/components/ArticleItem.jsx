import React from 'react';

const ArticleItem = ({ article = {} }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className='item'>
      {urlToImage && (
        <div className='image'>
          <img src={urlToImage} alt={title} />
        </div>
      )}

      <div className='content'>
        <a
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          className='header header-link'
        >
          {title}
        </a>
        <div className='description'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
