import "./App.css";
import LeftNavbar from "./components/LeftNavbar";
import Tabs from "./components/Tabs";
import Toolbar from "./components/Toolbar";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import PieChart1 from "./components/charts/PieChart1";
import BarChart1 from "./components/charts/BarChart1";
import AreaChart1 from "./components/charts/AreaChart";
import PieChart3 from "./components/charts/PieChart3";
import BarChart2 from "./components/charts/BarChart2";
import PieChart2 from "./components/charts/PieChart2";

function App() {
  const chartDays = [
    { id: "0", value: "7 days", active: true },
    { id: "1", value: "30 days", active: false },
    { id: "2", value: "60 days", active: false },
  ];

  return (
    <div className="pb-24 md:pb-4">
      <header className="fixed w-full top-0 bg-white z-50 px-4 md:px-0 py-[6px] md:my-0 flex items-center gap-2 justify-between md:pl-[68px]">
        {/* mobile header */}
        <MobileHeader />

        {/* desktop header */}
        <DesktopHeader />
      </header>

      <section className="z-50 fixed top-11 bg-white flex items-center w-full border-b-0.5 border-b-borderColor1 md:hidden">
        <div className="text-[15px] py-[11px] flex-1 text-center font-semibold border-b-2 border-b-primary cursor-pointer transition hover:opacity-70">
          Tab 1
        </div>
        <div className="text-[15px] py-[11px] flex-1 text-center cursor-pointer transition hover:opacity-70">Tab 2</div>
        <div className="text-[15px] py-[11px] flex-1 text-center cursor-pointer transition hover:opacity-70">Tab 3</div>
      </section>

      <Toolbar />

      <Tabs />

      <LeftNavbar />

      <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[282px_282px_auto] 3xl:grid-cols-[282px_282px_auto_266px] 4xl:grid-cols-[282px_282px_auto_266px_282px] 5xl:grid-cols-[282px_282px_auto_266px_282px_auto] md:gap-3 md:pl-[271px] pt-[90px] md:pt-32 md:pr-5">
        {/* chart 1 */}
        <PieChart1 chartDays={chartDays} />

        {/* chart 2 */}
        <BarChart1 />

        {/* chart 3 */}
        <AreaChart1 chartDays={chartDays} />

        {/* chart 4 */}
        <PieChart2 />

        {/* chart 5 */}
        <PieChart3 chartDays={chartDays} />

        {/* chart 6 */}
        <BarChart2 />
      </main>
    </div>
  );
}

export default App;
