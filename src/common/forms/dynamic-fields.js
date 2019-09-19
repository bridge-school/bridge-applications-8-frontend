import React from "react";
import { Field, FieldArray } from "formik";
import { useTranslation } from "react-i18next";
import CustomInput from "../../common/forms/custom-input";
import CustomSelect from "../../common/forms/custom-select";
import CustomCheckbox from "../../common/forms/custom-checkbox";
import QuestionTypeExample from "./custom-question-example";
import Button from "../../common/button/button";
import { Row, Container } from "./form-styles";

const RenderDyanmicFields = ({ formProps, errors, children }) => {
  const { t } = useTranslation();
  return (
    <FieldArray
      name="questions"
      render={arrayHelpers => (
        <>
          {formProps.values.questions.length > 0
            ? formProps.values.questions.map((fieldItem, index) => (
                <Container
                  className={`field-group`}
                  data-group-number={`${index}`}
                  key={index}
                >
                  <Row flex key={index}>
                    <Field
                      name={`questions.${index}.label`}
                      label={`${t(
                        "admin.create-cohort.form.question"
                      )} #${index}`}
                      error={errors[`questions.${index}.label`]}
                      component={CustomInput}
                    />
                    <Field
                      name={`questions.${index}.type`}
                      label={`${t(
                        "admin.create-cohort.form.question"
                      )} #${index} ${t("admin.create-cohort.form.type")}`}
                      options={[
                        t("admin.create-cohort.form.short-answer"),
                        t("admin.create-cohort.form.paragraph"),
                        t("admin.create-cohort.form.dropdown"),
                        t("admin.create-cohort.form.checkboxes")
                      ]}
                      error={errors[`questions.${index}.type`]}
                      component={CustomSelect}
                    />
                    <Field
                      name={`questions.${index}.required`}
                      label={t("admin.create-cohort.form.isRequired")}
                      component={CustomCheckbox}
                    />
                  </Row>
                  <div id={`options${index}`}>
                    {formProps.values.questions[index]["type"] ? (
                      formProps.values.questions[index]["type"] ===
                        "short-answer" ||
                      formProps.values.questions[index]["type"] ===
                        "paragraph" ? (
                        <QuestionTypeExample
                          questionType={
                            formProps.values.questions[index]["type"]
                          }
                        />
                      ) : (
                        <Field
                          name={`questions.${index}.options`}
                          label={`${t(
                            "admin.create-cohort.form.anwser-options"
                          )}`}
                          component={CustomInput}
                        />
                      )
                    ) : null}
                  </div>
                </Container>
              ))
            : null}
          <Button
            type="button"
            size="feature"
            color="white"
            disabled={formProps.values.isSubmitting}
            eventHandler={() =>
              arrayHelpers.push({
                [`label`]: "",
                [`type`]: "",
                [`required`]: "",
                [`options`]: []
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
