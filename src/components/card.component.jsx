import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { STATUS } from "../constants/status.constants";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

//statuses allowed: Active, Done, Deleted
const CardComponent = (props) => {
  const { priority, text, status, id, handleStatus, ...rest } = props;
  return (
    <Card sx={{ minWidth: 200, cursor: "all-scroll" }} draggable {...rest}>
      <CardContent>
        <Grid
          container
          rowGap={2}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Grid item>
            <Chip
              sx={{ textTransform: "capitalize" }}
              label={priority}
              color="primary"
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" textOverflow="">
              {text}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Select
              displayEmpty
              size="small"
              inputProps={{ "aria-label": "Without label" }}
              value={status}
              name="status"
              label=""
              onChange={(e) => handleStatus(id, e.target.value)}
              fullWidth
            >
              <MenuItem value={STATUS.ACTIVE}>Active</MenuItem>
              <MenuItem value={STATUS.DONE}>Done</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="error"
              onClick={() => handleStatus(id, STATUS.DELETED)}
              variant="outlined"
              fullWidth
              startIcon={<DeleteIcon color="error" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
