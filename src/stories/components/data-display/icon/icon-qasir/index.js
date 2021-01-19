// Vendors
import React, { useState, useEffect } from 'react';
import { Source } from '@storybook/addon-docs/blocks';
import dedent from 'ts-dedent';

// Material UI
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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

import colors from 'components/variables/colors';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalIconPreview: {
    '& svg': {
      color: colors.red50,
      fontSize: 210,
      backgroundSize: '30px 30px',
      backgroundColor: '#fff',
      backgroundImage:
        'linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%)',
      backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0',
      marginRight: 20,
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
  { name: 'Dashboard', element: <IconDashboard />, importName: 'IconDashboard' },
  { name: 'Report', element: <IconReport />, importName: 'IconReport' },
  { name: 'Transaction', element: <IconTransaction />, importName: 'IconTransaction' },
  { name: 'Product', element: <IconProduct />, importName: 'IconProduct' },
  { name: 'Staff', element: <IconStaff />, importName: 'IconStaff' },
  { name: 'Inventory', element: <IconInventory />, importName: 'IconInventory' },
  { name: 'Payment', element: <IconPayment />, importName: 'IconPayment' },
  { name: 'Outlet', element: <IconOutlet />, importName: 'IconOutlet' },
  { name: 'Cashflow', element: <IconCashflow />, importName: 'IconCashflow' },
  { name: 'Customer', element: <IconCustomer />, importName: 'IconCustomer' },
  { name: 'Profile', element: <IconProfile />, importName: 'IconProfile' },
  { name: 'Calendar', element: <IconCalendar />, importName: 'IconCalendar' },
  { name: 'Search', element: <IconSearch />, importName: 'IconSearch' },
  { name: 'Show', element: <IconShow />, importName: 'IconShow' },
  { name: 'Hide', element: <IconHide />, importName: 'IconHide' },
  { name: 'Expand', element: <IconExpand />, importName: 'IconExpand' },
  { name: 'Dropdown', element: <IconDropdown />, importName: 'IconDropdown' },
  { name: 'Back', element: <IconBack />, importName: 'IconBack' },
  { name: 'Exit', element: <IconExit />, importName: 'IconExit' },
  { name: 'Setting', element: <IconSetting />, importName: 'IconSetting' },
  { name: 'Delete', element: <IconDelete />, importName: 'IconDelete' },
  { name: 'Close', element: <IconClose />, importName: 'IconClose' },
  { name: 'Clear', element: <IconClear />, importName: 'IconClear' },
  { name: 'Info', element: <IconInfo />, importName: 'IconInfo' },
  { name: 'Sort', element: <IconSort />, importName: 'IconSort' },
  { name: 'Sort Ascending', element: <IconSortAscending />, importName: 'IconSortAscending' },
  { name: 'Sort Descending', element: <IconSortDescending />, importName: 'IconSortDescending' },
];

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '0 16px',
    minWidth: 500,
  },
}))(MuiDialogContent);

const IconQasir = () => {
  const classes = useStyles();
  const [iconState, setIconState] = useState(icons);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClickOpen = (objIcon) => {
    setOpen(true);
    setModalData(objIcon);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            {iconState.map(({ name, element, importName }, i) => (
              <Grid item key={i} onClick={() => handleClickOpen({ name, element, importName })}>
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

      {modalData && (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {modalData.name}
          </DialogTitle>
          <DialogContent>
            <div className={classes.modalContent}>
              <div className={classes.modalIconPreview}>{modalData.element}</div>
            </div>
            <Source
              language="jsx"
              code={dedent`import ${modalData.importName} from 'qasir-ui/Icon/${modalData.importName}';`}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default IconQasir;
