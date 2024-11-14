import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/actions";
import { IconInfoCircle } from "@tabler/icons-react";

const App = () => {
  // Access the state from the store
  const count = useSelector((state: any) => state.count);

  // Get dispatch function
  const dispatch = useDispatch();

  const [isMonthlyTab, setIsMonthlyTab] = useState<boolean>(true);

  const bg_blue = "#4cb3fd";
  return (
    <div>
      <div className="lg:w-8/12 p-5 mx-auto flex items-center justify-center">
        <div className="w-full">
          {/* tabs */}
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => setIsMonthlyTab(() => true)}
              className={
                isMonthlyTab
                  ? "text-[16px] font-bold text-[#b78deb] border-b-[2px] border-[#b78deb]"
                  : "text-[16px] font-semibold"
              }
            >
              Billed monthly
            </button>
            <div className="w-[1px] bg-[#c6d7e3]"></div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsMonthlyTab(() => false)}
                className={
                  !isMonthlyTab
                    ? "text-[16px] font-bold text-[#b78deb] border-b-[2px] border-[#b78deb]"
                    : "text-[16px] font-semibold"
                }
              >
                Billed yearly
              </button>
              <div className="text-[16px] font-semibold px-[12px] py-[5px] bg-[#F1EAFB] rounded-full">
                Save 20% 😍
              </div>
            </div>
          </div>

          {/* content */}

          <div className="mt-8">
            {isMonthlyTab ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="flex flex-col bg-white border-t-[8px] border-t-[#4cb3fd] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                  <div className="card_header">
                    <span className="text-[#49687e] text-[18px]">Free</span>
                    <h1 className="leading-8 text-[32px] font-bold my-1 text-[#4CB3FD]">
                      Free
                    </h1>
                    <span className=" mt-3 text-[14px] text-[#4CB3FD] inline-flex items-center gap-1 px-[15px] py-[7px] bg-[#E5F2FF] rounded-full">
                      Up to <span className="font-bold">500</span>{" "}
                      visitors/month{" "}
                      <IconInfoCircle className="cursor-pointer" size={19} />
                    </span>
                  </div>

                  <div className="card_content">
                    <h3 className="text-[16px] font-semibold mt-7 mb-3">
                      Free includes:
                    </h3>
                    <ul className="grid gap-2">
                      <li className="cursor-pointer">Unlimited widgets</li>
                      <li className="cursor-pointer">Unlimited channels</li>
                      <li className="cursor-pointer">Contact form</li>
                      <li className="cursor-pointer">Widget customization</li>
                      <li className="cursor-pointer">Channels customization</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Attention effect</li>
                      <li className="cursor-pointer">Page targeting</li>
                      <li className="cursor-pointer">Custom channels</li>
                    </ul>
                  </div>
                  <div className="card_action mt-auto !w-full">
                    <button className="text-white rounded-lg px-5 py-2 w-full bg-[#4cb3fd]">
                      <a
                        className="select-plan-btn"
                        href="https://go.chaty.app/register"
                        target="_blank"
                      >
                        Select Plan
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white border-t-[8px] border-t-[#ffb72c] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                  <div className="card_header">
                    <span className="text-[#49687e] text-[18px]">Free</span>
                    <h1 className="leading-8 text-[32px] font-bold my-1 text-[#ffb72c]">
                      $15{" "}
                      <span className="font-normal text-[#83a1b7] text-[16px]">
                        /Month
                      </span>
                    </h1>
                    <div className="mt-3 text-[14px] text-[#ffb72c] inline-flex items-center gap-1 px-[15px] py-[7px] bg-[#FFF0D9] rounded-full">
                      Up to <span className="font-bold">10,000</span>{" "}
                      visitors/month{" "}
                      <IconInfoCircle className="cursor-pointer" size={19} />
                    </div>
                  </div>

                  <div className="card_content">
                    <h3 className="text-[16px] font-semibold mt-7 mb-3">
                      Free includes:
                    </h3>
                    <ul className="grid gap-2">
                      <li className="cursor-pointer">Unlimited widgets</li>
                      <li className="cursor-pointer">Unlimited channels</li>
                      <li className="cursor-pointer">Contact form</li>
                      <li className="cursor-pointer">Widget customization</li>
                      <li className="cursor-pointer">Channels customization</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Attention effect</li>
                      <li className="cursor-pointer">Page targeting</li>
                      <li className="cursor-pointer">Custom channels</li>
                    </ul>
                  </div>
                  <div className="card_action w-full mt-2">
                    <button className="text-white rounded-lg px-5 py-2 w-full bg-[#ffb72c]">
                      <a
                        className="select-plan-btn"
                        href="https://go.chaty.app/register"
                        target="_blank"
                      >
                        Select Plan
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white border-t-[8px] border-t-[#68cb9b] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                  <div className="card_header">
                    <span className="text-[#49687e] text-[18px]">Pro</span>
                    <h1 className="leading-8 text-[32px] font-bold my-1 text-[#68cb9b]">
                      $39{" "}
                      <span className="font-normal text-[#83a1b7] text-[16px]">
                        /Month
                      </span>
                    </h1>
                    <div className="mt-3 text-[14px] text-[#68cb9b] inline-flex items-center gap-1 px-[15px] py-[7px] bg-[#DBF3E7] rounded-full">
                      Up to <span className="font-bold">500</span>{" "}
                      visitors/month{" "}
                      <IconInfoCircle className="cursor-pointer" size={19} />
                    </div>
                  </div>

                  <div className="card_content">
                    <h3 className="text-[16px] font-semibold mt-7 mb-3">
                      Everything in free plus:
                    </h3>
                    <ul className="grid gap-2">
                      <li className="cursor-pointer">Unlimited widgets</li>
                      <li className="cursor-pointer">Unlimited channels</li>
                      <li className="cursor-pointer">Contact form</li>
                      <li className="cursor-pointer">Widget customization</li>
                      <li className="cursor-pointer">Channels customization</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Attention effect</li>
                      <li className="cursor-pointer">Page targeting</li>
                      <li className="cursor-pointer">Custom channels</li>
                    </ul>
                  </div>
                  <div className="card_action w-full mt-2">
                    <button className="text-white rounded-lg px-5 py-2 w-full bg-[#68cb9b]">
                      <a
                        className="select-plan-btn"
                        href="https://go.chaty.app/register"
                        target="_blank"
                      >
                        Select Plan
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white border-t-[8px] border-t-[#b78deb] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                  <div className="card_header">
                    <span className="text-[#49687e] text-[18px]">Growth</span>
                    <h1 className="leading-8 text-[32px] font-bold my-1 text-[#b78deb]">
                      $66{" "}
                      <span className="font-normal text-[#83a1b7] text-[16px]">
                        /Month
                      </span>
                    </h1>
                    <div className="mt-3 text-[14px] text-[#b78deb] inline-flex items-center gap-1 px-[15px] py-[7px] bg-[#E5F2FF] rounded-full">
                      Up to <span className="font-bold">500</span>{" "}
                      visitors/month{" "}
                      <IconInfoCircle className="cursor-pointer" size={19} />
                    </div>
                  </div>

                  <div className="card_content">
                    <h3 className="text-[16px] font-semibold mt-7 mb-3">
                      Everything in free plus:
                    </h3>
                    <ul className="grid gap-2">
                      <li className="cursor-pointer">Unlimited widgets</li>
                      <li className="cursor-pointer">Unlimited channels</li>
                      <li className="cursor-pointer">Contact form</li>
                      <li className="cursor-pointer">Widget customization</li>
                      <li className="cursor-pointer">Channels customization</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Triggers</li>
                      <li className="cursor-pointer">Attention effect</li>
                      <li className="cursor-pointer">Page targeting</li>
                      <li className="cursor-pointer">Custom channels</li>
                    </ul>
                  </div>
                  <div className="card_action w-full mt-2">
                    <button className="text-white rounded-lg px-5 py-2 w-full bg-[#b78deb]">
                      <a
                        className="select-plan-btn"
                        href="https://go.chaty.app/register"
                        target="_blank"
                      >
                        Select Plan
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="yearly_content">yearly</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
