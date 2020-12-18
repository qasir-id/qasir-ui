// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Typography from 'components/data-display/Typography';
import TypographyDescriptionDocs from './description.docs.mdx';

import 'font-family.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Data Display/Typography',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
  argTypes: {
    heading: {
      name: 'Heading',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
    },
    subtitle: {
      name: 'Subtitle',
      control: {
        type: 'select',
        options: ['subtitle1', 'subtitle2', 'subtitle3'],
      },
    },
    body: {
      name: 'Body',
      control: {
        type: 'select',
        options: ['body1', 'body2'],
      },
    },
    caption: {
      name: 'Caption',
      control: {
        type: 'select',
        options: ['caption1', 'caption2'],
      },
    },
    overline: {
      name: 'Overline',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ heading, subtitle, body, caption, overline }) => (
  <Wrapper>
    <h3>Heading</h3>
    <Typography variant={heading}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Subtitle</h3>
    <Typography
      variant={subtitle == 'subtitle1' ? subtitle : subtitle == 'subtitle2' ? subtitle : ''}
      className={subtitle == 'subtitle3' ? 'MuiTypography-subtitle3' : ''}
      component={subtitle == 'subtitle3' ? 'h6' : ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Body</h3>
    <Typography variant={body}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Caption</h3>
    <Typography
      variant="caption"
      className={
        caption == 'caption1'
          ? 'MuiTypography-caption1'
          : caption == 'caption2'
          ? 'MuiTypography-caption2'
          : ''
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Overline</h3>
    <Typography variant={overline ? 'overline' : ''}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: TypographyDescriptionDocs,
    },
  },
};

description.args = {
  heading: 'h1',
  subtitle: 'subtitle1',
  body: 'body1',
  caption: 'caption1',
};
