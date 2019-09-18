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
  text-transform: capitalize;
  ${tachyons}
`;

const CreateApplicantForm = ({cohort}) => {
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
            </Form>
          )
        }}
      />
      {cohort.questions.map(question => {
        return (
          <div>
            <label>{question.label}</label>
            <p>{question.type}</p>
            <input type={question.type} />
            <p>{question.required}</p>
          </div>
        )
      })}
    </>
  )
}

export default CreateApplicantForm;
