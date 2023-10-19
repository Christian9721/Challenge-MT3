import Grid from "@mui/material/Grid";

const FieldComponent = (props) => {
  const { label, children } = props;
  return (
    <Grid container spacing={4} alignItems={"center"}>
      <Grid item lg={3}>
        {label}
      </Grid>
      <Grid item lg={9}>
        {children && children}
      </Grid>
    </Grid>
  );
};

export default FieldComponent;
