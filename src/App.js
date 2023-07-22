import Doctors from "./user/containers/Doctors";
import Footer from "./user/component/Footer";
import Header from "./user/component/Header";
import Home from "./user/containers/Home";
import About from "./user/containers/About"
import Departments from "./user/containers/Departments";
import Contect from "./user/containers/Contect";
import Contect1 from "./user/containers/Contect1";
import Appoinment from "./user/containers/Appointment";
import Doctor from "./user/containers/Doctor";
import { Route, Routes } from "react-router-dom";
import VisitingDoctor from "./user/containers/VisitingDoctor";
import NotFound from "./user/component/NotFound";
import Auth from "./user/containers/Auth";
import Layout from "./admin/components/Layout";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
// import Auth2 from "./containers/Auth2";


function App() {
  const store = configureStore();
  return (
    // <>
    // {/* <Layout /> */}
    //   {/* <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Departments" element={<Departments />} />
    //     <Route path="/Doctors" element={<Doctors />} />
    //     <Route path="/Countact" element={<Contect1 />} />
    //     <Route path="/Appoinment" element={<Appoinment />} />
    //     <Route path="/Auth" element={ <Auth /> } /> */}
    //     {/* <Route path="/Doctor/:id" element={<Doctor />} />
    //     <Route path="/Doctor/Visiting_Doctor" element={ <VisitingDoctor /> } /> */}

    //     {/* <Route path="/Doctor/">
    //       <Route path=":id" element={ <Doctor /> } />
    //       <Route path="Visiting_Doctor" element={ <VisitingDoctor /> } />
    //     </Route>
    //     <Route path="*" element={ <NotFound /> } />
    //   </Routes>
    //   <Footer /> */}
    // </>
   
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Provider>
  );
}


export default App;
