import * as actionTypes from '../actionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
  shops: [
    {
      name: 'JET SET',
      inStoreImage: 'https://s3-ap-northeast-1.amazonaws.com/mond-reutte/sasuly/images/shops/047.jpg',
      owner: '',
      url: '',
    },
    {
      name: 'UFI',
      inStoreImage: 'https://s3-ap-northeast-1.amazonaws.com/mond-reutte/sasuly/images/shops/078.jpg',
      owner: '',
      url: '',
    },
    {
      name: 'HEIWA',
      inStoreImage: 'https://s3-ap-northeast-1.amazonaws.com/mond-reutte/sasuly/images/shops/046.jpg',
      owner: '',
      url: '',
    },
  ],
};

const sasuly = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: (state.inputValue * 10) + action.number,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true,
    };
  }
  return state;
};

export default sasuly;
