const initialState = {
  loading: true,
  data: []
}

const cohorts =  (state = initialState, { type, data }) => {

  switch (type) {
    case 'GET_COHORTS':
      return {
        ...state,
        loading: false,
        data
      }

    default:
      return state;
  }
}

export default cohorts;