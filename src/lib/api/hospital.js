import client from './client';
import qs from 'qs';

export const listHospitals = ({ pageno, pagenum }) => {
  return client.get(`/lulu/hospital/${pageno}?pagenum=${pagenum}`);
}