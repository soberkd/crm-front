import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import SideBar from "./scenes/global/Sidebar";
import Bookings from "./scenes/bookings";
import Clients from "./scenes/clients";
import Tasks from "./scenes/tasks";
import BookingDetail from "./scenes/bookings/BookingDetail";
import Properties from "./scenes/property";
import FormApartment from "./scenes/form/FormApartement";
import FormLand from "./scenes/form/FormLand";
import FormBooking from "./scenes/form/FormBooking";
import FormClients from "./scenes/form/FormClient";
import FormInvoice from "./scenes/form/FormInvoice";
import { mockDataBooking } from "./data/mockData";
import { Login } from "@mui/icons-material";
import SignUpPage from "./scenes/auth/SignUp";
import LoginPage from "./scenes/auth/Login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/bookings/:bookingId" element={<BookingDetail booking={mockDataBooking} />} />
              {/* <Route path="/bookings/:id" element={<BookingDetail />} /> */}
              <Route path="/formapartment" element={<FormApartment />} />
              <Route path="/landform" element={<FormLand />} />
              <Route path="/bookingform" element={<FormBooking />} />
              <Route path="/clientform" element={<FormClients />} />
              <Route path="/invoiceform" element={<FormInvoice />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<SignUpPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
