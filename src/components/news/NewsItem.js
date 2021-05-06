import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const NewsItemBlock = styled.div`
  display: grid;
  height: 154px;
  grid-template-columns: 160px auto;
  column-gap: 1rem;

  .thumbnail {
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: inherit;
    grid-column: 1 / 2;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
      margin-top: 0;
    }
  }

  .content {
    grid-column: 2 / 3;
    h4 {
      font-size: 1.125rem;
      margin: 0.5rem 0;
      overflow: hidden;
      height: 21px;
    }
    .description {
      margin: 0;
      line-height: 1.5;
      white-space: normal;
      height: 100px;
      overflow: hidden;
    }
    .source {
      margin: 0 0;
      color: ${palette.gray[6]};
      font-size: 0.875rem;
    }
  }

  & + & {
    margin-top: 1rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, source, publishedAt } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer" >
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="content">
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p className="description">{description}</p>
        <p className="source">{source.name} | {publishedAt}</p>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem;