const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      //alert('add post');
      return state;
    default:
      return state
  }
}


export default posts;
