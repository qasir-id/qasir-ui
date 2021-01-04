// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

export const BoxTypographyTextAlignment = () => (
  <>
    <h3>Text Alignment</h3>
    <div>
      <Box textAlign="justify" m={1}>
        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed
        odio operae, eu vulputate felis rhoncus.
      </Box>
      <Box textAlign="left" m={1}>
        Left aligned text.
      </Box>
      <Box textAlign="center" m={1}>
        Center aligned text.
      </Box>
      <Box textAlign="right" m={1}>
        Right aligned text.
      </Box>
    </div>
  </>
);

export const BoxTypographyFontWeight = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Font Weight</h3>
    <Box fontWeight={700}>Bold</Box>
  </>
);

export const BoxTypographyFontSize = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Font Size</h3>
    <Box fontSize={14}>Font size 14</Box>
  </>
);

export const BoxTypographyFontStyle = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Font Style</h3>
    <Box fontStyle="normal" m={1}>
      Normal font style.
    </Box>
    <Box fontStyle="italic" m={1}>
      Italic font Style.
    </Box>
  </>
);

export const BoxTypographyFontFamily = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Font Style</h3>
    <Box fontFamily="fontFamily" m={1}>
      Default
    </Box>
    <Box fontFamily="Monospace" m={1}>
      Monospace
    </Box>
  </>
);

export const BoxTypographyLetterSpacing = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Letter Spacing</h3>
    <Box letterSpacing={6} m={1}>
      Letter Spacing 6px.
    </Box>
  </>
);

export const BoxTypographyLineHeight = () => (
  <>
    <h3 style={{ marginTop: 40 }}>Line Height</h3>
    <Box lineHeight="normal" m={1}>
      Normal height.
    </Box>
    <Box lineHeight={2} m={1}>
      line-height: 2
    </Box>
  </>
);

const BoxTypography = () => (
  <>
    {BoxTypographyTextAlignment()}
    {BoxTypographyFontWeight()}
    {BoxTypographyFontSize()}
    {BoxTypographyFontStyle()}
    {BoxTypographyFontFamily()}
    {BoxTypographyLetterSpacing()}
    {BoxTypographyLineHeight()}
  </>
);

export default BoxTypography;
