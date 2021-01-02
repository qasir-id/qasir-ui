// Vendors
import React from 'react';

// Components
import Container from 'components/layout/Container';

export const ContainerFluid = () => (
  <>
    <h3>Fluid</h3>
    <Container disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerFixed = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Fixed</h3>
    <Container maxWidth="sm" fixed disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

const ContainerTypes = () => (
  <>
    {ContainerFluid()}
    {ContainerFixed()}
  </>
);

export default ContainerTypes;
