import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTasks } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";


const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        // { field: "registrarId", headerName: "Registrar ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Task Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.7,
    },
    {
      field: "assigned",
      headerName: "Assigned To",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },
    {
      field: "duedate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];

  return (
    <Box m="0 20px 10px 20px">
       <Box display="flex" justifyContent="space-between" alignItems="center">
       <Header
        title="TASKS"
        subtitle="List of Tasks"
      />        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddBoxIcon sx={{ mr: "10px" }} />
            Add Tasks
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
          rows={mockDataTasks}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Tasks;
