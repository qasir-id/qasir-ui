// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Avatar from 'components/data-display/Avatar';
import AvatarDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Data Display/Avatar',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    image: {
      name: 'Image',
      control: {
        type: 'boolean',
      },
    },
    variant: {
      name: 'Variants',
      control: {
        type: 'select',
        options: ['circle', 'rounded', 'square'],
      },
    },
    size: { name: 'Size', control: 'range', min: 1, max: 100, step: 1 },
  },
};

export const description = ({ image, size, variant }) => (
  <Wrapper>
    <Avatar
      alt="Remy Sharp"
      src={image ? 'https://material-ui.com/static/images/avatar/1.jpg' : '/broken-image.jpg'}
      variant={variant}
      style={{ width: size, height: size }}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarDescriptionDocs,
    },
  },
};

description.args = {
  image: true,
  variant: 'circle',
  size: 40,
};
