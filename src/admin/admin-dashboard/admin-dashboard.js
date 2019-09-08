import React from "react";
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Button from '../../common/button/button';
import CohortCard from '../../common/cohort-card/cohort-card';

const AdminDashboard = () => {
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

  return(
    <Wrapper flex flex_column>
      <HeadWrapper flex justify_between>
        <H1 di>{t('admin.dashboard.cohort-application-form')}</H1>
        <Button color="green" size="large">{t('admin.dashboard.create-application-group')}</Button>
      </HeadWrapper>
      <CohortCardWrapper>
          <CohortCard name="Cohort 0" type="frontend development"></CohortCard>
          <CohortCard name="Cohort 7" type="design"></CohortCard>
          <CohortCard name="Cohort 2" type="backend development"></CohortCard>
      </CohortCardWrapper>
    </Wrapper>
  )
}

export default AdminDashboard;