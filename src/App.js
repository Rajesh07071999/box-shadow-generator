import { useState } from "react";
import "./App.css";
import { IoCopy } from "react-icons/io5";
import ImageUploader from "./Components/ImageUploader/ImageUploader";

function App() {
  const [horizontalRange, setHorizonatlRange] = useState(10);
  const [verticalRange, setVerticalRange] = useState(10);
  const [blurRange, setBlurRange] = useState(10);
  const [color, setColor] = useState("black");
  const [check, setCheck] = useState(false);

  const [topLeft, setTopLeft] = useState(0);
  const [TopRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bootomRight, setBottomRight] = useState(0);

  return (
    <div className="App">
      <div className="input-element">
        <button className="btn btn-secondary">BOX SHADOW</button>
        <br />
        <br />
        <label>Horizontal Range</label>
        <br />
        <input
          type="range"
          min="-200"
          max="200"
          value={horizontalRange}
          onChange={(e) => setHorizonatlRange(e.target.value)}
        />
        <br />

        <label>Vertical Range</label>
        <br />
        <input
          type="range"
          min="-200"
          max="200"
          value={verticalRange}
          onChange={(e) => setVerticalRange(e.target.value)}
        />
        <br />

        <label>Blur Range</label>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          value={blurRange}
          onChange={(e) => setBlurRange(e.target.value)}
        />

        <label>Set Color</label>
        <br />
        <input
          type="color"
          min="0"
          max="100"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <div className="switch">
          <label>
            Outline
            <input
              type="checkbox"
              checked={check}
              onChange={() => setCheck(!check)}
            />
            <span className="lever"></span>
            inset
          </label>
        </div>
        <br />

        <button className="btn btn-dark text-white">BORDER RADIUS</button>
        <br />
        <br />

        <label>Top Left</label>
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={topLeft}
          onChange={(e) => setTopLeft(e.target.value)}
        />
        <br />

        <label>Top Right</label>
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={TopRight}
          onChange={(e) => setTopRight(e.target.value)}
        />
        <br />

        <label>Bottom Left</label>
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bottomLeft}
          onChange={(e) => setBottomLeft(e.target.value)}
        />
        <br />

        <label>Bottom Right</label>
        <br />
        <input
          type="range"
          min="0"
          max="200"
          value={bootomRight}
          onChange={(e) => setBottomRight(e.target.value)}
        />
        <br />
        <br />

        <button className="btn btn-secondary">
          UPLOAD LOCAL IMAGE ON SERVER
        </button>

        <ImageUploader />
      </div>

      <div className="output-element">
        <div
          className="box"
          style={{
            boxShadow: `${
              check ? "inset" : ""
            } ${horizontalRange}px ${verticalRange}px ${blurRange}px ${color} `,
            borderRadius: `${topLeft}px ${TopRight}px ${bottomLeft}px ${bootomRight}px`,
          }}
        >
          <IoCopy
            style={{ height: "30px" }}
            onClick={() =>
              navigator.clipboard.writeText(
                `${
                  check ? "inset" : ""
                } ${horizontalRange}px ${verticalRange}px ${blurRange}px ${color} ${topLeft}px ${TopRight}px ${bottomLeft}px ${bootomRight}px`
              )
            }
          />

          <h5>
            BoxShadow : {horizontalRange}px {verticalRange}px {blurRange}px{" "}
            {color} <br />
            BorderRadius : {topLeft}px {TopRight}px {bottomLeft}px {bootomRight}
            px
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
