import React from "react";
import { useTranslation } from "react-i18next";

const NoMatches = () => {
  const { t } = useTranslation();

  return(
    <h1>{t('common.404-page')}</h1>
  )
}

export default NoMatches;