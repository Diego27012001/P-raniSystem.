
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import  Report  from './Report';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <PageTitleWrapper>
        <Report />
      </PageTitleWrapper>
      
    </>
  );
}

export default ApplicationsTransactions;