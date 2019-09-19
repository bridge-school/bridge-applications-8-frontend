import React from "react";
import { useTranslation } from "react-i18next";
import { InputField, Label, Container } from "./form-styles";

const QuestionTypeExample = ({ questionType }) => {
  const { t } = useTranslation();
  return (
    <Container db mv2>
      <Label db>{`${t("admin.create-cohort.form.anwser-options")}`}</Label>
      <InputField
        br2
        ba
        bw1
        mt2
        w_100
        type="text"
        value=""
        placeholder={questionType}
        readOnly
      />
    </Container>
  );
};

export default QuestionTypeExample;
