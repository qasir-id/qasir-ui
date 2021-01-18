// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Icon from 'components/data-display/Icon';
import IconDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Data Display/Icons',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    icons: {
      name: 'Icons',
      control: {
        type: 'select',
        options: ['Qasir', 'Material Design'],
      },
    },
  },
};

export const description = () => (
  <Wrapper>
    <Icon>
      <path d="M9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V5.6C7 5.82091 7.17909 6 7.4 6H8.6C8.82091 6 9 5.82091 9 5.6V4ZM17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V5.6C15 5.82091 15.1791 6 15.4 6H16.6C16.8209 6 17 5.82091 17 5.6V4Z" />
      <path d="M19 7V6H18.2C18.0895 6 18 5.91046 18 5.8V4.2C18 4.08954 18.0895 4 18.2 4H20.6C20.8209 4 21 4.17909 21 4.4V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V4.4C3 4.17909 3.17909 4 3.4 4H5.8C5.91046 4 6 4.08954 6 4.2V5.8C6 5.91046 5.91046 6 5.8 6H5V7H19ZM19 18V9H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18ZM10.2 4H13.8C13.9105 4 14 4.08954 14 4.2V5.8C14 5.91046 13.9105 6 13.8 6H10.2C10.0895 6 10 5.91046 10 5.8V4.2C10 4.08954 10.0895 4 10.2 4ZM14.6 11H16.4C16.7314 11 17 11.1791 17 11.4V12.6C17 12.8209 16.7314 13 16.4 13H14.6C14.2686 13 14 12.8209 14 12.6V11.4C14 11.1791 14.2686 11 14.6 11ZM7.4 11H12.6C12.8209 11 13 11.1791 13 11.4V12.6C13 12.8209 12.8209 13 12.6 13H7.4C7.17909 13 7 12.8209 7 12.6V11.4C7 11.1791 7.17909 11 7.4 11ZM7.6 15H9.4C9.73137 15 10 15.1791 10 15.4V16.6C10 16.8209 9.73137 17 9.4 17H7.6C7.26863 17 7 16.8209 7 16.6V15.4C7 15.1791 7.26863 15 7.6 15ZM11.4 15H16.6C16.8209 15 17 15.1791 17 15.4V16.6C17 16.8209 16.8209 17 16.6 17H11.4C11.1791 17 11 16.8209 11 16.6V15.4C11 15.1791 11.1791 15 11.4 15Z" />
    </Icon>
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: IconDescriptionDocs,
    },
  },
};

description.args = {
  icons: 'Qasir',
};
