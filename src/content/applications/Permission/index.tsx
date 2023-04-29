import { Backdrop, Fade, Modal } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddPermission from './AddPermission';
import PageHeader from './PageHeader';
import Permission from './Permission';

function ApplicationsTransactions() {
  const [estado, setEstado] = useState(true);
  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader estado={estado} setEstado={setEstado}/>
      </PageTitleWrapper>

      {estado ? (
        <PageTitleWrapper>
          <Permission />
        </PageTitleWrapper>
      ) : (
        <PageTitleWrapper>
          <AddPermission />
        </PageTitleWrapper>
      )}
    </>
  );
}

export default ApplicationsTransactions;
