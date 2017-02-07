const posts = (state = [], action) => {
  switch (action.type) {
    case 'TEST':
      console.log('funfou')
      return state;
    default:
      return state
  }
}


export default posts
