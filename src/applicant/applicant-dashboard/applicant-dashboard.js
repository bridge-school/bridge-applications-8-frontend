import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import getCohorts from "../../store/actions/getCohorts";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import LinkButton from "../../common/button/link";
import CohortCard from "../../common/cohort-card/cohort-card";
import ApplicantForm from "../applicant-form/applicant-form";

const renderCohortsList = ({ cohorts, loading }) => {
  if (loading) return "Loading...";

  return cohorts.map(cohort => {
    return (
      <CohortCard
        key={cohort.name}
        name={cohort.name}
        type={cohort.type}
        link={`/apply/${cohort.id}`}
      ></CohortCard>
    );
  });
};

const ApplicantDashboard = props => {
  useEffect(() => {
    const { getCohorts } = props;
    getCohorts();
    // we only want to get cohorts on first load of Admin Dashboard
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const { t } = useTranslation();
  const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2.2rem;
    font-weight: bold;
    ${tachyons}
  `;

  const Wrapper = styled.div`
    ${tachyons}
  `;

  const HeadWrapper = styled.section`
    ${tachyons}
  `;

  const CohortCardWrapper = styled.section`
    margin-top: 3.5rem;
    ${tachyons}
  `;

  return (
    <Wrapper flex flex_column>
      <HeadWrapper flex justify_between>
        <H1 di>{t("admin.dashboard.cohort-application-form")}</H1>
      </HeadWrapper>
      <CohortCardWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={ApplicantDashboard}/>
            <Route path="/apply/:id" component={ApplicantForm}/>
          </Switch>
        </Router>
        {renderCohortsList(props)}
      </CohortCardWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    cohorts: state.cohorts.data,
    loading: state.cohorts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCohorts: () => dispatch(getCohorts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantDashboard);
