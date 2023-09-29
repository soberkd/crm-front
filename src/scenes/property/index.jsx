import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProperty } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";


const Properties = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dataPropertyApartment, setDataPropertyApartment] = useState([]); // Initialize apartments as an empty array

  useEffect(() => {
    fetch("https://landsinafrica.com/api/apartments/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        // Set the fetched apartments in the state
        console.log(data.results);
        setDataPropertyApartment(data.results);
        console.log(dataPropertyApartment);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  const [dataPropertyLand, setDataPropertyLand] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://landsinafrica.com/api/Land/");
      const data = await response.json();
      console.log(data);
      setDataPropertyLand(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [listingType, setListingType] = useState("land"); // Default to land

  const getListingData = () => {
    return listingType === "land" ? dataPropertyLand : dataPropertyApartment;
  };
  const getColumns = () => {
    if (listingType === "land") {
      return [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "content", headerName: "Name", flex: 1 },
        { field: "county", headerName: "Location", flex: 1 },
        { field: "realtor", headerName: "Realtor", flex: 0.7 },
        { field: "size", headerName: "Size", flex: 0.5 },
        { field: "price", headerName: "Price", flex: 1 },
        { field: "status", headerName: "Status", flex: 1 },
      ];
    } else {
      return [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "county", headerName: "Location", flex: 0.5 },
        { field: "realtor", headerName: "Realtor", flex: 0.7 },
        { field: "type", headerName: "Type", flex: 1 },
        { field: "beds", headerName: "Bedrooms", flex: 0.4 },
        { field: "baths", headerName: "Bathrooms", flex: 0.4 },
        { field: "cash_price", headerName: "Price", flex: 1 },
        { field: "status", headerName: "Status", flex: 0.6 },
      ];
    }
  };

  const getTitleAndSubtitle = () => {
    if (listingType === "land") {
      return { title: "Lands", subtitle: "List of Lands" };
    } else {
      return { title: "Apartments", subtitle: "List of Apartments" };
    }
  };
  const { title, subtitle } = getTitleAndSubtitle();

  return (
    <Box m="0 20px 10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={title} subtitle={subtitle} />

        <Box>
          <Button
            onClick={() =>
              setListingType(listingType === "land" ? "apartments" : "land")
            }
            variant="outlined"
            sx={{
              backgroundColor: colors.blueAccent[400],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            //   style={{ marginBottom: '10px', backgroundColor: colors.blueAccent[700],
            // }}
          >
            {listingType === "land" ? "Show Apartments" : "Show Lands"}
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddBoxIcon />
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
          rows={getListingData()}
          columns={getColumns()}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Properties;
