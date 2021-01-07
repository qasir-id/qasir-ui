// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import BasicPagination from './pagination-basic';
import BasicPaginationDocs from './pagination-basic/docs.mdx';

import PaginationProps from './pagination-props';
import PaginationPropsDocs from './pagination-props/docs.mdx';

import PaginationControlled from './pagination-controlled';
import PaginationControlledDocs from './pagination-controlled/docs.mdx';

import TablePaginationComponent from './pagination-table';
import TablePaginationComponentDocs from './pagination-table/docs.mdx';

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
      title: 'Components/Lab/Pagination/Example',
      decorators: [withDesign],
      parameters: {
          design: {disabled: true},
          options: {showPanel: false}
      }
  };

  export const Basic = () => (
      <Wrapper>
          <BasicPagination />
      </Wrapper>
  )

  export const paginationProps = () => (
      <Wrapper>
          <PaginationProps />
      </Wrapper>
  )

  export const paginationControlled = () => (
      <Wrapper>
          <PaginationControlled />
      </Wrapper>
  )

  export const paginationTable = () => (
      <Wrapper>
          <TablePaginationComponent/>
      </Wrapper>
  )

  paginationTable.story = {
      parameters: {
        status: 'Development', // Stabled | Development | Deprecated,
        docs: {
            page: TablePaginationComponentDocs
        }
      }
  }

  paginationProps.story = {
      parameters: {
          status: 'Development', // Stabled | Development | Deprecated,
          docs: {
              page: PaginationPropsDocs
          }
      }
  }

  Basic.story = {
      parameters: {
          status: 'Development', // Stable | Development | Deprecated,
          docs: {
              page: BasicPaginationDocs
          }
      }
  }

  paginationControlled.story = {
      parameters: {
          status: 'Development', // Stable | Development | Deprecated,
          docs: {
              page: PaginationControlledDocs
          }
      }
  }