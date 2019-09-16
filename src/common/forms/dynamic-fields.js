import React from "react";
import { Field, FieldArray } from "formik";
import { useTranslation } from "react-i18next";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import CustomCheckbox from "../../common/forms/custom-checkbox";
import Button from "../../common/button/button";
import { Row } from "./form-styles";

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
                    name={`appQuestions.${index}.question${index}`}
                    label={`${t(
                      "admin.create-cohort.form.question"
                    )} #${index}`}
                    component={CustomInput}
                  />
                  <Field
                    name={`appQuestions.${index}.questionType${index}`}
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
                    name={`appQuestions.${index}.questionRequired${index}`}
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
                [`question${formProps.values.appQuestions.length}`]: "",
                [`questionType${formProps.values.appQuestions.length}`]: "",
                [`questionRequired${formProps.values.appQuestions.length}`]: ""
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
