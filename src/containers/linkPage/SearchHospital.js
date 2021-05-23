import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { onSearchChange } from '../../modules/hospital';
import Button from '../../components/common/Button';
import qs from 'qs';

const SearchHospitalBlockBlock = styled.div`
width: 800px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0 auto;
margin-top: 1rem;
transition: 0.3s ease-in;
@media (max-width: 900px) {
  width: 90%;
}
`;

const SearchHospitalBlock = styled.div`
  width: 270px;
  height: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    width: 150px;
    height: 100px;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }
`;

const SearchTypeBox = styled.select`
  width: 70px;
  height: 20px;
  outline: none;
  border: none;
`;

const SearchInput = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};

  &:active{
    background: none;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SearchButton = styled(Button)`
  width: 50px;
  height: 25px;
  padding: 0;
  font-size: 0.875rem;
`;

const SearchHospital = ({ location }) => {
  const dispatch = useDispatch();
  const { type, keyword } = useSelector(
    ({ hospital }) => ({
      type: hospital.type,
      keyword: hospital.keyword,
    })
  )
  const SearchChange = e => {
    const { name, value } = e.target;
    dispatch(
      onSearchChange({
        key: name,
        value,
      })
    )
  }

  // 검색 버튼 활성, 비활성 상태
  const [searchButtonToggle, setSearchButtonToggle] = useState(false);

  // 검색 키워드나 타입이 안정해져 있을 때는 에러방지를 위해 검색버튼 비활성화
  useEffect(() => {
    setSearchButtonToggle((keyword !== "" && type !== "") ? true : false
    )
  }, [keyword, type])

  // 처음 들어왔을 때 파라미터 설정
  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

  // 검색 요청
  const onSubmit = () => {
    const query = qs.stringify({ type, keyword })
    return `/pages/${pathName}?${query}`
  }

  return (
    <SearchHospitalBlockBlock>
      <SearchHospitalBlock>
        <SearchTypeBox
          onChange={SearchChange}
          name="type"
        >
          <option defaultValue value="name">병원명</option>
          <option value="address">주소</option>
        </SearchTypeBox>
        <SearchInput
          onChange={SearchChange}
          name="keyword"
          placeholder="종류를 선택해주세요"
        />
        <SearchButton
          to={onSubmit()}
          disabled={!searchButtonToggle}
        >
          검색
        </SearchButton>
      </SearchHospitalBlock>
      {/* 병원, 진료소를 모아서 전체지도 띄워 주는 기능 */}
      <Button cyan onClick={() => window.open("http://localhost:80/map/", "", "_blank")}>전체 지도보기</Button>
    </SearchHospitalBlockBlock>
  )
}

export default withRouter(SearchHospital);