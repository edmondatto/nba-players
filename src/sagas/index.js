import { takeLatest, all } from 'redux-saga/effects';
import { GET_PLAYER } from '../actions';
import {retrievePlayer} from "./playerSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PLAYER, retrievePlayer)
  ]);
}