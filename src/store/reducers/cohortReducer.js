const initialState = {
  loading: true,
  data: []
}

const cohort = (state = initialState, { type, data }) => {

  switch (type) {
    case 'GET_COHORT':
      return {
        ...state,
        loading: false,
        data
      }

    default:
      return state;
  }
}

export default cohort;