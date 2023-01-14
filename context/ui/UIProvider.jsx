import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE = {
  isSidebarOpen: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSidebar = () => {
    dispatch({
      type: 'UI - Open Sidebar',
    });
  };
  const closeSidebar = () => {
    dispatch({
      type: 'UI - Close Sidebar',
    });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
