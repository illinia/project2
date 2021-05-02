import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import Loading from '../../common/Loading';

const NewsListBlock = styled.div`
  padding-bottom: 3rem;
  width: 780px;
  margin: 0 auto;
  margin-top: 2rem;
  
  @media screen and (max-width: 780px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=628feb52906a47e2bdfff2ecab2c80eb'
        )
        setArticles(response.data.articles);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!articles) {
    return (
      <NewsListBlock>
        안됨
      </NewsListBlock>
    )
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;