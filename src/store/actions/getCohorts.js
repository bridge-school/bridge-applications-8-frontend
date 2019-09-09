import { request } from "../../backend-request";

const getCohortsAction = data => ({
  type: 'GET_COHORTS',
  data
});


export default () => dispatch => {
  request("cohorts")
    .then( res => res.json())
    .then( json => {
      return dispatch(getCohortsAction(json.data));
    })
}