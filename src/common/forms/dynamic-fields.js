import React from "react";
import { Field, FieldArray } from "formik";
import { useTranslation } from "react-i18next";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import CustomCheckbox from "../../common/forms/custom-checkbox";
import Button from "../../common/button/button";
import { Row } from "./form-styles";

const RenderDyanmicFields = ({ formProps, errors }) => {
  const { t } = useTranslation();
  return (
    <FieldArray
      name="questions"
      render={arrayHelpers => (
        <>
          {formProps.values.questions.length > 0
            ? formProps.values.questions.map((fieldItem, index) => (
                <Row flex key={index}>
                  <Field
                    name={`questions.${index}.label${index}`}
                    label={`${t(
                      "admin.create-cohort.form.question"
                    )} #${index}`}
                    error={errors[`questions.${index}.label${index}`]}
                    component={CustomInput}
                  />
                  <Field
                    name={`questions.${index}.type${index}`}
                    label={`${t(
                      "admin.create-cohort.form.question"
                    )} #${index} ${t("admin.create-cohort.form.type")}`}
                    options={[
                      t("admin.create-cohort.form.short-answer"),
                      t("admin.create-cohort.form.paragraph"),
                      t("admin.create-cohort.form.dropdown"),
                      t("admin.create-cohort.form.checkboxes")
                    ]}
                    error={errors[`questions.${index}.type${index}`]}
                    component={CustomSelect}
                  />
                  <Field
                    name={`questions.${index}.required${index}`}
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
                [`label${formProps.values.questions.length}`]: "",
                [`type${formProps.values.questions.length}`]: "",
                [`required${formProps.values.questions.length}`]: ""
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
