import React from "react";

const CurrentPlayerTable = ({ currentPlayers }: any) => {
  return (
    <div className="players-table-wrapper mx-auto px-[13px] pt-[0px] pb-[30px] md:pb-[30px] lg:pb-[40px] 2xl:pb-[45px] overflow-y-auto overflow-x-auto h-[350px] md:h-[430px] lg:h-[528px] xl:h-[528px] 2xl:h-[560px]">
      <div className="players-table-container">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="h-[40px] lg:h-[45px] 2xl:h-[50px]">
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                Telegram Handle
              </td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                Transaction ID
              </td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                Game Type
              </td>
              <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                Lucky Numbers
              </td>
            </tr>
          </thead>
          <tbody
            // style={
            //   currentPlayers.loading
            //     ? { height: "200px", position: "relative" }
            //     : {}
            // }
            className={
              currentPlayers?.loading
                ? "h-[230px] md:h-[320px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] relative"
                : ""
            }
          >
            {currentPlayers?.loading ? (
              <div className="loading-wrapper">
                <div className="loading"></div>
              </div>
            ) : (
              <>
                {currentPlayers?.data?.map((data: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="h-[50px] lg:h-[55px] 2xl:h-[57px]"
                    >
                      <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-[#76C9ED] players-table-text whitespace-nowrap">
                        {data?.telegram_handle}
                      </td>
                      <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                        {data?.transaction_id}
                      </td>
                      <td className="text-[14px] lg:text-[15px] 2xl:text-[16px] text-white players-table-text whitespace-nowrap">
                        {data?.game_type?.type_name}
                      </td>
                      <td className="text-[14px] lg:text-[16px] 2xl:text-[19px] text-white players-table-text whitespace-nowrap">
                        <div className="flex items-center gap-x-[10px]">
                          {data?.added_numbers
                            ?.split(",")
                            .map((numbers: any) => {
                              return (
                                <div className="players-number flex items-center justify-center">
                                  {numbers}
                                </div>
                              );
                            })}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentPlayerTable;
