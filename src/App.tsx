import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/actions";

const App = () => {
  // Access the state from the store
  const count = useSelector((state: any) => state.count);

  // Get dispatch function
  const dispatch = useDispatch();

  const [isMonthlyTab, setIsMonthlyTab] = useState<boolean>(true);

  return (
    <div className="h-[100vh] bg-[#F9F5FD] flex items-center justify-center">
      <div>
        {/* tabs */}
        <div className="flex gap-5">
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
            <div className="text-[16px] font-semibold text-[#49687e] px-[12px] py-[5px] bg-[#F1EAFB] rounded-full">
              Save 20% 😍
            </div>
          </div>
        </div>

        {/* content */}

        <div className="mt-8">
          {isMonthlyTab ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              <div className="border-t-[8px] border-t-[#4cb3fd] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                1
              </div>
              <div className="border-t-[8px] border-t-[#ffb72c] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                2
              </div>
              <div className="border-t-[8px] border-t-[#68cb9b] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                3
              </div>
              <div className="border-t-[8px] border-t-[#b78deb] border-[1px] border-[#eaeff2] py-[24px] px-[20px] rounded-md">
                4
              </div>
            </div>
          ) : (
            <div className="yearly_content">yearly</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
