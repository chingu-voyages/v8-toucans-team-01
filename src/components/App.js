import React from "react";
import Service from "./section_3_services/Services";
import Clients from "./section_5_clients/Clients";
import Map from  "./section_7_map/Map"
import Footer from "./section_8_footer/Footer"

const App = () => {
  return (
    <div>
      <Service />
      <Clients />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
