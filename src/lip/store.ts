import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from '@/lip/features/Login'; 
import RegisterSlice from '@/lip/features/LoginThinkThunk'
const store = configureStore({
    reducer: {
      login: LoginSlice,
      [RegisterSlice.reducerPath]: RegisterSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RegisterSlice.middleware)
  });
  
  export type RootState = ReturnType<typeof store.getState> & {
    [RegisterSlice.reducerPath]: ReturnType<typeof RegisterSlice.reducer>;
};
  export type AppDispatch = typeof store.dispatch;
  
  export default store;
