import React from "react";

const winners = [
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["01", "52", "16", "16", "16", "16", "16"],
  },
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["69", "73", "72", "83", "14", "14", "14"],
  },
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["43", "73", "72", "83", "14"],
  },
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["32", "46", "27", "34", "13"],
  },
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["15", "38", "37", "38", "39"],
  },
  {
    user: "@user1",
    prize: "$500",
    type: "Lucky5 Jackpot",
    winNumbers: ["84", "47", "83", "16", "73"],
  },
];
const Winners = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[110px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        Here we got the winners
      </h1>
      <div className="mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px]">
        <div className="winners-table-wrapper mx-auto px-[13px] pt-[10px] pb-[15px] md:pt-[10px] md:pb-[17px]">
          <div className="table-container">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="h-[40px] lg:h-[45px] 2xl:h-[50px]">
                  <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap">
                    Telegram Handle
                  </td>
                  <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap">
                    Prize
                  </td>
                  <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap">
                    Game Type
                  </td>
                  <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap">
                    Winning Number
                  </td>
                </tr>
              </thead>
              <tbody>
                {winners?.map((data: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="h-[50px] lg:h-[55px] 2xl:h-[57px]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <td
                        className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                      >
                        {data?.user}
                      </td>
                      <td
                        className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                      >
                        {data?.prize}
                      </td>
                      <td
                        className="text-[14px] lg:text-[15px] 2xl:text-[16px] table-text whitespace-nowrap"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                      >
                        {data?.type}
                      </td>
                      <td
                        className="text-[14px] lg:text-[16px] 2xl:text-[19px] table-text whitespace-nowrap"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                      >
                        <div
                          className="flex items-center gap-x-[10px]"
                          data-aos="fade-down"
                          data-aos-duration="1500"
                        >
                          {data?.winNumbers?.map((numbers: any) => {
                            return (
                              <div className="winners-number flex items-center justify-center">
                                {numbers}
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
