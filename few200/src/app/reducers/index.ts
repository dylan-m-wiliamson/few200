import * as fromCounter from './counter.reducer';
// This is for TypeScript. It just let's it know what is going on. None of this creates JavaScript
export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.reducer
}
