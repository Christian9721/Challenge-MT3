import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Field from "./field.component";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Input from "./input.component";
import { addPendings } from "../store/modules/pendings";
import { useDispatch } from "react-redux";
import { STATUS } from "../constants/status.constants";
import { PRIORITIES } from "../constants/priorities.constant";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const defaultValue = {
  priority: PRIORITIES.LOW,
  text: "",
  status: STATUS.ACTIVE,
};

const ModalComponent = (props) => {
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState(defaultValue);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendData = () => {
    dispatch(addPendings(data));
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: "auto" }}>
        <Grid container rowGap={4}>
          <h2 id="child-modal-title">Add a new pending</h2>
          <Field label="Priority">
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              value={data.priority}
              name="priority"
              label="Priority"
              defaultValue={PRIORITIES.LOW}
              onChange={handleData}
              fullWidth
              sx={{ textTransform: "capitalize" }}
            >
              <MenuItem
                sx={{ textTransform: "capitalize" }}
                value={PRIORITIES.HIGH}
              >
                {PRIORITIES.HIGH}
              </MenuItem>
              <MenuItem
                sx={{ textTransform: "capitalize" }}
                value={PRIORITIES.MEDIUM}
              >
                {PRIORITIES.MEDIUM}
              </MenuItem>
              <MenuItem
                sx={{ textTransform: "capitalize" }}
                value={PRIORITIES.LOW}
              >
                {PRIORITIES.LOW}
              </MenuItem>
            </Select>
          </Field>
          <Field label="Text">
            <Input name="text" onChange={handleData} value={data.text} />
          </Field>
          <Field label="Status">
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              value={data.status}
              name="status"
              label="Priority"
              onChange={handleData}
              fullWidth
              defaultValue={STATUS.ACTIVE}
            >
              <MenuItem value={STATUS.ACTIVE}>Active</MenuItem>
              <MenuItem value={STATUS.DONE}>Done</MenuItem>
              <MenuItem value={STATUS.DELETED}>Deleted</MenuItem>
            </Select>
          </Field>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleSendData}>
            ADD
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
