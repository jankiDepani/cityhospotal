// import Doctors from "./user/containers/Doctors";
// import Footer from "./user/component/Footer";
// import Header from "./user/component/Header";
// import Home from "./user/containers/Home";
// import About from "./user/containers/About"
// import Departments from "./user/containers/Departments";
// import Contect from "./user/containers/Contect";
// import Contect1 from "./user/containers/Contect1";
// import Appoinment from "./user/containers/Appointment";
// import Doctor from "./user/containers/Doctor";
import { Route, Routes } from "react-router-dom";
// import VisitingDoctor from "./user/containers/VisitingDoctor";
// import NotFound from "./user/component/NotFound";
// import Auth from "./user/containers/Auth";
// import Layout from "./admin/components/Layout";
import UserRoute from "./Routes/UserRoute";
import AdminRoute from "./Routes/Adminroute";
import { Provider } from "react-redux";
import { configerStore } from "./redux/store";
// import Auth2 from "./containers/Auth2";


function App() {
  const store = configerStore();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Provider>

  );
}


export default App;
