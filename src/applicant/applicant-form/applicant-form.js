import React from "react";
import { Formik, Form, Field } from "formik";
import { Container, Label, InputField } from "../../common/forms/form-styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import RenderDyanmicFields from "../../common/forms/dynamic-fields";
import Button from "../../common/button/button";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";


const ApplicantForm = (props) => {
  const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2.2rem;
    font-weight: bold;
    ${tachyons}
  `;

  const { t } = useTranslation();

  return (
    <>
      <H1>
        {t("admin.create-cohort.form.title-application-questions")}
      </H1>
      <p>Fetching {props.match.params.id}</p>
    </>
  );
};

export default ApplicantForm;