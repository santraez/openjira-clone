export const entriesReducer = (state, action) => {
  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entry] Update-Entry':
      return {
        ...state,
        entries: state.entries.map(entry =>
          entry._id === action.payload._id ? action.payload : entry
        ),
      };
    default:
      return state;
  };
};
