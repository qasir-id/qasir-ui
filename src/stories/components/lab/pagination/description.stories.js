// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import PaginationComponent from 'components/lab/Pagination';
import PaginationDocs from './description.docs.mdx';

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
  title: 'Components/Lab/Pagination',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['text', 'outlined'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'standard'],
      },
    },
    count: {
      name: 'Count',
      control: {
        type: 'number',
      },
    },
    shape: {
      name: 'Shape',
      control: {
        type: 'select',
        options: ['round', 'rounded'],
      },
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ variant, size, color, count, shape, disabled }) => (
  <Wrapper>
    <PaginationComponent
      count={count}
      variant={variant}
      size={size}
      color={color}
      shape={shape}
      disabled={disabled}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: PaginationDocs,
    },
  },
};

description.args = {
  variant: 'text',
  size: 'medium',
  color: 'standard',
  count: 10,
  shape: 'round',
  disabled: false,
};
