import React from "react";
import { useTranslation } from "react-i18next";
import CreateForm from "./create-form";

const CreateCohort = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("admin.create-cohort.create-new-cohort-application-form")}</h1>
      <CreateForm />
    </>
  );
};

export default CreateCohort;
