import React, { useEffect } from "react";
import { connect } from "react-redux";
import getApplyCohort from "../../store/actions/getApplyCohort";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CreateApplicantForm from '../create-form/create-applicant-form';
import { Helmet } from "react-helmet";


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
    <Helmet>
        <title>{t("applicant.apply-for-bridge")}</title>
          <meta
          name="description"
          content={t("applicant.apply-page-meta-description")}
        />
      <H1>{t("admin.create-cohort.form.title-application-questions")}</H1>
      {props.loading ?
          <p>Loading.....</p>
        :
        <CreateApplicantForm cohort={props.cohort}/>
      }
     </Helmet>
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
