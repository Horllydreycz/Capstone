import { Cloud, CloudSun, Sun, SunriseIcon } from "lucide-react";

function WeatherForcast() {
  return (
    <div className="flex justify-center min-w-full border-blue-500 border h-50 font-montserrat font-semibold">
      <div className="flex border border-red-500 w-1/4 justify-center ">
        <div className="flex flex-col bg-blue-200 w-3/4 h-full rounded-[20px]">
          <div className=" w-full min-h-1/4 relative ">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex items-center w-full h-full justify-between px-4 ">
              <p>Friday</p>
              <p>11:45 AM</p>
            </div>
          </div>
          <div className="w-full flex h-full flex-col py-3">
            <div className="h-1/3 flex justify-between w-full px-4">
              <div className="flex items-center justify-center">
                <span className="text-4xl">16°</span>
              </div>
              <div className="flex items-center justify-center">
                <img src="src/assets/sunnywindy.png" alt="sunnywindy" />
              </div>
            </div>

            <div className="flex w-full  justify-between gap-4 items-center h-full">
              <div className="text-xs text-gray-400  w-1/2 h-full flex flex-col px-1 items-start justify-center gap-y-1">
                <div className="flex gap-2">
                  <p>Real Feel</p>
                  <p className="font-bold text-black">18°</p>
                </div>
                <div className="flex gap-2  whitespace-nowrap">
                  <p>Wind N-E.</p>
                  <p className="font-bold text-black">6-7km/h</p>
                </div>
                <div className="flex gap-2 whitespace-nowrap min-w-max">
                  <p>Pressure </p>
                  <p className="font-bold text-black">100MB</p>
                </div>
                <div className="flex gap-2">
                  <p>Humidity </p>
                  <p className="font-bold text-black">51%</p>
                </div>
              </div>
              <div className="w-1/2 h-full text-gray-400 text-xs flex flex-col items-start justify-center gap-y-1">
                <div className="flex gap-2">
                  <p>Sunrise</p>
                  <p className="font-bold text-black">5:30AM</p>
                </div>
                <div className="flex gap-2">
                  <p>Sunset</p>
                  <p className="font-bold text-black">6:45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-yellow-500 w-1/2 flex justify-around items-center text-white gap-7 px-2">
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            SAT
          </div>
          <div>
            <img src="src/assets/rainysunny.png" alt="rainysunny" />
          </div>
          <div className="text-3xl">10°</div>
        </div>
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            SUN
          </div>
          <div>
            <img src="src/assets/sunny.png" alt="Sunny" />
          </div>
          <div className="text-3xl">15°</div>
        </div>
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            MON
          </div>
          <div>
            <img src="src/assets/sunny2.png" alt="Sunny" />
          </div>
          <div className="text-3xl">10°</div>
        </div>
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            TUE
          </div>
          <div>
            <img src="src/assets/rainy.png" alt="Rainy" />
          </div>
          <div className="text-3xl">10°</div>
        </div>
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            WED
          </div>
          <div>
            <img src="src/assets/rainysunny2.png" alt="Rainnysunny" />
          </div>
          <div className="text-3xl">12°</div>
        </div>
        <div className="h-full flex flex-col rounded-4xl bg-[#1B1B1D] w-1/6 items-center justify-around">
          <div className="min-w-full border-b-2 border-b-gray-500 text-center pb-2">
            THU
          </div>
          <div>
            <img src="src/assets/windy.png" alt="Windy" />
          </div>
          <div className="text-3xl">10°</div>
        </div>
      </div>
      <div className="border border-green-500 w-1/4"></div>
    </div>
  );
}
export default WeatherForcast;
