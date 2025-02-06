import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Academics from "../Pages/Academics";
import Admission from "../Pages/Admission";
import Events from "../Pages/Events";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import Overview from "../components/Academics/Overview";
import FFCS from "../components/Academics/FFCS";
import Council from "../components/Academics/Council";
import Library from "../components/Academics/Library";
import Feedback from "../components/Academics/Feedback";
import AdOverview from "../components/Admission/AdOverview";
import Undergraduate from "../components/Admission/Undergraduate";
import Postgraduate from "../components/Admission/Postgraduate";
import Campus from "../Pages/Campus";
import Photo from "../components/Campus/Photo";
import Hostel from "../components/Campus/Hostel";
import CampusGallery from "../components/Campus/CampusGallery";
import Video from "../components/Campus/Video";
import FixedBottom from "../components/global/FixedBottom";
import ErrorPage from "../Pages/ErrorPage";

const Index = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/Academics/overview" element={<Overview />} />
        <Route path="/Academics/Council" element={<Council />} />
        <Route path="/Academics/FFCS" element={<FFCS />} />
        <Route path="/Academics/Library" element={<Library />} />
        <Route path="/Academics/Feedback" element={<Feedback />} />
        <Route path="/Admission/AdOverview" element={<AdOverview />} />
        <Route path="/Admission/Undergraduate" element={<Undergraduate />} />
        <Route path="/Admission/Postgraduate" element={<Postgraduate />} />
        <Route path="/Campus" element={<Campus />} />
        <Route path="/Campus/Photo" element={<Photo />} />
        <Route path="/Campus/Video" element={<Video />} />
        <Route path="/Campus/CampusGallery" element={<CampusGallery />} />
        <Route path="/Campus/Hostel" element={<Hostel />} />/
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <FixedBottom />
    </Router>
  );
};

export default Index;
