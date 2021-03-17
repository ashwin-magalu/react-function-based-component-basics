import React, { createContext, useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";
import UseCallback from "./components/UseCallback";
import UseEffect from "./components/UseEffect";
import UseEffectFetch from "./components/UseEffectFetch";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import Counter01 from "./CustomHooks/Counter01";
import Counter02 from "./CustomHooks/Counter02";
import DocTitleOne from "./CustomHooks/DocTitleOne";
import DocTitleTwo from "./CustomHooks/DocTitleTwo";
import UserForm from "./CustomHooks/UserForm";
import DataFetchingOne from "./FetchUsingUseReducer/DataFetchingOne";
import DataFetchingTwo from "./FetchUsingUseReducer/DataFetchingTwo";
//import ComponentA from "./Context/ComponentA";
import CounterOne from "./Reducers/CounterOne";
import CounterThree from "./Reducers/CounterThree";
import CounterTwo from "./Reducers/CounterTwo";
import ComponentA from "./ReducerWithContext/ComponentA";
import ComponentB from "./ReducerWithContext/ComponentB";
import ComponentC from "./ReducerWithContext/ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();
export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectFetch /> */}

      {/* <UserContext.Provider value={"Ashwin"}>
        <ChannelContext.Provider value={"Udhyama"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}

      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <Counter01 />
      <Counter02 /> */}
      {/* <UserForm /> */}
    </div>
  );
};

export default App;
