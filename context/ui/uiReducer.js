export const uiReducer = (state, action) => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        isSidebarOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  };
};
