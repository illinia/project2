import client from './client';
import qs from 'qs';

export const listHospitals = ({ pageno, pagenum, type, keyword }) => {
  const queryString = qs.stringify({
    pagenum, type, keyword
  })
  return client.get(`/lulu/hospital/${pageno}?${queryString}`);
}