const INITIAL_STATE = {
  users: [],
  currentUser: {},
  loading: true,
  modalVisible: false,
};

export default (state = INITIAL_STATE, action) => {
  const { users, currentUser, loading, modalVisible } = action;
  switch (action.type) {
    case 'SAVE_USERS':
      return { ...state, users };
    case 'SET_CURRENT_USER':
      return { ...state, currentUser };
    case 'SET_LOADING':
      return { ...state, loading };
    case 'SET_MODAL_VISIBLE':
      return { ...state, modalVisible };
    default:
      return state;
  }
};
