import React from "react";

const Aboutus = () => {
  return (
    <div className="w-full h-auto pt-7">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl text-bold">Core To Value</h1>
          <div className="w-[20%] h-[.4vh] bg-amber-300 mx-auto lg:mx-0 mt-5 mb-5"></div>
          <p>
            With the aim to take the lead in the advanced global EPC market, we
            provide various services for areas ranging from project development,
            engineering, procurement, construction, and commissioning to O&M.{" "}
          </p>
        </div>
        <div>
          <div className="w-full h-[300px] bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
