// Vendors
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

import CheckboxPartial from "./checkbox-partial";

import CheckboxProps from "./checkbox-props/";
import CheckboxPropsDocs from "./checkbox-props/docs.mdx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: "Components/Inputs/Checkbox/Example",
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const checkboxPartial = () => (
  <Wrapper>
    <CheckboxPartial />
  </Wrapper>
);

export const checkboxProps = () => (
  <Wrapper>
    <CheckboxProps />
  </Wrapper>
);

checkboxProps.story = {
  parameters: {
    status: "Development", // Stable | Development | Deprecated,
    docs: {
      page: CheckboxPropsDocs,
    },
  },
};
