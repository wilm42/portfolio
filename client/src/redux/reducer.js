import * as refs from './actions/ref';

const initialState = {
  view: 'home',
};

export default (state=initialState, action) => {
  switch(action.type){
    case refs.PAGE_LOAD:
      return Object.assign({}, state, {
        view: action.view
      });
    default:
      return state;
  }
}