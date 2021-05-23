import React, { useEffect } from 'react';
import { listHospital } from '../../modules/hospital';
import { useDispatch, useSelector } from 'react-redux';
import HospitalTable from '../../components/linkPage/HospitalTable';
import qs from 'qs';
import { withRouter } from 'react-router';

// 병원 리스트 컨테이너
const HospitalList = ({ pageno, titleList, location }) => {
  const dispatch = useDispatch()
  const { hospitalPageList, loading } = useSelector(
    ({ hospital, loading }) => ({
      hospitalPageList: hospital.list,
      loading: loading['hospital/LIST_HOSPITAL'],
    }))

  // 페이지, 주소가 바뀔때마다 파라미터와 쿼리값을 받아서 페이지를 렌더링해줌
  useEffect(() => {
    const { pagenum, type, keyword } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    dispatch(listHospital({ pageno, pagenum, type, keyword }))
  }, [dispatch, pageno, location.search])

  return (
    <>
      <HospitalTable
        hospitalPageList={hospitalPageList}
        loading={loading}
        titleList={titleList}
      />
    </>
  )
}

export default withRouter(HospitalList);