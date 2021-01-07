// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TablePagination from 'components/lab/TablePagination';
import TablePaginationDocs from './description.docs.mdx';

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
      title: 'Components/Lab/Table Pagination',
      decorators: [withDesign],
      parameters: {
          design: {disabled: true},
          options: {showPanel: true}
      },
      argTypes: {
          count: {
              name: 'Count',
              control: {
                type: 'number'
            }
          },
      }
  };

  export const description = (props, {count}) => (
      <Wrapper>
          <TablePagination 
            count={count}
            {...props}
            />
      </Wrapper>
  )

  description.story = {
      parameters: {
          status: 'Development', // Stable | Development | Deprecated
          docs: {
              page: TablePaginationDocs
          }
      }
  }
  description.args = {
      count: 100,
  }