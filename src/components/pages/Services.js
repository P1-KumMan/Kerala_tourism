import React from "react";
import "../../App.css";
import { ServicesCard } from "../ServicesCard";
import Footer from "../Footer";

export default function Services() {
  return (
    <div>
      <h1 className="services">SERVICES</h1>
      <ServicesCard />
      <Footer />
    </div>
  );
}
