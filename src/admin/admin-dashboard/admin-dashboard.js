import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import getCohorts from "../../store/actions/getCohorts";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import LinkButton from "../../common/button/link";
import CohortCard from "../../common/cohort-card/cohort-card";

const renderCohortsList = ({ cohorts, loading }) => {
  if (loading) return "Loading...";

  return cohorts.map(cohort => {
    return (
      <CohortCard
        key={cohort.name}
        name={cohort.name}
        type={cohort.type}
      ></CohortCard>
    );
  });
};

const AdminDashboard = props => {
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
      <Helmet>
        <title>{t("admin.dashboard.cohort-application-form")}</title>
        <meta
          name="description"
          content={t("admin.dashboard.cohort-application-form-admin")}
        />
      </Helmet>
      <HeadWrapper flex justify_between>
        <H1 di>{t("admin.dashboard.cohort-application-form")}</H1>
        <LinkButton color="green" size="large" link="/create-cohort">
          {t("admin.dashboard.create-application-group")}
        </LinkButton>
      </HeadWrapper>
      <CohortCardWrapper>{renderCohortsList(props)}</CohortCardWrapper>
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
)(AdminDashboard);
