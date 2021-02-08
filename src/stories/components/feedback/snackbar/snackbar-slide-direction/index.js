// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';
import Snackbar from 'components/feedback/Snackbar';
import Slide from 'components/utils/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const SnackbarSlideDirection = (props) => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionLeft)} variant="outlined" style={{ marginRight: 20 }}>
        Right
      </Button>
      <Button onClick={handleClick(TransitionUp)} variant="outlined" style={{ marginRight: 20 }}>
        Up
      </Button>
      <Button onClick={handleClick(TransitionRight)} variant="outlined" style={{ marginRight: 20 }}>
        Left
      </Button>
      <Button onClick={handleClick(TransitionDown)} variant="outlined">
        Down
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
      />
    </div>
  );
};

export default SnackbarSlideDirection;
