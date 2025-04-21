"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  CircularProgress,
  Paper,
  Alert,
} from "@mui/material";
// import { toast } from "react-toastify";
import { submitCourseRequest } from "@/server/api";
import { CourseContext } from "@/context/courseContext";
import { toast } from "react-toast";

const availableCourses = [
  { name: "Navigator 9th", price: 7499 },
  { name: "Navigator 10th", price: 7499 },
  { name: "Nirmaan Batch IIT-JEE 11th", price: 8999 },
  { name: "Nirmaan Batch NEET 11th", price: 8999 },
  { name: "Nischay  Batch NEET 12th", price: 8999 },
  { name: "Nischay Batch IIT- JEE 12th", price: 8999 },
];

const validCoupons: Record<string, number> = {
  LNP10: 0.2,
};

const ModernForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState(availableCourses[0]);
  const [query, setQuery] = useState("");
  const [coupon, setCoupon] = useState("LNP10");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const context = useContext(CourseContext);

  useEffect(() => {
    if (context.title) {
      const selected = availableCourses.find((c) => c.name === context.title);
      if (selected) setCourse(selected);
    }
  }, [context]);

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (validCoupons[code]) {
      setDiscount(500);
      setAppliedCoupon(code);
    } else {
      setDiscount(0);
      setAppliedCoupon("");
      toast.error("Invalid coupon code!");
    }
  };

  const handleCheckout = () => {
    if (!(name && mobile)) {
      toast.error("Please fill all the details");
      return;
    }
    setLoading(true);
    const checkout = {
      name,
      mobile,
      course: course.name,
      query,
      appliedCoupon,
      totalAmount,
      coupon,
    };

    submitCourseRequest(checkout)
      .then(() => toast.success("Request submitted successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("Failed to submit request");
      })
      .finally(() => setLoading(false));
  };

  const totalAmount = course.price - discount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="form"
      className="my-10"
    >
      <Paper
        elevation={4}
        sx={{ maxWidth: 600, mx: "auto", p: 4, borderRadius: 3 }}
      >
        <Typography variant="h4" textAlign="center" mb={3} color="primary">
          Course Enrollment Form
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel>Select Course</InputLabel>
            <Select
              value={course.name}
              label="Select Course"
              onChange={(e) => {
                const selected = availableCourses.find(
                  (c) => c.name === e.target.value
                );
                if (selected) setCourse(selected);
              }}
            >
              {availableCourses.map((c) => (
                <MenuItem key={c.name} value={c.name}>
                  {c.name} - ₹{c.price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Your Query"
            variant="outlined"
            multiline
            rows={3}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Box display="flex" gap={2}>
            <TextField
              fullWidth
              label="Coupon Code"
              variant="outlined"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <Button variant="contained" onClick={handleApplyCoupon}>
              Apply
            </Button>
          </Box>
          <div className="text-green-500 text-[10px]">
            get upto 500 off with LNP10 coupon 🎉✨✨
          </div>
          {appliedCoupon && (
            <Alert severity="success">
              Coupon <strong>{appliedCoupon}</strong> applied! 🎉
            </Alert>
          )}

          <Paper
            elevation={1}
            className="flex lg:flex-row flex-col justify-between items-center"
            sx={{
              p: 2,
              backgroundColor: "indigo.100",

              borderRadius: 2,
              mt: 1,
            }}
          >
            <Typography variant="subtitle1">
              Total Amount: <strong>₹{totalAmount}</strong>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled={loading}
              sx={{ minWidth: 180 }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Proceed to Enquiry"
              )}
            </Button>
          </Paper>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default ModernForm;
