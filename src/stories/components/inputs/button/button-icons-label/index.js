// Vendors
import React from 'react';

// Material UI
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

// Components
import Button from 'components/inputs/Button';

export const ButtonPrimaryStartIcon = (props) => (
  <Button variant="contained" color="primary" startIcon={<DeleteIcon />} {...props}>
    Delete
  </Button>
);

export const ButtonSecondaryEndIcon = (props) => (
  <Button variant="contained" color="secondary" endIcon={<SendIcon />} {...props}>
    Send
  </Button>
);

export const ButtonDisableStartIcon = (props) => (
  <Button variant="contained" disabled startIcon={<CloudUploadIcon />} {...props}>
    Upload
  </Button>
);

export const ButtonOutlineStartIcon = (props) => (
  <Button variant="outlined" startIcon={<KeyboardVoiceIcon />} {...props}>
    Talk
  </Button>
);

export const ButtonTextStartIcon = (props) => (
  <Button variant="text" startIcon={<SaveIcon />} {...props}>
    Save
  </Button>
);

const ButtonIconsLabel = () => {
  return (
    <>
      {ButtonPrimaryStartIcon()}
      {ButtonSecondaryEndIcon()}
      {ButtonDisableStartIcon()}
      {ButtonOutlineStartIcon()}
      {ButtonTextStartIcon()}
    </>
  );
};

export default ButtonIconsLabel;
