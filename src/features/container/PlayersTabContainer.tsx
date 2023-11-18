import React from "react";
import PlayersTab from "../presentation/PlayersTab";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlayersTabContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<any>({
    telegram: "",
    win_num: "",
  });
  const [selectedGame, setSelectedGame] = React.useState<any>("");
  // console.log("selectedGame::: ", selectedGame);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [entries, setEntries] = React.useState({
    telegram_handle: "",
    transaction_id: "",
    game_type: "",
    added_numbers: "",
  });

  const [gameTypes, setGamesTypes] = React.useState({ loading: false, data: [], success: false });

  const [entriesData, setEntriesData] = React.useState({ loading: false, data: [], success: false });
  const [sets, setSets] = React.useState<Array<string | number[]>>([""]);
  // console.log("sets::: ", sets);
  const [currentPlayers, setCurrentPlayers] = React.useState({ loading: false, data: [], success: false });

  const handleInputChange = (e: any, index: number) => {
    const newValue = e.target.value;
    const winNumArray = search.win_num.split(",").map((val: any, i: any) => (i === index ? newValue : val));

    // Remove empty elements and join with commas
    const updatedWinNum = winNumArray.filter((val: any) => val !== "").join(",") + ",";

    setSearch({
      ...search,
      win_num: updatedWinNum,
    });
  };

  const handleSetChange = (index: number, value: any) => {
    const newSets = [...sets];
    newSets[index] = value;
    setSets(newSets);
    const addedNumbers = newSets.filter((set) => set !== "").join(",");
    setEntries({ ...entries, added_numbers: addedNumbers });
  };

  const addMoreSet = () => {
    setSets([...sets, ""]);
  };

  // const generateRandomNumbers = () => {
  //   const totalInputNumbers = selectedGame?.total_input_numbers || 0;
  //   const randomNumbers = sets.map(() => {
  //     const numbersInSet = Array.from({ length: totalInputNumbers }, () => Math.floor(Math.random() * 10)); // Generating single-digit numbers for simplicity
  //     return numbersInSet.join(""); // Joining the array elements into a single string
  //   });
  //   setSets(randomNumbers);
  //   const addedNumbers = randomNumbers.filter((set) => set !== "").join(",");
  //   setEntries({ ...entries, added_numbers: addedNumbers });
  // };
  const generateRandomNumbers = () => {
    const totalInputNumbers = selectedGame?.total_input_numbers || 0;
    const randomNumbers = sets.map(() => {
      const numbersInSet = Array.from({ length: totalInputNumbers }, () => Math.floor(Math.random() * 98) + 1); // Generating numbers from 1 to 99
      return numbersInSet.join("-"); // Joining the array elements with hyphens
    });
    setSets(randomNumbers);
    const addedNumbers = randomNumbers.filter((set) => set !== "").join(",");
    setEntries({ ...entries, added_numbers: addedNumbers });
  };

  const handleEntriesSubmit = async () => {
    try {
      setEntriesData({ ...entriesData, loading: true });
      const formdata = new FormData();
      // formdata.append("csrfmiddlewaretoken", entries.csrfmiddlewaretoken);
      formdata.append("telegram_handle", entries.telegram_handle);
      formdata.append("transaction_id", entries.transaction_id);
      formdata.append("game_type", entries.game_type);
      formdata.append("added_numbers", entries.added_numbers);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/entries/`, formdata);
      if (response.data) {
        setEntriesData({ ...entriesData, data: response.data, loading: false, success: true });
      }
    } catch (error) {
      setEntriesData({ ...entriesData, loading: false });
    }
  };

  async function fetchWinners() {
    try {
      setLoading(true);
      let url = `${process.env.REACT_APP_BASE_URL}/api/winners/`;
      const params: any = {};

      if (search) {
        if (search.telegram) {
          params.telegram = search.telegram;
        }
        // eslint-disable-next-line eqeqeq
        if (search.win_num !== "" && search.win_num !== ",") {
          params.win_num = search.win_num.replace(/,$/, "");
        }
      }

      const queryString = new URLSearchParams(params).toString();

      if (queryString) {
        url += `?${queryString}`;
      }
      const response = await axios.get(url);
      if (response.data) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  async function fetchGameTypes() {
    try {
      setGamesTypes({ ...gameTypes, loading: true });
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/game-types/`);
      if (response.data) {
        setGamesTypes({ ...gameTypes, data: response.data, loading: false, success: true });
      }
    } catch (error) {
      setGamesTypes({ ...gameTypes, loading: true });
    }
  }

  async function fetchCurrentPlayers() {
    try {
      setCurrentPlayers({ ...currentPlayers, loading: true });
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/current-players/`);
      if (response.data) {
        setCurrentPlayers({ ...currentPlayers, data: response.data, loading: false, success: true });
      }
    } catch (error) {
      setCurrentPlayers({ ...currentPlayers, loading: true });
    }
  }
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  React.useEffect(() => {
    fetchCurrentPlayers();
    fetchWinners();
    fetchGameTypes();
  }, []);

  React.useEffect(() => {
    if (entriesData.success) {
      notify();
      fetchCurrentPlayers();
      fetchWinners();
      setEntries({
        telegram_handle: "",
        transaction_id: "",
        game_type: "lucky5",
        added_numbers: "",
      });
      setSets([""]);
      setEntriesData((prevCResults) => ({
        ...prevCResults,
        success: false,
      }));
      setOpen(false);
    }
  }, [entriesData.success]);

  React.useEffect(() => {
    if (search) {
      fetchWinners();
    }
  }, [search]);

  return (
    <>
      <ToastContainer />
      <PlayersTab
        data={data}
        loading={loading}
        sets={sets}
        handleSetChange={handleSetChange}
        addMoreSet={addMoreSet}
        entries={entries}
        setEntries={setEntries}
        entriesData={entriesData}
        handleEntriesSubmit={handleEntriesSubmit}
        gameTypes={gameTypes}
        open={open}
        setOpen={setOpen}
        currentPlayers={currentPlayers}
        search={search}
        setSearch={setSearch}
        handleInputChange={handleInputChange}
        generateRandomNumbers={generateRandomNumbers}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />
    </>
  );
};

export default PlayersTabContainer;
