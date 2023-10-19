/* eslint-disable react/prop-types */
import "./styles/card.style.css";
// eslint-disable-next-line no-unused-vars
import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { STATUS } from "../constants/status.constants";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import { PRIORITIES_COLORS } from "../constants/priorities.constant";
import { toTimeAgo, isBetweenDates } from "../utils/timeAgo";

const CardHeader = (props) => {
  const { text } = props;
  return (
    <header
      style={{
        width: "100%",
        background: PRIORITIES_COLORS[text.toUpperCase()],
        textTransform: "capitalize",
        position: "absolute",
        left: 0,
        top: 0,
        height: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white",
      }}
    >
      {text}
    </header>
  );
};
//statuses allowed: Active, Done, Deleted
const CardComponent = (props) => {
  const { priority, text, status, id, dueDate, handleStatus, ...rest } = props;

  const timeAgo = useMemo(() => {
    if (!dueDate) return null;
    return {
      date: toTimeAgo(dueDate),
      isDue: isBetweenDates(dueDate),
    };
  }, [dueDate]);

  return (
    <Card
      draggable
      {...rest}
      sx={{
        background: timeAgo && timeAgo.isDue ? "#FFD6D6" : "#FFF",
        cursor: "grab",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <CardHeader text={priority} />
        <Grid
          container
          rowGap={2}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          paddingTop={4}
        >
          <Grid container columnGap={2}>
            <Grid item>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {timeAgo && timeAgo.date}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
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
