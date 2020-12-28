import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../variables/theme';


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

export default (props) => {
  const {data} = props
  const [value, setValue] = React.useState(0);
  // const {data} = props
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>           
      <AppBar style={{background: '#fff'}} position="static">
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example" 
          TabIndicatorProps={{style: {backgroundColor: '#F04B32'}}}
          {...props}
        >
          {data.map((item, index) => (
            <Tab label={item.label} {...a11yProps(index)} />
            ))}
        </Tabs>
      </AppBar>
      {data.map((item, index) => (
        <TabPanel value={value} index={index}>
          {item.description}
        </TabPanel>
      ))}
      
    </ThemeProvider>
  );
}