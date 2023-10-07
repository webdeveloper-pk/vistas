import React from "react";
import PlayersTab from "../presentation/PlayersTab";

const players = [
  {
    user: "@user1",
    transection: "#12212122212",
    type: "Lucky5 + PowerReveal",
    winNumbers: ["1", "6", "3", "14"],
  },
  {
    user: "@Cryptosdt",
    transection: "#12212122212",
    type: "Lucky5 Jackpot",
    winNumbers: ["11", "15", "23", "18"],
  },
  {
    user: "@Headeuye",
    transection: "#12212122212",
    type: "Lucky5 + PowerReveal",
    winNumbers: ["66", "58", "59", "14", "4"],
  },
  {
    user: "@Userhdhe",
    transection: "#12212122212",
    type: "Lucky5 Jackpot",
    winNumbers: ["45", "94", "25", "74"],
  },
  {
    user: "@ItmeDarryl",
    transection: "#12212122212",
    type: "Lucky5 Jackpot",
    winNumbers: ["1", "6", "3", "14"],
  },
  {
    user: "@Cdmenes",
    transection: "#12212122212",
    type: "Lucky5 Jackpot",
    winNumbers: ["34", "97", "17", "15", "66"],
  },
];

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

const PlayersTabContainer = () => {
  return <PlayersTab players={players} winners={winners} />;
};

export default PlayersTabContainer;
