import React, { useEffect, useState } from 'react';
import HeaderButton from '../common/HeaderButton';
import HeaderHambuger from './HeaderHambuger';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { changeValue } from '../modules/responsive';


const HeaderContainer = ({ category }) => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  })

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
    })
  }, 10)

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const responsiveCheck = windowSize.width < 800 ? true : false

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeValue(windowSize.width))
  }, [dispatch, windowSize.width])

  return (
    <>
      <HeaderButton responsiveCheck={responsiveCheck} category={category} />
      <HeaderHambuger responsiveCheck={responsiveCheck} category={category} />
    </>
  )
}

export default HeaderContainer;