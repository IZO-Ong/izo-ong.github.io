import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { PROJECTS, ACADEMIC_PLAN } from '../constants/data';

interface PortfolioState {
  projects: typeof PROJECTS;
  academicPlan: typeof ACADEMIC_PLAN;
  scrollPositions: Record<string, number>;
  revealedElements: Record<string, boolean>;
}

const initialState: PortfolioState = {
  projects: PROJECTS,
  academicPlan: ACADEMIC_PLAN,
  scrollPositions: {},
  revealedElements: {},
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    saveScrollPosition: (state, action: PayloadAction<{ path: string; y: number }>) => {
      state.scrollPositions[action.payload.path] = action.payload.y;
    },
    setElementVisible: (state, action: PayloadAction<string>) => {
      state.revealedElements[action.payload] = true;
    },
  },
});

export const { saveScrollPosition, setElementVisible } = portfolioSlice.actions;

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;