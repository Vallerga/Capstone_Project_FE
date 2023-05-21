import { combineReducers, configureStore } from '@reduxjs/toolkit'
import estimationReducer from '../reducer'
import questionaryReducer from '../reducer/questionaryReducer';

const rootReducer = combineReducers({
  estimation: estimationReducer,
  questionary: questionaryReducer,
});

const store = configureStore({
  reducer: rootReducer,
})

export default store
