import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const FormLand = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    // Perform further actions with the form values, such as submitting to a server
  };

  return (
    <Box m="20px">
      <Header title="ADD NEW LAND" subtitle="Add a New Land Info" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={landSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* Location Information */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="County"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.county}
                name="county"
                error={!!touched.county && !!errors.county}
                helperText={touched.county && errors.county}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sub County"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sub_county}
                name="sub_county"
                error={!!touched.sub_county && !!errors.sub_county}
                helperText={touched.sub_county && errors.sub_county}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ward"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ward}
                name="ward"
                error={!!touched.ward && !!errors.ward}
                helperText={touched.ward && errors.ward}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Specific Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.specific_location}
                name="specific_location"
                error={
                  !!touched.specific_location && !!errors.specific_location
                }
                helperText={
                  touched.specific_location && errors.specific_location
                }
                sx={{ gridColumn: "span 4" }}
              />

              {/* Property Details */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                label="Property Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.content}
                name="content"
                error={!!touched.content && !!errors.content}
                helperText={touched.content && errors.content}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Coordinates */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Enter Latitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.enter_latitude}
                name="enter_latitude"
                error={!!touched.enter_latitude && !!errors.enter_latitude}
                helperText={touched.enter_latitude && errors.enter_latitude}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Center Longitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.center_longitude}
                name="center_longitude"
                error={
                  !!touched.center_longitude && !!errors.center_longitude
                }
                helperText={
                  touched.center_longitude && errors.center_longitude
                }
                sx={{ gridColumn: "span 2" }}
              />

              {/* Additional Coordinates */}
              {["A", "B", "C", "D"].map((point) => (
                <React.Fragment key={point}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Point ${point} Latitude`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[`point${point}_latitude`]}
                    name={`point${point}_latitude`}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Point ${point} Longitude`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[`point${point}_longitude`]}
                    name={`point${point}_longitude`}
                    sx={{ gridColumn: "span 2" }}
                  />
                </React.Fragment>
              ))}

              {/* Additional Images */}
              {[...Array(3)].map((_, index) => (
                <TextField
                  key={index}
                  fullWidth
                  variant="filled"
                  type="text"
                  label={`Image ${index + 1}`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[`image${index + 1}`]}
                  name={`image${index + 1}`}
                  sx={{ gridColumn: "span 4" }}
                />
              ))}
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Land
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Validation schema for land-specific fields
const landSchema = yup.object().shape({
  enter_latitude: yup.string().required("required"),
  center_longitude: yup.string().required("required"),
  content: yup.string().required("required"),
  country: yup.string().required("required"),
  county: yup.string().required("required"),
  sub_county: yup.string().required("required"),
  ward: yup.string().required("required"),
  price: yup.string().required("required"),
  specific_location: yup.string().required("required"),
  // ... Add validation for other fields ...
});

// Initial values for land-specific fields
const initialValues = {
  enter_latitude: "",
  center_longitude: "",
  content: "",
  country: "",
  county: "",
  sub_county: "",
  ward: "",
  price: "",
  specific_location: "",
  // ... Initialize other fields ...
  pointA1_latitude: "",
  pointA1_longitude: "",
  pointA_latitude: "",
  pointA_longitude: "",
  pointB_latitude: "",
  pointB_longitude: "",
  pointC_latitude: "",
  pointC_longitude: "",
  pointD_latitude: "",
  pointD_longitude: "",
  image1: "",
  image2: "",
  image3: "",
};

export default FormLand;
