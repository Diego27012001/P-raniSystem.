import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddEmployee from './AddEmployee';
import { useState } from 'react';
import Employee from './Employee';

function ApplicationsTransactions() {
  const [opcion, setopcion] = useState(true);

  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader setOpcion={setopcion} />
      </PageTitleWrapper>
      {opcion ? (
        <PageTitleWrapper>
          <Employee />
        </PageTitleWrapper>
      ) : (
        <PageTitleWrapper>
          <AddEmployee />
        </PageTitleWrapper>
      )}
    </>
  );
}

export default ApplicationsTransactions;

/*
<Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>*/
