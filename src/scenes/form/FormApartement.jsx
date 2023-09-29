import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const FormApartment = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    // Perform further actions with the form values, such as submitting to a server
  };

  return (
    <Box m="20px">
      <Header title="ADD NEW APARTMENT" subtitle="Add a New Apartment Info" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={apartmentSchema}
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
              {/* Basic Information Fields */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number of Beds"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.beds}
                name="beds"
                error={!!touched.beds && !!errors.beds}
                helperText={touched.beds && errors.beds}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number of Baths"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.baths}
                name="baths"
                error={!!touched.baths && !!errors.baths}
                helperText={touched.baths && errors.baths}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cash Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cash_price}
                name="cash_price"
                error={!!touched.cash_price && !!errors.cash_price}
                helperText={touched.cash_price && errors.cash_price}
                sx={{ gridColumn: "span 3" }}
              />

              {/* Amenities Checkboxes */}
              {Array.from({ length: 15 }, (_, index) => index + 1).map(
                (amenityIndex) => (
                  <Box key={amenityIndex}>
                    <label>
                      <input
                        type="checkbox"
                        name={`amenities${amenityIndex}`}
                        checked={values[`amenities${amenityIndex}`]}
                        onChange={handleChange}
                      />
                      {`Amenity ${amenityIndex}`}
                    </label>
                  </Box>
                )
              )}

              {/* Property Description */}
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
                sx={{ gridColumn: "span 3" }}
              />

              {/* Property Images */}
              {[...Array(5)].map((_, index) => (
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
                  sx={{ gridColumn: "span 3" }}
                />
              ))}
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Apartment
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Extend your existing validation schema for apartment-specific fields
const apartmentSchema = yup.object().shape({
  beds: yup.string().required("required"),
  baths: yup.string().required("required"),
  cash_price: yup.string().required("required"),
  content: yup.string().required("required"),
  country: yup.string().required("required"),
  county: yup.string().required("required"),
  specific_location: yup.string().required("required"),
  // ... Add validation for other fields ...
});

// Extend your existing initial values for apartment-specific fields
const initialValues = {
  beds: "",
  baths: "",
  cash_price: "",
  content: "",
  country: "",
  county: "",
  specific_location: "",
  // ... Initialize other fields ...
  amenities1: false,
  amenities2: false,
  amenities3: false,
  // ... Initialize other amenities to false ...
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
};

export default FormApartment;
