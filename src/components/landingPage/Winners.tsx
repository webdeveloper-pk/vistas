import React from "react";
import WinnersTable from "../common/WinnersTable";

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
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[50px] md:pb-[60px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[114px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        Here we got the winners
      </h1>
      <div className="mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] winners-table-outer-wrapper mx-auto table-container winners-table-container overflow-auto">
        <WinnersTable winners={winners} />
      </div>
    </div>
  );
};

export default Winners;
