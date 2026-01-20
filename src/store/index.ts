import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PROJECTS, ACADEMIC_PLAN } from '../constants/data';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: PROJECTS,
    academicPlan: ACADEMIC_PLAN,
  },
  reducers: {}
});

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;