import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderButton from '../common/HeaderButton';
import { changePage, initializeForm } from '../modules/page';


const HeaderContainer = ({ category }) => {
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, text } = e

    dispatch(
      changePage({
        key: name,
        value: text
      }),
    )
  }

  useEffect(() => {
    dispatch(initializeForm())
  }, [dispatch])

  return (
    <HeaderButton
      category={category}
      onChange={onChange}
    />
  )
}

export default HeaderContainer;