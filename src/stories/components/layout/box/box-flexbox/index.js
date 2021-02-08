// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  mb: 1,
  p: 1,
};

export const BoxFlex = () => (
  <>
    <h3>Flex</h3>
    <Box display="flex" {...defaultProps}>
      I'm a flexbox container!
    </Box>
  </>
);

export const BoxFlexDirection = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Flex Direction</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
      <Box display="flex" flexDirection="row-reverse" {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexWrap = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Flex Wrap</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" flexWrap="nowrap" css={{ maxWidth: 300 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 4
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 5
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 6
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" css={{ maxWidth: 300 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 4
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 5
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 6
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexJustifyContent = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Justify Content</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" justifyContent="flex-start" {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexAlignItems = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Align Items</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" alignItems="flex-start" css={{ height: 100 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-end" css={{ height: 100 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
      <Box display="flex" alignItems="center" css={{ height: 100 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexAlignContent = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Align Content</h3>
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        css={{ maxWidth: 300, height: 200 }}
        {...defaultProps}
      >
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-end"
        css={{ maxWidth: 300, height: 200 }}
        {...defaultProps}
      >
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexOrder = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Order</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" {...defaultProps}>
        <Box p={1} order={2} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} order={3} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} order={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexGrow = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Flex Grow</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" {...defaultProps}>
        <Box p={1} flexGrow={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexShrink = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Flex Shrink</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" {...defaultProps}>
        <Box p={1} width="100%" bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} flexShrink={1} bgcolor="#c0d7e8">
          Item 2
        </Box>
        <Box p={1} flexShrink={0} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
    </div>
  </>
);

export const BoxFlexAlignSelf = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Align Self</h3>
    <div style={{ width: '100%' }}>
      <Box display="flex" alignItems="flex-start" css={{ height: 100 }} {...defaultProps}>
        <Box p={1} bgcolor="#c0d7e8">
          Item 1
        </Box>
        <Box p={1} bgcolor="#c0d7e8" alignSelf="flex-end">
          Item 2
        </Box>
        <Box p={1} bgcolor="#c0d7e8">
          Item 3
        </Box>
      </Box>
    </div>
  </>
);

const BoxFlexbox = () => {
  return (
    <>
      {BoxFlex()}
      {BoxFlexDirection()}
      {BoxFlexWrap()}
      {BoxFlexJustifyContent()}
      {BoxFlexAlignItems()}
      {BoxFlexAlignContent()}
      {BoxFlexOrder()}
      {BoxFlexGrow()}
      {BoxFlexShrink()}
      {BoxFlexAlignSelf()}
    </>
  );
};

export default BoxFlexbox;
