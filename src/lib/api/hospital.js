import client from './client';
import qs from 'qs';

const config = {
  headers: {
    Accept: "application/json, text/plain, */*",
  }
}
// 병원 리스트 불러오는 api (병원종류 = pageno, 페이지 번호, 검색타입, 검색 키워드)
export const listHospitals = ({ pageno, pagenum, type, keyword }) => {
  const queryString = qs.stringify({
    pagenum, type, keyword
  })
  return client.get(`WebProject/hospital/${pageno}?${queryString}`, config);
}