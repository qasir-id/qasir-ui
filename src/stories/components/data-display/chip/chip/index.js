// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';


const ChipComponent = () => {
  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />}
        label="Deletable"
        onDelete={handleDelete}
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label="Clickable Link" component="a" href="#chip" clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
      <Chip
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />

    </>
  );
};

export default ChipComponent;