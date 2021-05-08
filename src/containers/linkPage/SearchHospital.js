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
margin: 0 auto;
margin-top: 1rem;
transition: 0.3s ease-in;
@media (max-width: 820px) {
  width: calc(100% - 50px)
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

  @media (max-width: 300px) {
    width: 100px;
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
    width: 100px;
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

  const [searchButtonToggle, setSearchButtonToggle] = useState(false);

  useEffect(() => {
    setSearchButtonToggle((keyword !== "" && type !== "") ? true : false
    )
  }, [keyword, type])

  let pathName = location.pathname.split('/')

  if (pathName[2] === undefined) {
    pathName = "relaxhospital"
  } else {
    pathName = `${pathName[2]}`
  }

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
          <option value="">종류선택</option>
          <option value="name">기관명</option>
          <option value="address">주소</option>
        </SearchTypeBox>
        <SearchInput
          onChange={SearchChange}
          name="keyword"
          placeholder="키워드 검색"
        />
        <SearchButton
          to={onSubmit()}
          disabled={!searchButtonToggle}
        >
          검색
      </SearchButton>
      </SearchHospitalBlock>
    </SearchHospitalBlockBlock>
  )
}

export default withRouter(SearchHospital);