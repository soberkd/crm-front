import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataClients } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";


const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "clientName",
      headerName: "Client Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "clientType",
      headerName: "Client Type",
      flex: 1,
    },
    {
      field: "contactInformation",
      headerName: "Contact Information",
      flex: 0.5,
    },
    {
      field: "numberOfPropertiesListed",
      headerName: "Properties Listed",
      flex: 0.5,
    },
    {
      field: "numberOfPropertiesSold",
      headerName: "Properties Sold",
      flex: 0.5,
    },
    {
      field: "totalSalesRevenue",
      headerName: "Sales Revenue",
      flex: 1,
    },
    {
      field: "activeListings",
      headerName: "Active Listings",
      flex: 0.5,
    },
    {
      field: "propertiesUnderContract",
      headerName: "Under Contract",
      flex: 0.5,
    },
  ];

  return (
    <Box m="0 20px 10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CLIENTS" subtitle="List of Clients information" />
        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/clientform")}
          >
            <AddBoxIcon />
          </Button>
        </Box> */}
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
          rows={mockDataClients}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Clients;
