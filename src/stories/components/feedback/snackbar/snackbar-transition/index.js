// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';
import Snackbar from 'components/feedback/Snackbar';
import Fade from 'components/utils/Fade';
import Slide from 'components/utils/Slide';
import Grow from 'components/utils/Grow';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

const SnackbarTransition = (props) => {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)} variant="outlined" style={{ marginRight: 20 }}>
        Grow Transition
      </Button>
      <Button onClick={handleClick(Fade)} variant="outlined" style={{ marginRight: 20 }}>
        Fade Transition
      </Button>
      <Button onClick={handleClick(SlideTransition)} variant="outlined">
        Slide Transition
      </Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
      />
    </div>
  );
};

export default SnackbarTransition;
