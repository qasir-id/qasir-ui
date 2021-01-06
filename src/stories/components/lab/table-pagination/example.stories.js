// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TablePagination from 'components/lab/TablePagination';
import TablePaginationDocs from './table-pagination-basic/docs.mdx';

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
      title: 'Components/Lab/Table Pagination/Example',
      decorators: [withDesign],
      parameters: {
          design: {disabled: true},
          options: {showPanel: false}
      }
  };

  export const tablePagination = () => (
      <Wrapper>
          <TablePagination count={100} />
      </Wrapper>
  )

  tablePagination.story = {
      parameters: {
          status: 'Development', // Stabled | Development | Deprecated,
          docs: {
              page: TablePaginationDocs
          }
      }
  }