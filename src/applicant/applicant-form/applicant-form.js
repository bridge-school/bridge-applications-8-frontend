import React, { useEffect } from "react";
import { connect } from "react-redux";
import getApplyCohort from "../../store/actions/getApplyCohort";
// import { Formik, Form, Field } from "formik";
// import { Container, Label, InputField } from "../../common/forms/form-styles";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import CustomInput from "../../common/forms/custom-input";
// import CustomSelect from "../../common/forms/custom-select";
// import RenderDyanmicFields from "../../common/forms/dynamic-fields";
// import Button from "../../common/button/button";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const renderApplicationForm = ({ cohort, loading }) => {
  console.log("render form: ", cohort)
  if (loading) return "Loading...";

  return (
    <>
      <h2>{cohort.name}</h2>
      {cohort.questions.map(question => {
        return (
        <div>
          <label>{question.label}</label>
          <p>{question.type}</p>
          <input type={question.type}/>
          <p>{question.required}</p>
        </div>
        )
      })}
    </>
  )
};


const ApplicantForm = props => {
  const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2.2rem;
    font-weight: bold;
    ${tachyons}
  `;

  const { t } = useTranslation();

  useEffect(() => {
    const { getApplyCohort } = props;
    getApplyCohort(props.match.params.id);
    // we only want to get cohorts on first load of Admin Dashboard
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <H1>
        {t("admin.create-cohort.form.title-application-questions")}
      </H1>
      {renderApplicationForm(props)}
    </>
  );
};


const mapStateToProps = state => {
  return {
    cohort: state.cohort.data,
    loading: state.cohort.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getApplyCohort: cohortId => dispatch(getApplyCohort(cohortId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantForm);
