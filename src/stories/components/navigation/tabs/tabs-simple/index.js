// Vendors
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Box from '@material-ui/core/Box';

import Typography from 'components/data-display/Typography';
import Tabs from 'components/navigation/Tabs';
import Tab from 'components/navigation/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary"
        TabIndicatorProps={{children: <div />}}
        {...props}
        >
          <Tab label="Semua Produk" {...a11yProps(0)} {...props} />
          <Tab label="Kategori" {...a11yProps(1)} {...props}/>
        </Tabs>
      </div>
    </div>
  );
}
