import React from 'react';
import styled from 'styled-components';
import Page from '../components/common/Page';

const SmallPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;

const InfoPage = () => {
  return (
    <Page>
      <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster3.png" />
      <SmallPage>
        <img style={{ width: "440px" }} src="http://ncov.mohw.go.kr/static/image/content/baroview_poster4.png" />
        <img style={{ width: "440px" }} src="http://ncov.mohw.go.kr/static/image/content/baroview_poster5.png" />
      </SmallPage>
      <img src="http://ncov.mohw.go.kr/static/image/content/baroview_poster6.png" />
    </Page>
  )
}

export default InfoPage;