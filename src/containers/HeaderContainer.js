import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../common/HeaderButton';
import { changePage, initializeForm } from '../modules/page';


const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ page }) => ({
    form: page.page
  }));

  const onChange = e => {
    const { name, text } = e

    dispatch(
      changePage({
        form: 'page',
        key: name,
        value: text
      }),
    )
  }

  useEffect(() => {
    dispatch(initializeForm('page'))
  }, [dispatch])

  return (
    <HeaderButton
      form={form}
      onChange={onChange}
    />
  )
}

export default HeaderContainer;