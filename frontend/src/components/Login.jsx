import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom"; // สำหรับการ Redirect
import logo from '../assets/logo.png';
import background from "../assets/background.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const navigate = useNavigate(); // ใช้สำหรับการเปลี่ยนเส้นทางไปยังหน้าอื่น

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setSeverity("error");
      setMessage("Please enter both username and password");
      setOpen(true); // เปิดการแจ้งเตือน
      return;
    }
    setLoading(true); // เริ่มแสดง loader

    // จำลองการเข้าสู่ระบบด้วย setTimeout
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        setSeverity("success");
        setMessage("Login successful");
        setOpen(true); // แสดงแจ้งเตือนสำเร็จ
        navigate("/dashboard"); // เปลี่ยนเส้นทางไปยังหน้า Dashboard
      } else {
        setSeverity("error");
        setMessage("Invalid username or password");
        setOpen(true); // แสดงแจ้งเตือนข้อผิดพลาด
      }
      setLoading(false); // หยุดแสดง loader
    }, 1000); // จำลองเวลาโหลด 1 วินาที
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'Prompt, sans-serif', // เพิ่มฟอนต์ที่นี่
      }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: 'Prompt, sans-serif', // เพิ่มฟอนต์ที่นี่
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "transparent",
              marginBottom: 2,
            }}
          >
            <img src={logo} alt="logo" style={{ width: "100%" }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2, fontFamily: 'Prompt, sans-serif' }}>
            เข้าสู่ระบบ
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginBottom: 2, fontFamily: 'Prompt, sans-serif' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2, fontFamily: 'Prompt, sans-serif' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginBottom: 2, fontFamily: 'Prompt, sans-serif' }}
              disabled={loading} // ปิดปุ่มระหว่างโหลด
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </Paper>
      </Grid>

      {/* แสดง Snackbar สำหรับการแจ้งเตือน */}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
