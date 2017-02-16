const initialState = [{title: 'gilluan', body: 'corpo'}];

const posts = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'LIST_POSTS':
      return [
        {title: 'iu', body: 'app'}
      ];
    default:
      return state
  }
}


export default posts;
