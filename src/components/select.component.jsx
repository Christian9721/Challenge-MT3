/* eslint-disable react/prop-types */
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectComponent = (props) => {
  const { items, label, onChange, id, value, defaultValue, name } = props;

  const handleStatus = (e) => {
    console.log("e", e);
    onChange(id, e);
  };

  return (
    <Select
      displayEmpty
      size="small"
      inputProps={{ "aria-label": "Without label" }}
      value={value}
      name={name}
      label={label}
      defaultValue={defaultValue}
      onChange={handleStatus}
      fullWidth
      sx={{ textTransform: "capitalize" }}
    >
      {items.map((item, idx) => (
        <MenuItem key={`${id}-${idx}`} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
