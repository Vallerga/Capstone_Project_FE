import { combineReducers, configureStore } from '@reduxjs/toolkit'
import estimationReducer from '../reducer'
import questionaryReducer from '../reducer/questionaryReducer';
import security from '../reducer/security';

const rootReducer = combineReducers({
  estimation: estimationReducer,
  questionary: questionaryReducer,
  security: security
});

const store = configureStore({
  reducer: rootReducer,
})

export default store
