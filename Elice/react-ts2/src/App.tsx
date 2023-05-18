import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterInitialState = {
  value: 20,
  step: 2,
  loading: false,
}; //시작금액
const counterReducers = {
  UP: (state: any) => {
    state.value = state.value + 1;
  },
  // @ts-ignore
  STEP: (state: any, action) => {
    state.step = action.payload;
  },
}; //회계담당자
const counterRead = createAsyncThunk('counter/read', async () => {
  const res = await fetch('http://localhost:9999/counter/');
  const result = await res.json();
  return result;
});
const counterChange = createAsyncThunk(
  'counter/change',
  async (value: number) => {
    const res = await fetch('http://localhost:9999/counter/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    const result = await res.json();
    return result;
  }
);
const counterExtraReducers = (builder: any) => {
  builder
    .addCase(counterRead.pending, (state: any) => {
      console.log('loading...');
      state.loading = true;
    })
    // @ts-ignore
    .addCase(counterRead.fulfilled, (state: any, action) => {
      state.loading = false;
      state.value = action.payload.value;
    })
    .addCase(counterChange.pending, (state: any) => {
      state.loading = true;
    })
    .addCase(
      counterChange.fulfilled,
      (state: any, action: PayloadAction<number>) => {
        state.loading = false;
        // @ts-ignore
        state.value = action.payload.value;
      }
    );
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: counterReducers,
  extraReducers: counterExtraReducers,
}); //지점1(지점 명:counter)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
}); //은행본사 , counter지점을 은행에 등록함

function Counter1() {
  const count = useSelector((state: any) => state.counter.value);
  const step = useSelector((state: any) => state.counter.step);
  const loading = useSelector((state: any) => state.counter.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(counterRead());
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Counter</h1>
      <input
        type="number"
        value={step}
        onChange={(evt) => {
          const step = Number(evt.target.value);
          // @ts-ignore
          dispatch(counterSlice.actions.STEP(step));
        }}
      />
      <button
        onClick={() => {
          const action = counterSlice.actions.UP();
          dispatch(action);
          //@ts-ignore
          dispatch(counterChange(count + step));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}
function Counter2() {
  const count = useSelector((state: any) => state.counter.value);
  return <div>{count}</div>;
}
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
      </div>
    </Provider>
  );
}

export default App;
