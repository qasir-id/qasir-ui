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
    Heading: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
    },
    Subtitle: {
      control: {
        type: 'select',
        options: ['subtitle1', 'subtitle2', 'subtitle3'],
      },
    },
    Body: {
      control: {
        type: 'select',
        options: ['body1', 'body2'],
      },
    },
    Caption: {
      control: {
        type: 'select',
        options: ['caption1', 'caption2'],
      },
    },
    Overline: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = (args) => (
  <Wrapper>
    <h3>Heading</h3>
    <Typography variant={args.Heading}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Subtitle</h3>
    <Typography
      variant={
        args.Subtitle == 'subtitle1' ? args.Subtitle : args.Subtitle == 'subtitle2' ? args.Subtitle : ''
      }
      className={args.Subtitle == 'subtitle3' ? 'MuiTypography-subtitle3' : ''}
      component={args.Subtitle == 'subtitle3' ? 'h6' : ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Body</h3>
    <Typography variant={args.Body}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Caption</h3>
    <Typography
      variant="caption"
      className={
        args.Caption == 'caption1'
          ? 'MuiTypography-caption1'
          : args.Caption == 'caption2'
          ? 'MuiTypography-caption2'
          : ''
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Typography>
    <h3 style={{ marginTop: 20 }}>Overline</h3>
    <Typography variant={args.Overline ? 'overline' : ''}>
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
  Heading: 'h1',
  Subtitle: 'subtitle1',
  Body: 'body1',
  Caption: 'caption1',
};
