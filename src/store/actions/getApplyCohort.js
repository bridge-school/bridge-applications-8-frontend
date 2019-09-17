import { request } from "../../backend-request";

const getApplyCohortAction = data => ({
  type: 'GET_COHORT',
  data
});


export default cohortId => dispatch => {
  request(`cohorts/${cohortId}`)
    .then( res => res.json())
    .then( json => {
      return dispatch(getApplyCohortAction(json));
    })
}