// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';

export const OutlinedBasicChip = (props) => {
  return(
    <>
      <Chip label="Basic" {...props}/>
    </>
  )
};
export const OutlinedDisabledChip = (props) => {
  return(
    <>
      <Chip label="Disabled" disabled {...props}/>
    </>
  )
};
export const OutlinedAvatarChip = (props) => {
  return (
  <>
    <Chip 
        avatar={<Avatar>M</Avatar>} 
        label="Clickable" 
        onClick={() => alert('clicked')}
        {...props}
    />
  </>
  )
};
export const OutlinedImageChip = (props) => {
  return(
    <>
       <Chip
        avatar={<Avatar alt="Natacha" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" />}
        label="Deletable"
        onDelete={() => alert('deleted')}
        {...props}
      />
    </>
  )
};
export const OutlinedIconChipClickable = (props) => {
  return(
  <>
    <Chip
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        {...props}
      />
  </>
  )
};
export const OutlinedCustomIconChip = (props) => {
  return(
    <>
      <Chip
        label="Custom delete icon"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...props}
      />
    </>
  )
};
export const OutlinedClickableChipComp = (props) => {
  return(
    <>
      <Chip 
        label="Clickable Link" 
        component="a" 
        href="#chip" 
        clickable 
        {...props}
        />
    </>
  )
};
export const OutlinedPrimaryChip = (props) => {
  return(
    <>
       <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...props}
      />
    </>
  )
};
export const OutlinedPrimaryDeleteAble = (props) => {
  return(
  <>
    <Chip
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...props}
      />
  </>
  )
};
export const OutlinedPrimaryDelete = (props) => {
  return(
    <>
     <Chip 
        label="Deletable primary" 
        onDelete={() => alert('deleted')} 
        color="primary"
        {...props}
      />
    </>
  )
};
export const OutlinedChipSecondary = (props) => {
  return(
    <>
      <Chip
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={() => alert('deleted')}
        color="secondary"
        {...props}
      />
    </>
  )
}
const ChipProps = () => {
  return (
    <>
      {OutlinedBasicChip()}
      {OutlinedDisabledChip()}
      {OutlinedAvatarChip()}
      {OutlinedImageChip()}
      {OutlinedIconChipClickable()}
      {OutlinedCustomIconChip()}
      {OutlinedClickableChipComp()}
      {OutlinedPrimaryChip()}
      {OutlinedPrimaryDeleteAble()}
      {OutlinedPrimaryDelete()}
      {OutlinedChipSecondary()}

    </>
  );
};

export default ChipProps;