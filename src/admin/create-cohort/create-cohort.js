import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import CreateForm from "./create-form";

const CreateCohort = () => {
  const { t } = useTranslation();
  
  const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    ${tachyons}
  `;

  return (
    <>
      <Helmet>
        <title>Create New Cohort Application Form</title>
        <meta name="description" content="Create New Cohort Application Form for admin" />
      </Helmet>
      <H1>{t("admin.create-cohort.create-new-cohort-application-form")}</H1>
      <CreateForm />
    </>
  );
};

export default CreateCohort;
