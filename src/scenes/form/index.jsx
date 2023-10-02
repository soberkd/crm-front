import { Box, Button, TextField, Select, MenuItem  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD NEW LEADS" subtitle="Add New Lead Info" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          // touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1.5" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 1.5" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                // error={!!touched.address1 && !!errors.address1}
                // helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Land Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.landLocation}
                name="landLocation"
                // error={!!touched.landLocation && !!errors.landLocation}
                // helperText={touched.landLocation && errors.landLocation}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Agent"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.agent}
                name="agent"
                // error={!!touched.agent && !!errors.agent}
                // helperText={touched.agent && errors.agent}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Land Size"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.landSize}
                name="landSize"
                // error={!!touched.landSize && !!errors.landSize}
                // helperText={touched.landSize && errors.landSize}
                sx={{ gridColumn: "span 1" }}
              />
             <Select
                fullWidth
                variant="standard"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                // error={!!touched.status && !!errors.status}
                sx={{ gridColumn: "span 1" }}
              >
                {/* Dropdown menu options */}
                <MenuItem value="Inquiry">Inquiry</MenuItem>
                <MenuItem value="Needs Assessment">Needs Assessment</MenuItem>
                <MenuItem value="Property Search">Property Search</MenuItem>
                <MenuItem value="Property Selection">Property Selection</MenuItem>
                <MenuItem value="Site Visit">Site Visit</MenuItem>
                <MenuItem value="Negotiation">Negotiation</MenuItem>
                <MenuItem value="Under Contract">Under Contract</MenuItem>
                <MenuItem value="Financing Approval">Financing Approval</MenuItem>
                <MenuItem value="Payment">Payment</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" sx={{ mb: 10,}}>
                Add New Client
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string(),
  landLocation: yup.string(),
  agent: yup.string().required("required"),
  landSize: yup.string().required("required"),
  status: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  landLocation: "",
  agent: "",
  landSize: "",
  status: "",
};

export default Form;
