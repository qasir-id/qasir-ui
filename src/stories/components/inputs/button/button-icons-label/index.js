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

const ButtonIconsLabel = () => {
  return (
    <>
      <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" disabled startIcon={<CloudUploadIcon />}>
        Upload
      </Button>
      <Button variant="outlined" startIcon={<KeyboardVoiceIcon />}>
        Talk
      </Button>
      <Button variant="text" startIcon={<SaveIcon />}>
        Save
      </Button>
    </>
  );
};

export default ButtonIconsLabel;
