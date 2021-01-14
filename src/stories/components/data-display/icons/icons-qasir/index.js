// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import IconDashboard from 'components/data-display/Icons/IconDashboard';
import IconReport from 'components/data-display/Icons/IconReport';
import IconTransaction from 'components/data-display/Icons/IconTransaction';
import IconProduct from 'components/data-display/Icons/IconProduct';
import IconStaff from 'components/data-display/Icons/IconStaff';
import IconInventory from 'components/data-display/Icons/IconInventory';
import IconPayment from 'components/data-display/Icons/IconPayment';
import IconOutlet from 'components/data-display/Icons/IconOutlet';
import IconCashflow from 'components/data-display/Icons/IconCashflow';
import IconCustomer from 'components/data-display/Icons/IconCustomer';
import IconProfile from 'components/data-display/Icons/IconProfile';
import IconCalendar from 'components/data-display/Icons/IconCalendar';
import IconSearch from 'components/data-display/Icons/IconSearch';
import IconShow from 'components/data-display/Icons/IconShow';
import IconHide from 'components/data-display/Icons/IconHide';
import IconExpand from 'components/data-display/Icons/IconExpand';
import IconDropdown from 'components/data-display/Icons/IconDropdown';
import IconBack from 'components/data-display/Icons/IconBack';
import IconExit from 'components/data-display/Icons/IconExit';
import IconSetting from 'components/data-display/Icons/IconSetting';
import IconDelete from 'components/data-display/Icons/IconDelete';
import IconClose from 'components/data-display/Icons/IconClose';
import IconClear from 'components/data-display/Icons/IconClear';
import IconInfo from 'components/data-display/Icons/IconInfo';
import IconSort from 'components/data-display/Icons/IconSort';
import IconSortAscending from 'components/data-display/Icons/IconSortAscending';
import IconSortDescending from 'components/data-display/Icons/IconSortDescending';

const useStyles = makeStyles({
  intro: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Icons = () => {
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

export default Icons;
