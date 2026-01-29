import { createContext, useContext, useReducer } from "react";
import { defaultState, reducer } from "../reducer/reserveReducer";

const ReserveStateContext = createContext();
const ReserveDispatchContext = createContext();

export default function ReserveProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ReserveStateContext.Provider value={state}>
      <ReserveDispatchContext.Provider value={dispatch}>
        {children}
      </ReserveDispatchContext.Provider>
    </ReserveStateContext.Provider>
  )
}

export function useReserveState() {
  const ctx = useContext(ReserveStateContext);
  if (!ctx) throw new Error("useReserveState must be used inside ReserveProvider");
  return ctx;
}

export function useReserveDispatch() {
  const ctx = useContext(ReserveDispatchContext);
  if (!ctx) throw new Error("useReserveDispatch must be used inside ReserveProvider");
  return ctx;
}