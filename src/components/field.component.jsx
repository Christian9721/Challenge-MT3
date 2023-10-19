/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";

const FieldComponent = (props) => {
  const { label, children } = props;
  return (
    <Grid container spacing={4} alignItems={"center"}>
      <Grid item sm={12} md={3}>
        {label}
      </Grid>
      <Grid item sm={12} md={9}>
        {children && children}
      </Grid>
    </Grid>
  );
};

export default FieldComponent;
