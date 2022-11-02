import React from "react";

const Image = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-6/12 sm:w-4/12 px-4">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
          alt="..."
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
};

export default Image;
