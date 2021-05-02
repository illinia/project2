import React from 'react';
import styled from 'styled-components';
import Menu from '../common/Menu';

const Page = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 90%;
  }

  img {
    margin-top: 20px;
    height: auto;
    width: 100%;
  }
`;

const SmallPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;

  img {
    width: 440px;
    height: auto;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const InfoPage = () => {
  return (
    <>
      <Menu>코로나란?</Menu>
      <Page>
        <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster3.png" alt="img 로딩중..." />
        <SmallPage>
          <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster4.png" alt="img 로딩중..." />
          <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster5.png" alt="img 로딩중..." />
        </SmallPage>
        <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster6.png" alt="img 로딩중..." />
      </Page>
    </>
  )
}

export default InfoPage;