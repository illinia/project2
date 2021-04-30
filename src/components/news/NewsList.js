import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import palette from '../../lib/styles/palette';

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

const LoadingPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 55px;
  height: 60vh;
  margin: 0 auto;

  div {
    background-color: ${palette.gray[5]};
    width: 6px;
    height: 30px;
  }

  @keyframes box {
    0% {
      transform: none;
    }
    30% {
      transform: scale(1, 2.5);
    }
    60% {
      transform: none;
    }
  }

  .box1 {
    animation: box 1s infinite ease-in-out;
  }
  .box2 {
    animation: box 1s 0.1s infinite ease-in-out;
  }
  .box3 {
    animation: box 1s 0.2s infinite ease-in-out;
  }
  .box4 {
    animation: box 1s 0.3s infinite ease-in-out;
  }
  .box5 {
    animation: box 1s 0.4s infinite ease-in-out;
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
      <LoadingPage>
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
        <div className="box4" />
        <div className="box5" />
      </LoadingPage>
    )
  }

  if (!articles) {
    return null;
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