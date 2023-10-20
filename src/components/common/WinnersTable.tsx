import React from "react";
import { useLocation } from "react-router-dom";

const WinnersTable = ({ data, loading }: any) => {
  console.log("data::: ", data);
  const location = useLocation();
  return (
    <div
      className={`winners-table-wrapper mx-auto px-[13px] pb-[15px] md:pb-[17px] overflow-y-auto overflow-x-auto h-[300px] md:h-[380px] lg:h-[450px] 2xl:h-[480px] ${
        location?.pathname === "/" ? "pt-[10px] mr-[0px]" : "lg:mr-[15px]"
      }`}
    >
      <div className="winners-table-container overflow-auto">
        <table className="w-full border-separate border-spacing-y-3 overflow-auto">
          <thead>
            <tr className="h-[40px] lg:h-[45px] 2xl:h-[50px]">
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap">
                Telegram Handle
              </td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap">Prize</td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap">
                Game Type
              </td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap">
                Winning Number
              </td>
            </tr>
          </thead>
          <tbody style={loading || data.length === 0 ? { height: "320px", position: "relative" } : {}}>
            {loading ? (
              <div className="loading-wrapper">
                <div className="loading"></div>
              </div>
            ) : (
              <>
                {data.length > 0 ? (
                  data?.map((content: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="h-[50px] lg:h-[55px] 2xl:h-[57px]"
                        data-aos={location?.pathname === "/" ? "fade-up" : ""}
                        data-aos-duration={location?.pathname === "/" ? "1000" : ""}
                      >
                        <td
                          className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap"
                          data-aos={location?.pathname === "/" ? "fade-down" : ""}
                          data-aos-duration={location?.pathname === "/" ? "1500" : ""}
                        >
                          {content?.telegram_handle}
                        </td>
                        <td
                          className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap"
                          data-aos={location?.pathname === "/" ? "fade-down" : ""}
                          data-aos-duration={location?.pathname === "/" ? "1500" : ""}
                        >
                          {content?.event?.price}
                        </td>
                        <td
                          className="text-[14px] lg:text-[15px] 2xl:text-[16px] winners-table-text whitespace-nowrap"
                          data-aos={location?.pathname === "/" ? "fade-down" : ""}
                          data-aos-duration={location?.pathname === "/" ? "1500" : ""}
                        >
                          {content?.game_type?.type_name}
                        </td>
                        <td
                          className="text-[14px] lg:text-[16px] 2xl:text-[19px] winners-table-text whitespace-nowrap"
                          data-aos={location?.pathname === "/" ? "fade-down" : ""}
                          data-aos-duration={location?.pathname === "/" ? "1500" : ""}
                        >
                          <div
                            className="flex items-center gap-x-[10px]"
                            data-aos={location?.pathname === "/" ? "fade-down" : ""}
                            data-aos-duration={location?.pathname === "/" ? "1500" : ""}
                          >
                            {content?.added_numbers?.split(",").map((numbers: any) => {
                              return <div className="winners-number flex items-center justify-center">{numbers}</div>;
                            })}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="loading-wrapper text-[14px] lg:text-[16px] 2xl:text-[19px] winners-table-text whitespace-nowrap">
                    <p className="noData">We Do not have a winners yet</p>
                  </div>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinnersTable;
