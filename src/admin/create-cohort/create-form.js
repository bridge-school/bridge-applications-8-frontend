import React from "react";
import { Formik, Form, Field } from "formik";
import { Translation } from "react-i18next";
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
    // const { t } = useTranslation();
    return (
      <Translation>
        {t => (
          <Formik
            initialValues={{
              cohortName: "",
              cohortType: ""
            }}
            validate={values => {
              let errors = {};
              if (!values.cohortName)
                errors.cohortName = t(
                  "admin.create-cohort.form.cohort-name-error"
                );
              if (!values.cohortType)
                errors.cohortType = t(
                  "admin.create-cohort.form.cohort-type-error"
                );
              return errors;
            }}
            onSubmit={this.props.handleSubmit}
            render={formProps => {
              return (
                <Form>
                  <Field
                    name="cohortName"
                    label={t("admin.create-cohort.form.cohort-name-label")}
                    placeholder="Cohort 1"
                    component={CustomInput}
                  />
                  <Field
                    name="cohortType"
                    label={t("admin.create-cohort.form.cohort-type-label")}
                    optionsLabel={t(
                      "admin.create-cohort.form.cohort-type-selector"
                    )}
                    options={[
                      t("admin.create-cohort.form.cohort-type-fe"),
                      t("admin.create-cohort.form.cohort-type-be"),
                      t("admin.create-cohort.form.cohort-type-design")
                    ]}
                    component={CustomSelect}
                  ></Field>
                  <button type="submit" disabled={formProps.isSubmitting}>
                    Submit Form
                  </button>
                </Form>
              );
            }}
          />
        )}
      </Translation>
    );
  }
}
