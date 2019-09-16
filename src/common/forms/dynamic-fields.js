import React from "react";
import { Field, FieldArray } from "formik";
import { useTranslation } from "react-i18next";
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

const RenderDyanmicFields = ({ formProps }) => {
  const { t } = useTranslation();
  return (
    <FieldArray
      name="appQuestions"
      render={arrayHelpers => (
        <>
          {formProps.values.appQuestions.length > 0
            ? formProps.values.appQuestions.map((fieldItem, index) => (
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
                    )} #${index} ${t("admin.create-cohort.form.type")}`}
                    options={[
                      t("admin.create-cohort.form.input"),
                      t("admin.create-cohort.form.dropdown"),
                      t("admin.create-cohort.form.checkbox")
                    ]}
                    component={CustomSelect}
                  />
                  <Field
                    name={`questionRequired${index}`}
                    label={t("admin.create-cohort.form.isRequired")}
                    component={CustomCheckbox}
                  />
                </Row>
              ))
            : null}
          <Button
            type="button"
            size="feature"
            color="white"
            disabled={formProps.values.isSubmitting}
            eventHandler={() =>
              arrayHelpers.push({
                [`question${formProps.values.appQuestions.length + 1}`]: "",
                [`questionType${formProps.values.appQuestions.length + 1}`]: "",
                [`questionRequired${formProps.values.appQuestions.length +
                  1}`]: ""
              })
            }
          >
            {t("admin.create-cohort.form.add-field-button")}
          </Button>
        </>
      )}
    />
  );
};

export default RenderDyanmicFields;
