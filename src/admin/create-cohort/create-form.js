import React from "react";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";

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
          cohortType: ""
        }}
        validate={values => {
          let errors = {};
          if (!values.cohortName)
            errors.cohortName = "You must input a cohort name";
          if (!values.cohortType)
            errors.cohortType = "You must select a cohort type";
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
              <Field
                name="cohortType"
                label="Cohort Type"
                component={CustomSelect}
              ></Field>
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
