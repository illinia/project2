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

export const listHospital = createAction(
  LIST_HOSPITAL,
  ({ pageno, pagenum }) => ({ pageno, pagenum })
)

const listHospitalSaga = createRequestSaga(LIST_HOSPITAL, hospitalAPI.listHospitals)
export function* hospitalSaga() {
  yield takeLatest(LIST_HOSPITAL, listHospitalSaga)
}

const initialState = {
  list: null,
  error: null,
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
    })
  },
  initialState,
)

export default hospital;