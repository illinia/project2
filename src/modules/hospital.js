import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as hospitalAPI from '../lib/api/hospital';

const INITIALIZE_HOSPITAL = createRequestActionTypes('hospital/INITIALIZE_HOSPITAL')
const [
  LIST_HOSPITAL,
  LIST_HOSPITAL_SUCCESS,
  LIST_HOSPITAL_FAILURE,
] = createRequestActionTypes('hospital/LIST_HOSPITAL')
const SEARCH_CHANGE = createRequestActionTypes('hospital/SEARCH_CHANGE')

export const initializeSearch = createAction(INITIALIZE_HOSPITAL);

export const listHospital = createAction(
  LIST_HOSPITAL,
  ({ pageno, pagenum, type, keyword }) => ({ pageno, pagenum, type, keyword })
)

const listHospitalSaga = createRequestSaga(LIST_HOSPITAL, hospitalAPI.listHospitals)
export function* hospitalSaga() {
  yield takeLatest(LIST_HOSPITAL, listHospitalSaga)
}

export const onSearchChange = createAction(
  SEARCH_CHANGE,
  ({ key, value }) => ({
    key, value
  })
)

const initialState = {
  list: null,
  error: null,
  type: '',
  keyword: '',
}

const hospital = handleActions(
  {
    [INITIALIZE_HOSPITAL]: state => initialState,
    [LIST_HOSPITAL_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list
    }),
    [LIST_HOSPITAL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    }),
    [SEARCH_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    })
  },
  initialState,
)

export default hospital;