import * as actionTypes from '../actionTypes';

export const onNumClick = number => ({
  type: actionTypes.FETCH_SHOPS,
  number,
});
export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});
