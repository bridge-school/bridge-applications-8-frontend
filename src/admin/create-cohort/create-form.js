import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Translation } from "react-i18next";
import tachyons from "styled-components-tachyons";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import CustomCheckbox from "../../common/forms/custom-checkbox";
import Button from "../../common/button/button";
import styled from "styled-components";

const Row = styled.div`
  ${tachyons}

  > div {
    &:first-of-type {
      flex: 1;
      margin-right: 2rem;
    }

    &:last-of-type {
      margin-left: 2rem;
    }
  }
`;

const H2 = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  ${tachyons}
`;

export default class CreateForm extends React.Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    //Dispatch submit action
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    return;
  };

  render() {
    return (
      <Translation>
        {t => (
          <Formik
            initialValues={{
              cohortName: "",
              cohortType: "",
              appQuestions: []
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
              values.appQuestions.map((field, index) => {
                if (!values[`question${index}`])
                  errors[`question${index}`] = t(
                    "admin.create-cohort.form.cohort-application-question-error"
                  );
                if (!values[`questionType${index}`])
                  errors[`questionType${index}`] = t(
                    "admin.create-cohort.form.cohort-type-question-error"
                  );
                return errors;
              });

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
                  />
                  <H2>
                    {t("admin.create-cohort.form.title-application-questions")}
                  </H2>
                  <div id="new-cohort-applciation">
                    <FieldArray
                      name="appQuestions"
                      render={arrayHelpers => (
                        <>
                          {formProps.values.appQuestions.length > 0
                            ? formProps.values.appQuestions.map(
                                (fieldItem, index) => (
                                  <Row flex key={index}>
                                    <Field
                                      name={`question${index}`}
                                      label={`${t(
                                        "admin.create-cohort.form.question"
                                      )} #${index}`}
                                      component={CustomInput}
                                    />

                                    <Field
                                      name={`questionType${index}`}
                                      label={`${t(
                                        "admin.create-cohort.form.question"
                                      )} #${index} ${t(
                                        "admin.create-cohort.form.type"
                                      )}`}
                                      options={[
                                        t("admin.create-cohort.form.input"),
                                        t("admin.create-cohort.form.dropdown"),
                                        t("admin.create-cohort.form.checkbox")
                                      ]}
                                      component={CustomSelect}
                                    />
                                    <Field
                                      name={`questionRequired${index}`}
                                      label={t(
                                        "admin.create-cohort.form.isRequired"
                                      )}
                                      component={CustomCheckbox}
                                    />
                                  </Row>
                                )
                              )
                            : null}
                          <Button
                            type="button"
                            size="feature"
                            color="white"
                            disabled={formProps.values.isSubmitting}
                            eventHandler={() =>
                              arrayHelpers.push({
                                [`question${formProps.values.appQuestions
                                  .length + 1}`]: "",
                                [`questionType${formProps.values.appQuestions
                                  .length + 1}`]: "",
                                [`questionRequired${formProps.values
                                  .appQuestions.length + 1}`]: ""
                              })
                            }
                          >
                            {t("admin.create-cohort.form.add-field-button")}
                          </Button>
                        </>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="feature"
                    disabled={formProps.isSubmitting}
                  >
                    {t("admin.create-cohort.form.create-app-group")}
                  </Button>
                </Form>
              );
            }}
          />
        )}
      </Translation>
    );
  }
}
