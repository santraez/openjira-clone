import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE = {
  isSidebarOpen: false,
  isAddingEntry: false,
  isDragging: false,
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
  const setIsAddingEntry = (isAdding) => {
    dispatch({
      type: 'UI - Set isAddingEntry',
      payload: isAdding,
    });
  };
  const startDragging = () => {
    dispatch({
      type: 'UI - Start Dragging',
    });
  };
  const stopDragging = () => {
    dispatch({
      type: 'UI - Stop Dragging',
    });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
        startDragging,
        stopDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
