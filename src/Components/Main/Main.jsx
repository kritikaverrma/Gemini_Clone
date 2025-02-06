import React, { useContext } from "react";
import { assets } from "../../Assets/assets.js";
import "./Main.css";
import { Context } from "../../Context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>

      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Brainstorm team-bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  <p>Hey</p>
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img onClick={() => onSent()} src={assets.send_icon} />
            </div>
          </div>
          <div className="bottom-info">
            <p>Gemini may display incorrect info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
