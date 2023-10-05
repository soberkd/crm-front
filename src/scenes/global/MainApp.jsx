import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../global/Topbar";
import Dashboard from "../dashboard";
import Team from "../team";
import Invoices from "../invoices";
import Contacts from "../contacts";
import Bar from "../bar";
import Form from "../form";
import Line from "../line";
import Pie from "../pie";
import Geography from "../geography";
import { useMode } from "../../theme";
import Calendar from "../calendar/calendar";
import SideBar from "../global/Sidebar";
import Bookings from "../bookings";
import Clients from "../clients";
import Tasks from "../tasks";
import BookingDetail from "../bookings/BookingDetail";
import Properties from "../property";
import FormApartment from "../form/FormApartement";
import FormLand from "../form/FormLand";
import FormBooking from "../form/FormBooking";
import FormClients from "../form/FormClient";
import FormInvoice from "../form/FormInvoice";
import { mockDataBooking } from "../../data/mockData";

function MainApp({onLogout}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <SideBar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} onLogout={onLogout} />
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
          <Route
            path="/bookings/:bookingId"
            element={<BookingDetail booking={mockDataBooking} />}
          />
          {/* <Route path="/bookings/:id" element={<BookingDetail />} /> */}
          <Route path="/formapartment" element={<FormApartment />} />
          <Route path="/landform" element={<FormLand />} />
          <Route path="/bookingform" element={<FormBooking />} />
          <Route path="/clientform" element={<FormClients />} />
          <Route path="/invoiceform" element={<FormInvoice />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default MainApp;
