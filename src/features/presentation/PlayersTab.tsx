import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CurrentPlayerTable from "../../components/common/CurrentPlayerTable";
import WinnersTable from "../../components/common/WinnersTable";
import coins from "../../assets/images/players-tab-image.png";
import { Input } from "antd";
import SpinnerGrow from "../../components/common/SpinnerGrow";
import "./playerstab.css";

const PlayersTab = ({
  data,
  loading,
  sets,
  handleSetChange,
  addMoreSet,
  entries,
  setEntries,
  entriesData,
  handleEntriesSubmit,
  gameTypes,
  open,
  setOpen,
  currentPlayers,
  handleInputChange,
  search,
  setSearch,
}: any) => {
  const onChange = (e: any) => {
    setEntries({ ...entries, game_type: e });
  };

  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="hero-wrapper-margin relative">
          <div className="players-left-radial"></div>
          <div className="players-right-radial"></div>
          <div className="w-full homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] mx-auto">
            <div className="py-[40px] md:py-[40px] lg:py-[45px] xl:py-[45px] 2xl:py-[50px] flex flex-col lg:flex-row justify-between items-center gap-y-[50px]">
              <div className="">
                <h1 className="playtab-title text-center lg:text-left mx-auto lg:mx-0 text-[24px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mb-[15px] md:mb-[20px]">
                  Secure Your Lucky Number
                </h1>
                <p className="playtab-description text-center lg:text-left mx-auto lg:mx-0 w-[80%] md:w-[100%] lg:w-[100%] text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Simply complete the form and gear up to join the game.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="playerstab-btn middle-out text-black hover:text-black transition duration-700 ease-in-out delay-100 text-[14px] md:text-[15px] 2xl:text-[16px] mt-[30px] md:mt-35px] lg:mt[40px]"
                    onClick={handleButtonClick}
                  >
                    Submit a Lucky Number
                  </button>
                </div>
              </div>
              <div className="lg:pr-[30px] xl:pr-[50px] 2xl:pr-[70px]">
                <img src={coins} alt="coins" className="w-[80%] mx-auto lg:w-[100%] lg:mx-0" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px] md:gap-[25px] pb-[40px] md:pb-[40px] lg:pb-[50px] xl:pb-[50px] 2xl:pb-[60px]">
              {/* currents p[layers */}
              <div className="w-full lg:w-[50%] overflow-auto" style={{ zIndex: 9999 }}>
                <div className="flex items-center justify-center lg:justify-start gap-x-[4px] ml-[15px] lg:ml-[25px] mb-[20px] lg:mb-[23px]">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M3.46143 23.7436V22.6256C3.46143 22.0068 3.62168 21.4748 3.94219 21.0295C4.2627 20.5842 4.69343 20.2283 5.23436 19.9618C6.39087 19.4112 7.5392 18.9722 8.67936 18.6448C9.81954 18.3175 11.1913 18.1538 12.7948 18.1538C14.3982 18.1538 15.77 18.3175 16.9102 18.6448C18.0503 18.9722 19.1986 19.4112 20.3552 19.9618C20.8961 20.2283 21.3268 20.5842 21.6473 21.0295C21.9678 21.4748 22.1281 22.0068 22.1281 22.6256V23.7436C22.1281 24.0487 22.0249 24.3045 21.8185 24.5109C21.6121 24.7173 21.3563 24.8205 21.0512 24.8205H4.53836C4.23323 24.8205 3.97745 24.7173 3.77103 24.5109C3.56463 24.3045 3.46143 24.0487 3.46143 23.7436ZM24.3922 24.8205C24.5193 24.697 24.6182 24.5427 24.6888 24.3575C24.7594 24.1724 24.7948 23.9651 24.7948 23.7359V22.5641C24.7948 21.7914 24.6384 21.0621 24.3256 20.3761C24.0128 19.6901 23.5692 19.1014 22.9948 18.6102C23.6495 18.7435 24.2802 18.9286 24.8871 19.1653C25.4939 19.4021 26.0939 19.6683 26.6871 19.9641C27.2649 20.2547 27.7179 20.6266 28.0461 21.0797C28.3743 21.5329 28.5384 22.0277 28.5384 22.5641V23.7436C28.5384 24.0487 28.4352 24.3045 28.2288 24.5109C28.0223 24.7173 27.7666 24.8205 27.4614 24.8205H24.3922ZM12.7948 15.1795C11.6948 15.1795 10.7531 14.7878 9.96976 14.0045C9.18643 13.2211 8.79476 12.2795 8.79476 11.1795C8.79476 10.0795 9.18643 9.13778 9.96976 8.35444C10.7531 7.57111 11.6948 7.17944 12.7948 7.17944C13.8948 7.17944 14.8364 7.57111 15.6198 8.35444C16.4031 9.13778 16.7948 10.0795 16.7948 11.1795C16.7948 12.2795 16.4031 13.2211 15.6198 14.0045C14.8364 14.7878 13.8948 15.1795 12.7948 15.1795ZM22.4871 11.1795C22.4871 12.2795 22.0954 13.2211 21.3121 14.0045C20.5288 14.7878 19.5871 15.1795 18.4871 15.1795C18.4307 15.1795 18.3589 15.1731 18.2717 15.1602C18.1845 15.1474 18.1127 15.1333 18.0563 15.1179C18.508 14.5647 18.8551 13.951 19.0976 13.2768C19.3401 12.6026 19.4614 11.9024 19.4614 11.1763C19.4614 10.4502 19.3345 9.75638 19.0807 9.09484C18.8268 8.43331 18.4854 7.81535 18.0563 7.24098C18.1281 7.21535 18.1999 7.19869 18.2717 7.19098C18.3435 7.18329 18.4153 7.17944 18.4871 7.17944C19.5871 7.17944 20.5288 7.57111 21.3121 8.35444C22.0954 9.13778 22.4871 10.0795 22.4871 11.1795ZM4.79476 23.4871H20.7948V22.6256C20.7948 22.3128 20.7166 22.0393 20.5602 21.8051C20.4037 21.5709 20.123 21.347 19.7178 21.1333C18.723 20.6017 17.6742 20.1944 16.5717 19.9115C15.4691 19.6286 14.2101 19.4871 12.7948 19.4871C11.3794 19.4871 10.1204 19.6286 9.01783 19.9115C7.91527 20.1944 6.86656 20.6017 5.87169 21.1333C5.46656 21.347 5.18578 21.5709 5.02936 21.8051C4.87296 22.0393 4.79476 22.3128 4.79476 22.6256V23.4871ZM12.7948 13.8461C13.5281 13.8461 14.1559 13.585 14.6781 13.0628C15.2003 12.5406 15.4614 11.9128 15.4614 11.1795C15.4614 10.4461 15.2003 9.81837 14.6781 9.29614C14.1559 8.77392 13.5281 8.51281 12.7948 8.51281C12.0614 8.51281 11.4336 8.77392 10.9114 9.29614C10.3892 9.81837 10.1281 10.4461 10.1281 11.1795C10.1281 11.9128 10.3892 12.5406 10.9114 13.0628C11.4336 13.585 12.0614 13.8461 12.7948 13.8461Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="current-player-title text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                    Current Players
                  </p>
                </div>
                <div>
                  <CurrentPlayerTable currentPlayers={currentPlayers} />
                </div>
              </div>
              {/* winners */}
              <div className="w-full lg:w-[50%] relative" style={{ zIndex: 9999 }}>
                <div className="flex items-center justify-center lg:justify-start gap-x-[4px] ml-[15px] lg:ml-[25px] mb-[20px] lg:mb-[23px]">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M15.9999 14.6666C16.7333 14.6666 17.361 14.4055 17.8833 13.8833C18.4055 13.3611 18.6666 12.7333 18.6666 12C18.6666 11.2666 18.4055 10.6389 17.8833 10.1166C17.361 9.59442 16.7333 9.33331 15.9999 9.33331C15.2666 9.33331 14.6388 9.59442 14.1166 10.1166C13.5944 10.6389 13.3333 11.2666 13.3333 12C13.3333 12.7333 13.5944 13.3611 14.1166 13.8833C14.6388 14.4055 15.2666 14.6666 15.9999 14.6666ZM15.3333 25.3333V20.3282C14.1076 20.2376 13.0414 19.7936 12.1345 18.9961C11.2277 18.1987 10.6598 17.1949 10.4307 15.9846C9.02042 15.8188 7.81829 15.2406 6.82429 14.25C5.83026 13.2594 5.33325 12.0649 5.33325 10.6666V10.1538C5.33325 9.5615 5.54415 9.05446 5.96595 8.63268C6.38773 8.21088 6.89477 7.99998 7.48709 7.99998H10.2051V7.48715C10.2051 6.89483 10.4159 6.38779 10.8377 5.96601C11.2595 5.54421 11.7666 5.33331 12.3589 5.33331H19.641C20.2333 5.33331 20.7403 5.54421 21.1621 5.96601C21.5839 6.38779 21.7948 6.89483 21.7948 7.48715V7.99998H24.5128C25.1051 7.99998 25.6121 8.21088 26.0339 8.63268C26.4557 9.05446 26.6666 9.5615 26.6666 10.1538V10.6666C26.6666 12.0649 26.1696 13.2594 25.1756 14.25C24.1816 15.2406 22.9794 15.8188 21.5692 15.9846C21.3401 17.1949 20.7721 18.1987 19.8653 18.9961C18.9585 19.7936 17.8922 20.2376 16.6666 20.3282V25.3333H20.1538C20.3427 25.3333 20.501 25.3973 20.6288 25.5252C20.7566 25.6532 20.8205 25.8117 20.8205 26.0009C20.8205 26.19 20.7566 26.3483 20.6288 26.4756C20.501 26.603 20.3427 26.6666 20.1538 26.6666H11.8461C11.6572 26.6666 11.4988 26.6027 11.3711 26.4747C11.2433 26.3468 11.1794 26.1882 11.1794 25.9991C11.1794 25.8099 11.2433 25.6517 11.3711 25.5243C11.4988 25.397 11.6572 25.3333 11.8461 25.3333H15.3333ZM10.2051 14.5538V9.33331H7.48709C7.24777 9.33331 7.0512 9.41023 6.89735 9.56408C6.74351 9.71792 6.66659 9.9145 6.66659 10.1538V10.6666C6.66659 11.6649 7.00504 12.5329 7.68195 13.2705C8.35889 14.0081 9.19992 14.4359 10.2051 14.5538ZM16.006 19.0256C17.2327 19.0256 18.2734 18.5968 19.1281 17.7393C19.9828 16.8817 20.4102 15.8404 20.4102 14.6154V7.48715C20.4102 7.24783 20.3333 7.05126 20.1794 6.89741C20.0256 6.74357 19.829 6.66665 19.5897 6.66665H12.4102C12.1709 6.66665 11.9743 6.74357 11.8204 6.89741C11.6666 7.05126 11.5897 7.24783 11.5897 7.48715V14.6154C11.5897 15.8404 12.019 16.8817 12.8778 17.7393C13.7365 18.5968 14.7792 19.0256 16.006 19.0256ZM21.7948 14.5538C22.7999 14.4359 23.641 14.0081 24.3179 13.2705C24.9948 12.5329 25.3333 11.6649 25.3333 10.6666V10.1538C25.3333 9.9145 25.2563 9.71792 25.1025 9.56408C24.9486 9.41023 24.7521 9.33331 24.5128 9.33331H21.7948V14.5538Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="current-player-title text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                    Winners
                  </p>
                </div>
                <div className="winners-players-table-outer-wrapper">
                  <div className="winners-players-header flex flex-col lg:flex-row justify-between items-center py-[15px] xl:py-0 gap-y-[20px] gap-x-[20px] w-full overflow-auto">
                    <p className="winners-search-title text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19.5px] md:ml-[25px] whitespace-nowrap">
                      Search Winner By Number
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-[20px] pr-[10px]">
                      <div className="flex items-center gap-x-[6px]">
                        {Array.from({ length: 6 }, (_, index) => (
                          <div key={index} className="flex items-center custom-opt-input-wrapper otp1">
                            <input
                              className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                              type="number"
                              onChange={(e) => handleInputChange(e, index)}
                            />
                          </div>
                        ))}
                        {/* <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div>
                        <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div>
                        <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div>
                        <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div>
                        <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div>
                        <div className="flex items-center custom-opt-input-wrapper">
                          <Input
                            className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] custom-opt-input"
                            // type="number"
                          />
                        </div> */}
                      </div>
                      <p className="winners-or text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                        OR
                      </p>
                      <div className="w-[170px]">
                        <div className="w-full flex items-center custom-simple-input-wrapper">
                          <div className="input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">{/* @ */}</div>
                          <Input
                            className="w-full custom-simple-input"
                            placeholder="Search Handle"
                            onChange={(e) => {
                              setSearch({
                                ...search,
                                telegram: e.target.value,
                              });
                            }}
                            value={search.telegram}
                            style={{ outline: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <WinnersTable data={data} loading={loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="">
        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-sm max-h-[100vh] overflow-auto"
            style={{ zIndex: 99999 }}
          >
            <div className="mt-[0px] max-h-[90vh] overflow-auto custom-modal-style relative transform translate-y-0 transition-transform ease-in-out duration-300 delay-75">
              <div className="absolute right-4 top-4 cursor-pointer">
                <button onClick={handleButtonClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white hover:text-[#FFC905]"
                  >
                    <path
                      d="M16 16L8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8L8 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <p className="modal-title text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mb-[7px]">
                  Get Your Lucky Number
                </p>
                <p className="modal-description text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Fill the form and get ready to participate in the game
                </p>
                <form
                  className="mt-[25px] lg:mt-[32px]"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEntriesSubmit();
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-x-[40px] xl:gap-[60px] gap-y-[20px]">
                    <div className="w-full lg:w-[50%]">
                      <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                        Telegram Handle
                      </label>
                      <div className="modal-custom-input-wrapper-new mt-[15px] md:mt-[17px] flex items-center">
                        <div className="modal-transection-btn text-[16px] lg:text-[20px] flex justify-center items-center">
                          @
                        </div>
                        <input
                          className="modal-custom-input-new w-full"
                          placeholder="Enter Your Telegram Handle"
                          value={entries.telegram_handle}
                          onChange={(e) => {
                            setEntries({
                              ...entries,
                              telegram_handle: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%]">
                      <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                        Transaction ID
                      </label>
                      <div className="modal-custom-input-wrapper-new mt-[15px] md:mt-[17px] flex items-center">
                        <div className="modal-transection-btn text-[16px] lg:text-[20px] flex justify-center items-center">
                          #
                        </div>
                        <input
                          className="modal-custom-input-new w-full"
                          placeholder="Enter Your Transaction Id"
                          value={entries.transaction_id}
                          onChange={(e) => {
                            setEntries({
                              ...entries,
                              transaction_id: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <Radio.Group
                    onChange={onChange}
                    value={entries.game_type}
                    className="min-w-full mt-[20px] lg:mt-[32px]"
                  >
                    <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                      Choose Your Game Type
                    </label>
                    <div className="mt-[15px] lg:mt-[17px] flex flex-col md:flex-row items-center justify-between gap-x-[40px] xl:gap-[60px] gap-y-[25px]">
                      {gameTypes?.data.map((gameType: any, index: number) => (
                        <div
                          key={index}
                          className={`w-[100%] lg:w-[50%] radio-wrapper ${
                            entries.game_type === gameType.id
                              ? "active-border"
                              : "not-active-border"
                          }`}
                        >
                          <Radio
                            value={gameType.id}
                          >
                            <span className="ml-[5px] md:ml-[8px] radio-text text text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                              {gameType.type_name}
                            </span>
                          </Radio>
                        </div>
                      ))}
                    </div>
                  </Radio.Group> */}

                  <div className="mt-[20px] lg:mt-[32px]">
                    <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                      Choose Your Game Type
                    </label>
                    <div className="mt-[15px] lg:mt-[17px] flex flex-col md:flex-row items-center justify-between gap-x-[40px] xl:gap-[60px] gap-y-[25px]">
                      {gameTypes?.data.map((gameType: any) => (
                        <div
                          key={gameType.id}
                          className={`w-[100%] md:w-[50%] radio-wrapper ${
                            entries.game_type === gameType.id ? "active-border" : "not-active-border"
                          }`}
                        >
                          <input
                            type="radio"
                            id={gameType.type_name}
                            name="gametype"
                            value={gameType.id}
                            checked={entries.game_type === gameType.id}
                            onChange={() => onChange(gameType.id)}
                          />
                          <label
                            htmlFor={gameType.type_name}
                            className="radio-custom-label ml-[5px] md:ml-[8px] radio-text text text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                          >
                            <div className="ml-[35px] lg:ml-[40px]">{gameType.type_name}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="mt-[20px] lg:mt-[32px]">
                    <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                      Choose Your Game Type
                    </label>
                    <div className="mt-[15px] lg:mt-[17px] flex flex-col md:flex-row items-center justify-between gap-x-[40px] xl:gap-[60px] gap-y-[25px]">
                      <div
                        className={`w-[100%] md:w-[50%] radio-wrapper ${
                          entries.game_type === "gameType.id"
                            ? "active-border"
                            : "not-active-border"
                        }`}
                      >
                        <input type="radio" id="Lucky5" name="gametype" />
                        <label
                          htmlFor="Lucky5"
                          className="radio-custom-label ml-[5px] md:ml-[8px] radio-text text text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                        >
                          <div className="ml-[35px] lg:ml-[40px]">Lucky5</div>
                        </label>
                      </div>
                      <div
                        className={`w-[100%] md:w-[50%] radio-wrapper ${
                          entries.game_type === "gameType.id"
                            ? "active-border"
                            : "not-active-border"
                        }`}
                      >
                        <input type="radio" id="Lucky5Power" name="gametype" />
                        <label
                          htmlFor="Lucky5Power"
                          className="radio-custom-label ml-[5px] md:ml-[8px] radio-text text text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                        >
                          <div className="ml-[35px] lg:ml-[40px]">
                            Lucky5 + PowerReveal
                          </div>
                        </label>
                      </div>
                    </div>
                  </div> */}
                  {/* sets */}
                  <div className="mt-[20px] lg:mt-[32px]">
                    <label className="modal-input-label text-[14px] md:text-[15px] 2xl:text-[16px] ml-[20px] lg:ml-[30px]">
                      Number of Sets
                    </label>
                  </div>
                  <div className="flex flex-wrap xl:flex-nowrap md:flex-row items-center justify-between gap-x-[20px] xl:gap-x-[12px] 2xl:gap-[20px] gap-y-[30px] mt-[15px] lg:mt-[17px] w-full xl:overflow-auto">
                    {sets.map((set: any, index: number) => (
                      <div
                        className="w-full md:w-[48%] lg:w-[30%] xl:min-w-[160px] xl:max-w-[200px] 2xl:min-w-[170px] 2xl:max-w-[210px]"
                        key={index}
                      >
                        <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                          <div className="w-[60px] input-set-text text-[14px] md:text-[15px] lg:text-[14px] 2xl:text-[15px] modal-set-text whitespace-nowrap xl:mt-[2px]">
                            Set {index + 1}:
                          </div>
                          <input
                            className="w-full modal-custom-simple-input"
                            placeholder="Enter here"
                            value={set}
                            onChange={(e) => handleSetChange(index, e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                    {/* <div className="w-full md:w-[48%] lg:w-[30%] xl:w-[16.6%]">
                      <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                        <div className="w-[60px] input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">Set 1:</div>
                        <Input className=" w-full modal-custom-simple-input" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="w-full  md:w-[48%] lg:w-[30%] xl:w-[16.6%]">
                      <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                        <div className="w-[60px] input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">Set 1:</div>
                        <Input className=" w-full modal-custom-simple-input" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="w-full  md:w-[48%] lg:w-[30%] xl:w-[16.6%]">
                      <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                        <div className="w-[60px] input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">Set 1:</div>
                        <Input className=" w-full modal-custom-simple-input" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="w-full  md:w-[48%] lg:w-[30%] xl:w-[16.6%]">
                      <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                        <div className="w-[60px] input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">Set 1:</div>
                        <Input className=" w-full modal-custom-simple-input" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="w-full  md:w-[48%] lg:w-[30%] xl:w-[16.6%]">
                      <div className="w-full flex items-center modal-custom-simple-input-wrapper">
                        <div className="w-[60px] input-set-text text-[14px] md:text-[15px] 2xl:text-[16px]">Set 1:</div>
                        <Input className=" w-full modal-custom-simple-input" placeholder="Enter here" />
                      </div>
                    </div> */}
                    <div className="w-full  md:w-[48%] lg:w-[30%] xl:w-[16.6%] flex justify-center md:justify-start">
                      <div className="modal-add-more-btn rounded-[11px]">
                        <button
                          type="button"
                          className="modal-add-btn text-[14px] md:text-[15px] 2xl:text-[16px] rounded-[11px]"
                          onClick={addMoreSet}
                        >
                          + Add More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="w-full modal-submit-btn mt-[20px] lg:mt-[30px] text text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                      {entriesData.loading ? (
                        <>
                          <SpinnerGrow /> Loading...
                        </>
                      ) : (
                        "submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayersTab;
