import React from 'react';

const PiIncentives = () => {
  return (
    <section className="py-[20px] md:py-[120px] lg:py-[120px] bg-[#F7F7F7] px-4 md:px-[68px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Adjusted gap to match the Figma visual balance */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">

          <div className="w-full lg:w-1/2 flex flex-col justify-between py-2 lg:py-6">
            <div>
              <h2 className="font-primary text-[28px] md:text-[36px] font-medium leading-[36px] md:leading-[48px] text-text-primary mb-5 md:mb-6">
                Government Subsidies Reduce<br className="hidden md:block" /> Your Initial Investment
              </h2>
              <p className="font-primary text-[15px] md:text-[16px] font-normal leading-[26px] md:leading-[29px] text-[#4A4A4A] md:max-w-[88%]">
                Eligible hydroponics projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
              </p>
            </div>

            <p className="font-primary text-[13px] md:text-[14px] text-[#808080] mt-10 lg:mt-0">
              *Availability depends on project eligibility and applicable state or central government schemes.
            </p>
          </div>
          <div className="w-full lg:w-[35%] lg:ml-auto">
            <div className="w-full rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white border border-black/5">

              <img
                src="/Shared/AgriInfrastructure_HorticultureBoard.jpg"
                alt="Government Subsidy Schemes"
                className="w-full h-auto block"
              />

            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default PiIncentives;
