import React from "react";

const Testimonials = (props) => {
  return (
    <div className=" mt-12">
      <div className="flex text-black md:w-[30vw] w-[80vw] px-4 py-8 rounded-2xl bg-white">
        <div>
          <div className="flex mb-10">
            <div className="mr-4">
            {props.image}
            </div>
            <div>
              <h3>{props.name}</h3>
              <p>{props.company}</p>
            </div>
          </div>
          <p>{props.description}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonials;
