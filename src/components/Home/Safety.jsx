const Safety = () => {
  return (
    <>
      <div className="text-center mt-[150px]">
        <h1 className="text-black text-5xl font-bold mb-5 uppercase">
          Safety measures in Place
        </h1>

        <p className="mb-5 text-grey">
          We do everything to ensure the health, safety and well-being of <br />{" "}
          our students and employees.Additional information can be found here
        </p>

        <p className="cursor-pointer w-fit px-8 py-3 border {3px solid white} bg bg-navcolor rounded-md text-xl mx-auto text-white mb-8 hover:bg-white hover:text-navcolor hover:border-2 hover:border-black">
          {" "}
          Safety Measures
        </p>
      </div>
      <div className="grid grid-cols-2 w-[90%] mt-16 mx-auto ">
        <img
          src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_848,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
          alt="..."
        />
        <div className="bg-black text-center text-white flex items-center justify-center flex-col gap-20">
          <h1 className="text-navcolor mt-5 text-4xl">Student Life</h1>
          <p className="text-grey text-xl">
          I'm a paragraph. Click here to add <br /> your own text and edit me. It’s
            easy. <br /> Just click “Edit Text” or double click me <br /> to add your own
            content and make  <br /> changes to the font.{" "}
          </p>
          <p className="cursor-pointer w-fit px-8 py-3 border {3px solid white} bg bg-navcolor rounded-md text-xl mx-auto text-white mb-8 hover:bg-white hover:text-navcolor hover:border-2 hover:border-black">
            {" "}
            Student Information
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[90%] mx-auto">
        <div className="bg-black text-center text-white flex items-center justify-center flex-col gap-20">
          <h1 className="text-navcolor mt-5 text-4xl">Open Enrollment</h1>
          <p className="text-grey text-xl">
            I'm a paragraph. Click here to add <br /> your own text and edit me. It’s
            easy. <br /> Just click “Edit Text” or double click me <br /> to add your own
            content and make  <br /> changes to the font.{" "}
          </p>
          <p className="cursor-pointer w-fit px-8 py-3 border {3px solid white} bg bg-navcolor rounded-md text-xl mx-auto text-white mb-8 hover:bg-white hover:text-navcolor hover:border-2 hover:border-black">
            {" "}
            Student Information
          </p>
        </div>
        <img
          src="https://static.wixstatic.com/media/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg/v1/fill/w_848,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_c8de1e6e955d459aa01defe9f5971dad~mv2.jpg"
          alt="..."
        />
      </div>
    </>
  );
};

export default Safety;
