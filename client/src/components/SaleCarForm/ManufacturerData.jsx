import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import carManufacturer from "../Form/GridComponent/helper/carManufacturerSelection";
import typeSelection from "../Form/GridComponent/helper/typeSelection";
import { useState } from "react";
const ManufacturerData = () => {
  const [manufacturer, setManufacturer] = useState("ALL");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");

  const handleChangeManufacturer = (event) => {
    if (manufacturer !== "ALL" && type !== "") setType("");
    setManufacturer(event.target.value);
  };

  const handleChangeType = (event) => setType(event.target.value);
  const handleChangeSubType = (event) => setSubType(event.target.value);
  const getDisable = () => {
    if (manufacturer === "ALL") return true;
    return false;
  };

  return (
    <div>
      <Typography mb={3} variant="h3" align="center" color="blue">
        MANUFACTURER DATA
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete={"given-"}
            name={"manufacturer"}
            required
            fullWidth
            id={"manufacturer"}
            label={"manufacturer"}
            value={manufacturer === "ALL" ? "" : manufacturer}
            onChange={handleChangeManufacturer}
            select
          >
            {carManufacturer.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete={"given-"}
            name={"type"}
            required
            fullWidth
            id={"type"}
            label={"type"}
            value={type}
            onChange={handleChangeType}
            disabled={getDisable()}
            select
          >
            {typeSelection[manufacturer].map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            name={"subType"}
            required
            fullWidth
            helperText=""
            id={"subType"}
            label={"sub type"}
            value={subType}
            onChange={handleChangeSubType}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ManufacturerData;
