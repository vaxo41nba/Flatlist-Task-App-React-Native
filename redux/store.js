import { configureStore } from '@reduxjs/toolkit';

import reducer from '../redux/rootReducer';

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
