// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

// action creator : action value를 return하는 함수
// 더 효율적으로 리팩토링! 하드코딩이 사라진다!
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  // console.log("payload", payload)
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값(state)
const initialState = {
  number: 0,
};

// 리듀서 : 'stats'에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수
// input : state와 action
// switch 문에 action 객체 type에 따라 동작하게 됨
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload.number,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload.number,
      };
    default:
      return state;
  }
};

export default counter;
