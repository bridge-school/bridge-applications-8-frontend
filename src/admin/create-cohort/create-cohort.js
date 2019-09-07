import React from "react";
import { useTranslation } from "react-i18next";

const CreateCohort = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("admin.create-cohort.create-new-cohort-application-form")}</h1>
      <p>Place holder for form</p>
    </>
  );
}

export default CreateCohort;