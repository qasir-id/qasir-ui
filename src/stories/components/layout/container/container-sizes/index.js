// Vendors
import React from 'react';

// Components
import Container from 'components/layout/Container';

export const ContainerSizeXL = () => (
  <>
    <h3>Extra Large</h3>
    <Container maxWidth="xl" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeLG = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Large</h3>
    <Container disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeMD = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Medium</h3>
    <Container maxWidth="md" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeSM = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Small</h3>
    <Container maxWidth="sm" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeXS = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Extra Small</h3>
    <Container maxWidth="xs" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

const ContainerSizes = () => (
  <>
    {ContainerSizeXL()}
    {ContainerSizeLG()}
    {ContainerSizeMD()}
    {ContainerSizeSM()}
    {ContainerSizeXS()}
  </>
);

export default ContainerSizes;
