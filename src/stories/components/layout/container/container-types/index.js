// Vendors
import React from 'react';

// Components
import Container from 'components/layout/Container';

const ContainerTypes = () => {
  return (
    <>
      <h3>Fluid</h3>
      <Container disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>

      <h3 style={{ marginTop: 30 }}>Fixed</h3>
      <Container maxWidth="sm" fixed disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>
    </>
  );
};

export default ContainerTypes;
