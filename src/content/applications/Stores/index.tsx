
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddStore from './AddStore';
import PageHeader from './PageHeader';
import  Store  from './Store';
import { useState } from 'react';

function ApplicationsTransactions() {

  const [estado, setEstado] = useState(true)

  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader estado={estado} setEstado={setEstado} />
      </PageTitleWrapper>
      {estado
      ? <PageTitleWrapper>
          <Store />
        </PageTitleWrapper>
      : <PageTitleWrapper>
          <AddStore />
        </PageTitleWrapper>
      }
      
      
      
    </>
  );
}

export default ApplicationsTransactions;