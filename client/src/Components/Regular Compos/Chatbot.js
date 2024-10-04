import { useState, useEffect } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import Nav from "../Reusable Compos/Nav";

function Chatbot() {
  const [quesVal, setQueVal] = useState("");
  const [result, setResult] = useState("Response will be displayed here");
  const [convo, setConvo] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const API_KEY = 'AIzaSyAZ95v95qT3A-sLVIWqOtQNCvt9QqBKoGs';
  const subject = 'AI Space Chat';

  // Define quick search questions
  const quickSearches = [
    "What is an exoplanet?",
    "How are exoplanets discovered?",
    "Can exoplanets support life?",
    "What is the habitable zone?",
    "Tell me about Kepler's mission.",
  ];

  const handleQuestions = async () => {
    const exoplanetKeywords = [
      "exoplanet", "habitable zone", "habitability", "life", "alien",
      "planet", "atmosphere", "Kepler", "TESS", "discovery", 'kepler '
    ];

    const containsExoplanetKeywords = exoplanetKeywords.some(keyword =>
      quesVal.toLowerCase().includes(keyword)
    );

    if (!containsExoplanetKeywords) {
      setResult("Please ask a question related to exoplanets only.");
      setQueVal('');
      return;
    }

    setLoading(true); // Set loading to true before the API call
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 8192,
      };

      const safetySettings = [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          { role: "user", parts: [{ text: "who are you" }] },
          { role: "model", parts: [{ text: 'I am Plasmon and my work is to answer the question related to "exoplanet habitable zone habitability life alien planet atmosphere Kepler TESS discovery" nothing else then this ' }] },
        ],
      });

      const result = await chat.sendMessage(quesVal);
      const response = result.response;
      const text = await response.text();
      let responseRel = text.split("*");
      let newResponse = "🤖 ";
      for (let i = 0; i < responseRel.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseRel[i];
        } else {
          newResponse += "<b>" + responseRel[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("**").join("<br>");
      console.log(newResponse2);
      setConvo([
        ...convo,
        { role: "user", text: `🤷‍♀️: ${quesVal}` },
        { role: "model", text: newResponse2 },
      ]);
      setResult(newResponse2);
      setQueVal("");
    } catch (error) {
      console.log(error);
      setResult("Sorry - Something went wrong. Please try again!");
    } finally {
      setLoading(false); // Set loading to false after the API call is done
    }
  };

  const handleDel = () => {
    setConvo([]);
    setResult("Deleted Entire Chat. Ask a question to restart...");
  };

  const handleQuickSearch = (question) => {
    setQueVal(question);
  };

  useEffect(() => {
    setConvo([]);
    setResult("Your Response will be displayed here");
  }, [subject]);

  return (
    <div className="">
    <div className="centerit">
      <div className="nav-sec"><Nav /></div>

      <div className="aiui space-theme">
        <div className="userside">
          <h3 className="userlogo">🌌 {subject}</h3>
          {convo.length >= 1 && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDel}
            >
              <span className="material-symbols-rounded">delete</span>
            </button>
          )}
        </div>

       

        <div className="out_disp main">
          <div>
            {loading ? ( // Show loading spinners when loading
              <div>
                <p className="d-inline mb-3">Generating Output</p>
                <div className="spinner-grow spinner-grow-sm text-orange" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {convo.length >= 1 ? (
                  [...convo]
                    .reverse()
                    .reduce((acc, msg, index, array) => {
                      if (msg.role === "user") {
                        const modelMsg = array[index - 1];
                        if (modelMsg && modelMsg.role === "model") {
                          acc.push([msg, modelMsg]);
                        }
                      }
                      return acc;
                    }, [])
                    .map((pair, index) => (
                      <div key={index}>
                        <div className="msg-user out_disp_main">
                          <p dangerouslySetInnerHTML={{ __html: pair[0].text }}></p>
                        </div>
                        <div className="msg-model out_disp_main">
                          <p dangerouslySetInnerHTML={{ __html: pair[1].text }}></p>
                        </div>
                        <div className="separator"></div>
                      </div>
                    ))
                ) : (
                  <div className="ouput_rel">
                    <p>{result}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="talkarea">
          <textarea
            name="Ask"
            id="general"
            placeholder="Message AI"
            value={quesVal}
            className="no-resize"
            onChange={(e) => setQueVal(e.target.value)}
          ></textarea>
          {!loading ? <button id="generalbtn" onClick={handleQuestions}>
            Ask
          </button> :
            <button id="generalbtn" onClick={handleQuestions} className="bg-danger" disabled>
              Ask
            </button>}
        </div>
         {/* Quick Search Buttons */}
         <div className="quick-searches mt-5">
          <h5>Quick Searches:</h5>
          {quickSearches.map((question, index) => (
            <button 
              key={index} 
              className="btn btn-outline-primary m-1" 
              onClick={() => handleQuickSearch(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Chatbot;
