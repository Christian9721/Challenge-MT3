import { useCallback, useMemo, useState } from "react";
import CardComponent from "../components/card.component";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../components/modal.component";
import { useDispatch, useSelector } from "react-redux";
import { setPendings, changeStatusPending } from "../store/modules/pendings";
import { STATUS } from "../constants/status.constants";
import useCount from "../hooks/useCount";
import Typography from "@mui/material/Typography";
import useDraggable from "../hooks/useDraggable";
import SortIcon from "@mui/icons-material/Sort";
import { Box } from "@mui/material";

const Index = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { data: pendings } = useSelector((state) => state.pendings);
  const { activeCount, doneCount } = useCount({ source: pendings });
  const { handleDragStart, handleDragEnter } = useDraggable({
    source: pendings,
    setPendings,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSort = () => {
    dispatch(
      setPendings(
        pendings.toSorted((a, b) => new Date(a.dueDate) - new Date(b.dueDate)),
      ),
    );
  };

  const handleStatus = useCallback((id, status) => {
    dispatch(changeStatusPending({ id, status }));
  }, []);

  const pendingElements = useMemo(() => {
    return pendings.map((i, idx) => {
      if (i.status !== STATUS.ACTIVE) return null;
      return (
        <Grid
          key={`${i.text}-${idx}`}
          item
          sm={12}
          md={6}
          lg={3}
          position="relative"
          minWidth={205}
        >
          <CardComponent
            {...i}
            handleStatus={handleStatus}
            onDragStart={(e) => handleDragStart(e, idx)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, idx)}
          />
        </Grid>
      );
    });
  }, [pendings]);

  return (
    <>
      <Box
        padding={{ xs: "6rem 1rem", lg: "6rem" }}
        sx={{ border: "solid", position: "relative" }}
      >
        <Modal open={open} handleClose={handleClose} handleOpen={handleOpen} />
        <Button
          onClick={handleSort}
          variant="outlined"
          startIcon={<SortIcon />}
          sx={{ position: "absolute", top: 0, right: 0, margin: "1rem" }}
        >
          SORT BY DUE DATE
        </Button>
        <Grid
          container
          gap={10}
          columns={16}
          justifyContent={{ xs: "center", lg: "flex-start" }}
        >
          <Grid item display="flex" sm={12} md={6} lg={3} minWidth={205}>
            <Button
              sx={{ width: "100%", minHeight: "216.516px" }}
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            />
          </Grid>
          {pendingElements}
        </Grid>
      </Box>
      <Grid container spacing={0} marginTop={8}>
        <Grid item xs={2}>
          <Typography variant="h5" component="div">
            Active: {activeCount}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="div">
            Done: {doneCount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
