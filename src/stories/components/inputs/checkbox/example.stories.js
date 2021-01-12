// Vendors
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

import CheckboxPartial from "./checkbox-partial";
import CheckboxPartialDocs from "./checkbox-partial/docs.mdx";

import CheckboxProps from "./checkbox-props/";
import CheckboxPropsDocs from "./checkbox-props/docs.mdx";

import CheckboxWithForm from "./checkbox-form";
import CheckboxWithFormDocs from "./checkbox-form/docs.mdx";

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

export const checkboxWithForm = () => (
  <Wrapper>
    <CheckboxWithForm />
  </Wrapper>
);

checkboxPartial.story = {
  parameters: {
    status: "Development",
    docs: {
      page: CheckboxPartialDocs,
    },
  },
};

checkboxProps.story = {
  parameters: {
    status: "Development", // Stable | Development | Deprecated,
    docs: {
      page: CheckboxPropsDocs,
    },
  },
};

checkboxWithForm.story = {
  parameters: {
    status: "Development", // Stable | Development | Deprecated,
    docs: {
      page: CheckboxWithFormDocs,
    },
  },
};
