import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomInput from "../../common/forms/custom-input";

export default class CreateForm extends React.Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    //Dispatch submit action
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    return;
  };

  render() {
    return (
      <Formik
        initialValues={{
          cohortName: "",
          cohorttype: ""
        }}
        validate={values => {
          let errors = {};
          if (!values.cohortName)
            errors.cohortName = "You must input a cohort name";
          if (!values.cohorttype)
            errors.cohorttype = "You must select a cohort type";
          return errors;
        }}
        onSubmit={this.props.handleSubmit}
        render={formProps => {
          return (
            <Form>
              <Field
                name="cohortName"
                label="Cohort Name"
                placeholder="Cohort 1"
                component={CustomInput}
              />
              <ErrorMessage name="cohorttype" />
              <Field name="cohorttype" component="select">
                <option value="">Select Cohort Type</option>
                <option value="frontend">Front End</option>
                <option value="backend">Back End</option>
                <option value="productdesign">Product Design</option>
              </Field>
              <button type="submit" disabled={formProps.isSubmitting}>
                Submit Form
              </button>
            </Form>
          );
        }}
      />
    );
  }
}
