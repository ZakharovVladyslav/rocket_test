/* import EmblaCarousel from "../components/firstcarousel/FirstCarousel"; */
import Header from "../components/header/Header";
import MainContents from "../components/maincontents/MainContents";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="main_home">
        <Header />
        <MainContents />
      </div>
      {/*       <EmblaCarousel /> */}
    </div>
  );
}
