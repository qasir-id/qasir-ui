// Vendors
import React, { useState, useEffect } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Components
import TextField from 'components/inputs/TextField';

import IconDashboard from 'components/data-display/Icon/IconDashboard';
import IconReport from 'components/data-display/Icon/IconReport';
import IconTransaction from 'components/data-display/Icon/IconTransaction';
import IconProduct from 'components/data-display/Icon/IconProduct';
import IconStaff from 'components/data-display/Icon/IconStaff';
import IconInventory from 'components/data-display/Icon/IconInventory';
import IconPayment from 'components/data-display/Icon/IconPayment';
import IconOutlet from 'components/data-display/Icon/IconOutlet';
import IconCashflow from 'components/data-display/Icon/IconCashflow';
import IconCustomer from 'components/data-display/Icon/IconCustomer';
import IconProfile from 'components/data-display/Icon/IconProfile';
import IconCalendar from 'components/data-display/Icon/IconCalendar';
import IconSearch from 'components/data-display/Icon/IconSearch';
import IconShow from 'components/data-display/Icon/IconShow';
import IconHide from 'components/data-display/Icon/IconHide';
import IconExpand from 'components/data-display/Icon/IconExpand';
import IconDropdown from 'components/data-display/Icon/IconDropdown';
import IconBack from 'components/data-display/Icon/IconBack';
import IconExit from 'components/data-display/Icon/IconExit';
import IconSetting from 'components/data-display/Icon/IconSetting';
import IconDelete from 'components/data-display/Icon/IconDelete';
import IconClose from 'components/data-display/Icon/IconClose';
import IconClear from 'components/data-display/Icon/IconClear';
import IconInfo from 'components/data-display/Icon/IconInfo';
import IconSort from 'components/data-display/Icon/IconSort';
import IconSortAscending from 'components/data-display/Icon/IconSortAscending';
import IconSortDescending from 'components/data-display/Icon/IconSortDescending';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    width: 'auto',
  },
  iconSearch: {
    marginBottom: 25,
  },
  iconItem: {
    width: 120,
    height: 85,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    fontSize: 12,
    textAlign: 'center',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    borderRadius: 4,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:last-child': {
      marginRight: 0,
    },
    '& p': {
      margin: '5px 0 0 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: 'rgba(0, 0, 0, 0.54)',
      lineHeight: '14px !important',
    },
  },
}));

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

const icons = [
  { name: 'Dashboard', element: <IconDashboard /> },
  { name: 'Report', element: <IconReport /> },
  { name: 'Transaction', element: <IconTransaction /> },
  { name: 'Product', element: <IconProduct /> },
  { name: 'Staff', element: <IconStaff /> },
  { name: 'Inventory', element: <IconInventory /> },
  { name: 'Payment', element: <IconPayment /> },
  { name: 'Outlet', element: <IconOutlet /> },
  { name: 'Cashflow', element: <IconCashflow /> },
  { name: 'Customer', element: <IconCustomer /> },
  { name: 'Profile', element: <IconProfile /> },
  { name: 'Calendar', element: <IconCalendar /> },
  { name: 'Search', element: <IconSearch /> },
  { name: 'Show', element: <IconShow /> },
  { name: 'Hide', element: <IconHide /> },
  { name: 'Expand', element: <IconExpand /> },
  { name: 'Dropdown', element: <IconDropdown /> },
  { name: 'Back', element: <IconBack /> },
  { name: 'Exit', element: <IconExit /> },
  { name: 'Setting', element: <IconSetting /> },
  { name: 'Delete', element: <IconDelete /> },
  { name: 'Close', element: <IconClose /> },
  { name: 'Clear', element: <IconClear /> },
  { name: 'Info', element: <IconInfo /> },
  { name: 'Sort', element: <IconSort /> },
  { name: 'Sort Ascending', element: <IconSortAscending /> },
  { name: 'Sort Descending', element: <IconSortDescending /> },
];

const IconQasir = () => {
  const classes = useStyles();
  const [iconState, setIconState] = useState(icons);

  // Searching
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchCharacters = (search) => {
    return true;
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm).then((r) => {
        console.log('a');
      });
    } else {
      if (debouncedSearchTerm == '') {
        searchCharacters(debouncedSearchTerm).then((r) => {
          console.log('b');
        });
      }
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <TextField
        label="Search icons..."
        type="search"
        variant="outlined"
        fullWidth
        className={classes.iconSearch}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={2} className={classes.iconWrapper}>
        <Grid item xs={12}>
          <Grid container justify="left" spacing={2}>
            {iconState.map(({ name, element }, i) => (
              <Grid item key={i}>
                <Paper className={classes.iconItem}>
                  <div>
                    {element}
                    <p>{name}</p>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default IconQasir;
