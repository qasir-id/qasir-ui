// Vendors
import React from 'react';

// Components
import Container from 'components/layout/Container';

const ContainerSizes = () => {
  return (
    <>
      <h3 style={{ marginTop: 30 }}>Extra Large</h3>
      <Container maxWidth="xl" disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>

      <h3>Large</h3>
      <Container disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>

      <h3 style={{ marginTop: 30 }}>Medium</h3>
      <Container maxWidth="md" disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>

      <h3 style={{ marginTop: 30 }}>Small</h3>
      <Container maxWidth="sm" disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>

      <h3 style={{ marginTop: 30 }}>Extra Small</h3>
      <Container maxWidth="xs" disableGutters>
        <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
      </Container>
    </>
  );
};

export default ContainerSizes;
