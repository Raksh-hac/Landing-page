import React from "react";

function Hero() {
    return(
        <div>
            <section
          className="self-stretch flex flex-row items-start justify-center py-0 pl-[1.625rem] pr-[1.25rem] box-border max-w-full mt-[6%] mb-[10%] text-center text-neutral-200"
          style={{
            backgroundColor: "transparent", // Transparent background for the section
          }}
        >
          <div className="w-[40rem] flex flex-col items-start justify-start max-w-full">
            <h1 
              className="m-0 tracking-[0.1em] capitalize font-bold"
              style={{
                fontSize: '65px',
                fontWeight: 'bold',
                fontFamily: 'Calibri',
              }}
            >
              Innovate Fearlessly
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[4.187rem] pr-[4.687rem] box-border max-w-full text-[0.875rem]">
              <div className="flex-1 tracking-[0.08em] capitalize">
                <p className="[margin-block-start:0] [margin-block-end:4px]" style={{ fontSize: '14px', fontFamily: 'Calibri' }}>
                  <b>Game and Web Development</b>
                  <span className="font-light">{` for Visionary Creators. `}</span>
                </p>
                <p className="m-0" style={{ fontSize: '14px', fontFamily: 'Calibri' }}>
                  <span className="font-light">{`Explore Our Comprehensive Web and Game Development Services & Assets. `}</span>
                  <b>
                    Your One-Stop Shop for all your Game and Web Development
                    essentials
                  </b>
                  <span className="font-light">.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Hero;