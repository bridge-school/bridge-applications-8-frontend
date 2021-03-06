import React from "react";
import { Formik, Form, Field } from "formik";
import { Translation } from "react-i18next";
import { Container, Label, InputField } from "../../common/forms/form-styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import RenderDyanmicFields from "../../common/forms/dynamic-fields";
import Button from "../../common/button/button";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

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
              questions: [],
              dateOpen: "",
              dateClosed: "",
              dateOfResponse: ""
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

              values.questions.map((field, index) => {
                if (!values.questions[index][`label${index}`]) {
                  errors[`questions.${index}.label${index}`] = t(
                    "admin.create-cohort.form.cohort-application-question-error"
                  );
                }
                if (!values.questions[index][`type${index}`]) {
                  errors[`questions.${index}.type${index}`] = t(
                    "admin.create-cohort.form.cohort-type-question-error"
                  );
                }
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
                  ></Field>
                  <Container flex justify_between>
                    <Container>
                      <Label db>
                        {t("admin.create-cohort.form.date-open")}
                      </Label>
                      <Field
                        name="dateOpen"
                        component={DatePicker}
                        onChange={date => {
                          formProps.setFieldValue("dateOpen", date);
                        }}
                        selected={formProps.values.dateOpen}
                        customInput={<InputField br2 ba bw1 w_100 />}
                      />
                    </Container>
                    <Container>
                      <Label db>
                        {t("admin.create-cohort.form.date-closed")}
                      </Label>
                      <Field
                        name="dateClosed"
                        component={DatePicker}
                        onChange={date => {
                          formProps.setFieldValue("dateClosed", date);
                        }}
                        selected={formProps.values.dateClosed}
                        customInput={<InputField br2 ba bw1 w_100 />}
                      />
                    </Container>
                    <Container>
                      <Label db>
                        {t("admin.create-cohort.form.date-of-response")}
                      </Label>
                      <Field
                        name="dateOfResponse"
                        component={DatePicker}
                        onChange={date => {
                          formProps.setFieldValue("dateOfResponse", date);
                        }}
                        selected={formProps.values.dateOfResponse}
                        customInput={<InputField br2 ba bw1 w_100 />}
                      />
                    </Container>
                  </Container>
                  <H2>
                    {t("admin.create-cohort.form.title-application-questions")}
                  </H2>
                  <div id="new-cohort-applciation">
                    <RenderDyanmicFields
                      formProps={formProps}
                      errors={formProps.errors}
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
