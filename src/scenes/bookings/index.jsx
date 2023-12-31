import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataBooking } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";


const Bookings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleRowClick = (params, bookingData) => {
    const bookingId = params.row.id;
    navigate(`/bookings/${bookingId}`);
  };

  const columns = [
    { field: "id", headerName: "Booking ID", flex: 0.5 },
    { field: "propertyID", headerName: "Property ID", flex: 0.5 },
    {
      field: "buyerName",
      headerName: "Buyer's Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "agent",
      headerName: "Agent",
      flex: 0.7,
    },
    {
      field: "eventDateTime",
      headerName: "Due Date/Time",
      flex: 1,
    },
    {
      field: "bookingAmount",
      headerName: "Booking Amount",
      flex: 1,
    },
    {
      field: "paymentmode",
      headerName: "Payment Mode",
      flex: 0.5,
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      flex: 0.5,
    },
  ];

  return (
    <Box m="0 20px 10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BOOKINGS" subtitle="List of Bokings" />{" "}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/bookingform")}

          >
            <AddBoxIcon sx={{ mr: "10px" }} />
            Add Booking
          </Button>
        </Box>
      </Box>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataBooking}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Bookings;
