import {ActionConst} from 'react-native-router-flux';
import im from 'immutable';
const initialState = im.fromJS({
  scene: {},
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return state.set('scene', im.fromJS(action.scene));
    default:
      return state;
  }
}