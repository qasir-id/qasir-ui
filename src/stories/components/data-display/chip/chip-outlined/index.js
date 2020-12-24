// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';


const OutlinedChip = () => {
  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <>
      <Chip label="Basic" variant="outlined"/>
      <Chip label="Disabled" disabled  variant="outlined"/>
      <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
      <Chip
        variant="outlined"
        avatar={<Avatar alt="Natacha" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />}
        label="Deletable"
        onDelete={handleDelete}
      />
      <Chip
        variant="outlined"
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        variant="outlined"
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip variant="outlined" label="Clickable Link" component="a" href="#chip" clickable />
      <Chip
        variant="outlined"
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      
      <Chip variant="outlined" label="Deletable primary" onDelete={handleDelete} color="primary" />
      <Chip
        variant="outlined"
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />

    </>
  );
};

export default OutlinedChip;