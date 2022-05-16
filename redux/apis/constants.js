const APPS = {
  application: {
    dev: 'ksbmu6q3fg',
    prod: '8sz7a103n9'
  }
};

export const getStage = () => {
  // const currentUrl = window.document?.location.href;
  // if (currentUrl?.includes('dev.h3mart.com') || currentUrl?.includes('localhost')) {
  //   return 'dev';
  // }
  return 'prod';
};

const stage = getStage();

const getRequestUrl = (stg, appId) => `https://${appId}.execute-api.ap-south-1.amazonaws.com/${stg}`;

export default {
  CATEGORY: `${getRequestUrl(stage, APPS.application[stage])}/category`,
};
