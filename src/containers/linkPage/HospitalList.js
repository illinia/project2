import React, { useEffect } from 'react';
import { listHospital } from '../../modules/hospital';
import { useDispatch, useSelector } from 'react-redux';
import HospitalTable from '../../components/linkPage/HospitalTable';

const HospitalList = ({ pageno, titleList }) => {
  const dispatch = useDispatch()
  const { hospitalPageList, loading } = useSelector(
    ({ hospital, loading }) => ({
      hospitalPageList: hospital.list,
      loading: loading['hospital/LIST_HOSPITAL']
    }))

  const pagenum = 1
  useEffect(() => {
    dispatch(listHospital({ pageno, pagenum }))
  }, [dispatch, pageno])

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

export default HospitalList;