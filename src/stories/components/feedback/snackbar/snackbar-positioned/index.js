// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';
import Snackbar from 'components/feedback/Snackbar';

const SnackbarPositioned = (props) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
        style={{ marginRight: 20 }}
      >
        Top-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
        style={{ marginRight: 20 }}
      >
        Top-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
        style={{ marginRight: 20 }}
      >
        Bottom-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
        style={{ marginRight: 20 }}
      >
        Bottom-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
        style={{ marginRight: 20 }}
      >
        Bottom-Left
      </Button>
      <Button variant="outlined" onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
};

export default SnackbarPositioned;
