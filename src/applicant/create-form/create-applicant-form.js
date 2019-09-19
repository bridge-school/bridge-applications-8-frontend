import React from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SuccessPage from '../success-page/success-page';
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import CustomCheckbox from "../../common/forms/custom-checkbox";
import Button from "../../common/button/button";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const H2 = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  text-transform: capitalize;
  ${tachyons}
`;

const fieldComponents = {
  checkbox: CustomCheckbox,
  dropdown: CustomSelect,
  text: CustomInput
};

const CreateApplicantForm = ({cohort}) => {
  const { t } = useTranslation();
  return (
    <>
      <H2>{cohort.type} {cohort.name}</H2>

      <Formik
        initialValues={{
          questions: cohort.questions,
        }}
        render={ formProps => {
          return (
            <Form>
              <Field
                name="fullName"
                label="Full Name"
                component={CustomInput}
              />
              <Field
                name="email"
                label="Email"
                component={CustomInput}
              />
              {formProps.values.questions.map( q => {

                if (q.type === "dropdown") {
                  return (
                    <Field
                      name={q.label}
                      label={q.label}
                      component={fieldComponents[q.type]}
                      optionsLabel="-select-"
                      options={q.options}
                    />
                  )
                } else {
                  return (
                    <Field
                      name={q.label}
                      label={q.label}
                      component={fieldComponents[q.type]}
                    />
                  )
                }
              })}
              <Router>
                <Switch>
                  <Route
                    exact path="/success"
                    component={SuccessPage}
                    meow="meow"
                  />
                </Switch>
              </Router>
              <Link to={{
                pathname: '/success',
                state: {
                  cohort: cohort
                }
              }}>
                <Button
                  size="feature"
                >
                  {t("applicant.success")}
                </Button>
              </Link>
            </Form>
          )
        }}
      />
    </>
  )
}

export default CreateApplicantForm;
