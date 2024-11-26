import React from "react";
import Navbar from "../components/layouts/navbar";
import Cube from "../components/atoms/cubes";
import Cards from "../components/atoms/cards";
import Footer from "../components/layouts/footer";
import Hero from "../components/layouts/hero";



function Home() {
  return (
    <div 
      className="min-h-screen relative flex flex-col" 
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Background flares */}
      <div
        className="absolute inset-0 z-0"
        // style={{
        //   backgroundImage: `
        //     radial-gradient(circle, rgba(131,34,50,0.125), rgba(180,151,214,0.125), transparent 50%);
        //     radial-gradient(circle, rgba(131,34,50,0.125), rgba(180,151,214,0.125), transparent 50%);
        //   `,
        // }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />       
        <Cube />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}


export default Home;