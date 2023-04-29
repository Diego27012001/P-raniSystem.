
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import ReportEmployee from './ReportEmployee';

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
        <ReportEmployee />
      </PageTitleWrapper>
      
    </>
  );
}

export default ApplicationsTransactions;