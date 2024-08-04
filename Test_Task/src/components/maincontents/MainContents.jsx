import Planet from "../../assets/Planet.svg";
import Line from "../../assets/Line.svg";
import "./MainContents.scss";

export default function MainContents() {
  return (
    <section className="main_contents">
      <div className="main">
        <div className="main_descr">dive deep in to the future</div>
      </div>
      <div className="main_world">
        <img src={Planet} alt="" className="main_planet" />
        <img src={Line} alt="" className="main_line" />
      </div>
    </section>
  );
}
