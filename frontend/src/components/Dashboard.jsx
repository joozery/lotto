import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.jpeg";
import image3 from "../assets/image 3.jpeg";

const Dashboard = () => {
  const [activeImage, setActiveImage] = useState(image1);
  const [activeSet, setActiveSet] = useState("SET 1");

  const handleTabClick = (image) => {
    setActiveImage(image);
  };

  const handleSetSwitch = (set) => {
    setActiveSet(set);
  };

  return (
    <Box sx={{ minHeight: "100px", backgroundColor: "#f9f9f9", p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Ganesha</Typography>
        <Typography variant="body1">08/10/2567 23:00:03</Typography>
        <Button variant="outlined" color="primary">
          LOGOUT
        </Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button onClick={() => handleTabClick(image1)} sx={{ mx: 1 }} variant="text" color="secondary">
          IMAGE 1
        </Button>
        <Button onClick={() => handleTabClick(image2)} sx={{ mx: 1 }} variant="text" color="secondary">
          IMAGE 2
        </Button>
        <Button onClick={() => handleTabClick(image3)} sx={{ mx: 1 }} variant="text" color="secondary">
          IMAGE 3
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        {/* Main Image */}
        <Box sx={{ flex: '0 1 60%', backgroundColor: "#e0e0e0", p: 2, borderRadius: "8px", display: 'flex', justifyContent: 'center' }}>
          <img src={activeImage} alt="Main" style={{ width: "100%", maxWidth: '450px', borderRadius: "8px" }} />
        </Box>

        {/* Right Panel */}
        <Box sx={{ flex: '0 1 30%', backgroundColor: "#f0f0f0", p: 3, borderRadius: "8px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography
              variant="h6"
              onClick={() => handleSetSwitch("SET 1")}
              sx={{ cursor: "pointer", color: activeSet === "SET 1" ? "purple" : "black" }}
            >
              SET 1
            </Typography>
            <Typography
              variant="h6"
              onClick={() => handleSetSwitch("SET 2")}
              sx={{ cursor: "pointer", color: activeSet === "SET 2" ? "purple" : "black" }}
            >
              SET 2
            </Typography>
            <Typography
              variant="h6"
              onClick={() => handleSetSwitch("SET 3")}
              sx={{ cursor: "pointer", color: activeSet === "SET 3" ? "purple" : "black" }}
            >
              SET 3
            </Typography>
          </Box>

          {/* Render options based on active set */}
          {activeSet === "SET 1" && (
            <>
              <FormControlLabel control={<Checkbox />} label="ลาวExtra 08:20" />
              <FormControlLabel control={<Checkbox />} label="นิเคอิ เช้า VIP 08:50" />
              <FormControlLabel control={<Checkbox />} label="ชานออยเชียน 09:00" />
              <FormControlLabel control={<Checkbox />} label="นิเคอิ เช้า 09:20" />
              <FormControlLabel control={<Checkbox />} label="ไทยเช้าTV 09:40" />
              <FormControlLabel control={<Checkbox />} label="ฮั่งเส็งเช้า +VIP" />
              <FormControlLabel control={<Checkbox />} label="จีน เช้า VIP 09:50" />
              <FormControlLabel control={<Checkbox />} label="จีนเช้า 10:10" />
              <FormControlLabel control={<Checkbox />} label="ลาวTV 10:15" />
              <FormControlLabel control={<Checkbox />} label="ฮั่งเส็ง เช้า VIP 10:20" />
              <FormControlLabel control={<Checkbox />} label="ฮั่งเส็ง เช้า 10:50" />
              <FormControlLabel control={<Checkbox />} label="ฮานอย HD 11:00" />
              <FormControlLabel control={<Checkbox />} label="ไต้หวัน VIP 11:20" />
              <FormControlLabel control={<Checkbox />} label="ลาวพิเศษ 11:40" />
              <FormControlLabel control={<Checkbox />} label="ไต้หวัน 12:00" />
              <FormControlLabel control={<Checkbox />} label="ฮานอยสตาร์ 12:00" />
            </>
          )}

          {activeSet === "SET 2" && (
            <>
              <FormControlLabel control={<Checkbox />} label="นิเคอิบ่าย +VIP 1" />
              <FormControlLabel control={<Checkbox />} label="จีนบ่าย +VIP 2" />
              <FormControlLabel control={<Checkbox />} label="ฮั่งเส็งบ่าย +VIP 3" />
              <FormControlLabel control={<Checkbox />} label="3 นอยมั่วรวม 6" />
              <FormControlLabel control={<Checkbox />} label="ตำลาวพัฒนา 7" />
              <FormControlLabel control={<Checkbox />} label="รวมสามรัฐ 8" />
              <FormControlLabel control={<Checkbox />} label="รวมดาวโจนส์ 9" />
              <FormControlLabel control={<Checkbox />} label="รัฐบาลไทย 10" />
            </>
          )}

          {activeSet === "SET 3" && (
            <>
              <FormControlLabel control={<Checkbox />} label="ธกส 10:00" />
              <FormControlLabel control={<Checkbox />} label="ออมสิน 13:00" />
              <FormControlLabel control={<Checkbox />} label="ไทย 15:00" />
              <FormControlLabel control={<Checkbox />} label="รัฐบาลไทย 15:00" />
            </>
          )}

          <Button variant="contained" color="primary" sx={{ mt: 3, width: "100%" }}>
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
