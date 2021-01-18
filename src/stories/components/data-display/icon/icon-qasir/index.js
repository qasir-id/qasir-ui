// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
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

const useStyles = makeStyles({
  intro: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const IconQasir = () => {
  const classes = useStyles();

  return (
    <>
      <IconDashboard />
      <IconReport />
      <IconTransaction />
      <IconProduct />
      <IconStaff />
      <IconInventory />
      <IconPayment />
      <IconOutlet />
      <IconCashflow />
      <IconCustomer />
      <IconProfile />
      <IconCalendar />
      <IconSearch />
      <IconShow />
      <IconHide />
      <IconExpand />
      <IconDropdown />
      <IconBack />
      <IconExit />
      <IconSetting />
      <IconDelete />
      <IconClose />
      <IconClear />
      <IconInfo />
      <IconSort />
      <IconSortAscending />
      <IconSortDescending />
    </>
  );
};

export default IconQasir;
