import React, { useEffect } from 'react';
import { initializeSearch, listHospital } from '../../modules/hospital';
import { useDispatch, useSelector } from 'react-redux';
import HospitalTable from '../../components/linkPage/HospitalTable';
import qs from 'qs';
import { withRouter } from 'react-router';

const HospitalList = ({ pageno, titleList, location }) => {
  const dispatch = useDispatch()
  const { hospitalPageList, error, loading, type, keyword } = useSelector(
    ({ hospital, loading }) => ({
      hospitalPageList: hospital.list,
      error: hospital.error,
      loading: loading['hospital/LIST_HOSPITAL'],
      type: hospital.type,
      keyword: hospital.keyword,
    }))

  useEffect(() => {
    const { pagenum, type, keyword } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    dispatch(listHospital({ pageno, pagenum, type, keyword }))
    dispatch(initializeSearch())
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