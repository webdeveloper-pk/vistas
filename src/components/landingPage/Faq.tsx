import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div
      id="faq"
      className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[30px] md:pb-[30px] lg:pb-[30px] xl:pb-[30px] 2xl:pb-[40px]"
    >
      <h1
        className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        FAQS
      </h1>
      <div
        className="mt-[40px] lg:mt-[45px] 2xl:mt-[51px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[80%] lg:w-[650px] xl:w-[800px] 2xl:w-[976px] mx-auto">
          <Collapse
            className="min-w-full"
            ghost
            accordion
            defaultActiveKey={["null"]}
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <div className="pr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    className="w-[13px] h-[7px] lg:w-[15px] 2xl:w-[16px] lg:h-[8px] 2xl:h-[9px] lg:mr-[5px] xl:mr-[8px] 2xl:mr-[10px]"
                  >
                    <path
                      d="M1 8L8 1L15 8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="pr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    className="w-[13px] h-[7px] lg:w-[15px] 2xl:w-[16px] lg:h-[8px] 2xl:h-[9px] lg:mr-[5px] xl:mr-[8px] 2xl:mr-[10px]"
                  >
                    <path
                      d="M1 8L8 1L15 8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="rotate(180 8 4.5)"
                    />
                  </svg>
                </div>
              )
            }
            //   key={"1"}
          >
            <Panel
              header="What is the LuckyAura Puzzle Challenge all about?"
              key="1"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  The LuckyAura Puzzle Challenge is an exciting game where
                  participants solve a unique puzzle. The challenge is to
                  correctly match numbers on the back of nine cardboard pieces
                  to spell out "LuckyAura" when the cardboards are turned face
                  up.
                </div>
              </div>
            </Panel>
            <Panel
              header="How does the puzzle work?"
              key="2"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Here's how it works: Nine cardboard pieces are imprinted with
                  the letters that spell "LuckyAura" (L - U - C - K - Y - A - U
                  - R - A). A live presenter shuffles these cardboards, making
                  sure that the lettered side is hidden. The presenter then
                  randomly assigns numbers from 1 to 9 to the back of the
                  cardboards, with no connection to the letters.
                </div>
              </div>
            </Panel>
            <Panel
              header="What is the challenge for participants?"
              key="3"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Participants are given up to 30 minutes to submit their
                  guesses. Their task is to align the numbers on the back of the
                  cardboards in such a way that they spell "LuckyAura" when
                  revealed. For example, they must determine that, for instance,
                  1 corresponds to L, 7 to U, and 2 to C. Successful alignments
                  are crucial to winning the jackpot.
                </div>
              </div>
            </Panel>
            <Panel
              header="Is the assignment of numbers to letters random?"
              key="4"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Yes, the assignment of numbers to letters is completely
                  random. It's a key element of the challenge that adds to the
                  excitement and complexity of solving the puzzle.
                </div>
              </div>
            </Panel>
            <Panel
              header="What do participants win if they successfully complete the challenge?"
              key="5"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Participants who successfully match the numbers with the
                  letters in the correct order stand a chance to win the coveted
                  jackpot. The prize is awarded to those who successfully
                  complete the alignment challenge.
                </div>
              </div>
            </Panel>
            <Panel
              header="How can I participate in the LuckyAura Puzzle Challenge?"
              key="6"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  To participate, you'll need to be part of the live event and
                  follow the provided instructions for submissions. Stay tuned
                  for announcements and instructions during the game to ensure
                  you have a chance to play and win.
                </div>
              </div>
            </Panel>
            <Panel
              header="Are there any age or location restrictions for participation?"
              key="7"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Participants should review the specific eligibility criteria
                  and requirements for the LuckyAura Puzzle Challenge. Age and
                  location restrictions may apply, and it's essential to comply
                  with all rules and regulations for participation.
                </div>
              </div>
            </Panel>
            <Panel
              header="How can I stay updated about upcoming LuckyAura Puzzle Challenge events?"
              key="8"
              className="mb-[15px] lg:mb-[20px] 2xl:mb-[26px]"
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  To stay informed about upcoming events and game details,
                  follow our official telegram channel, X account and on this
                  website for announcements. We'll keep you updated on all the
                  exciting opportunities to participate in the LuckyAura Puzzle
                  Challenge.
                </div>
              </div>
            </Panel>
            <Panel
              header="Are there other games similar to the LuckyAura Puzzle Challenge, and how
              can I find information about them?"
              key="9"
              className=""
            >
              <div className="flex flex-row items-start">
                <div className="pt-[8px] pb-[0px] lg:pt-[8px] lg:pb-[0px] 2xl:pt-[13px] 2xl:pb-[0px] faq-inner-content text-[14px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]">
                  Absolutely, we offer various thrilling games, but here's the
                  exciting part, discovering how to participate in these games
                  is an integral part of the experience. When you enter any of
                  our jackpots, puzzles, or the Zigzag Ball Roll games, you
                  receive a number of entries for free. The catch? All the
                  information and instructions for these games will be revealed
                  during our live streams. "We'll also provide regular updates
                  through our social media channels. So, stay tuned and get
                  ready for more incredible challenges and opportunities to win!
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Faq;
