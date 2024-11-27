import React, { useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-dracula.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import styles from "./CodeEditor.module.scss";
import { WebIframeObelisco2 } from "../web-iframe-obelisco2";

export const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [iframeCode, setIframeCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  const handleHtmlChange = (value: string) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value: string) => {
    setCssCode(value);
  };

  const handleIframeChange = (value: string) => {
    setIframeCode(value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleExpandResult = () => {
    setIsResultExpanded((prevExpanded) => !prevExpanded);
  };

  const renderCodeEditor = (language: string, code: string) => (
    <div className={styles.codeEditorWrapper}>
      <div className={`${styles.preStyle} ${styles.codeEditor}`}>
        <SimpleCodeEditor
          value={code}
          onValueChange={
            language === "html"
              ? handleHtmlChange
              : language === "css"
              ? handleCssChange
              : handleIframeChange
          }
          highlight={(code) =>
            highlight(code, language === "html" ? languages.html : languages.css)
          }
          padding={10}
          placeholder={`Ingrese su código ${language === "html" ? "HTML" : "CSS"} aquí`}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "#1a1830",
            color: "white",
            overflow: "auto",
            minHeight: "70vh",
            height: "100%",
          }}
        />
      </div>
    </div>
  );

  const renderResult = () => (
    <div className={` ${styles.result} ${isResultExpanded ? styles.expanded : ""}`}>
      <div className="d-flex justify-content-end">
        <span data-direction="left" data-tooltip="Contraer" tabIndex={0} className={styles.buttonShutBox}>
        <button
          type="button"
          className={`btn btn-outline-primary btn-sm btn-icon ${styles.shut}`}
          aria-label="Botón"
          onClick={handleExpandResult}
        >
          <span className="material-symbols-rounded" aria-hidden="true">close</span>
        </button>
        </span>
      </div>
      
      <style>{cssCode}</style>
      <div className="resultado" dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
    </div>
  );

  return (
    <>
      <nav className="tabs-box px-0 mb-0">
        <ul className="nav nav-pills tabs m-0 pb-0">
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "html" ? "active" : ""}`}
              onClick={() => handleTabClick("html")}
            >
              HTML
            </button>
          </li>
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "css" ? "active" : ""}`}
              onClick={() => handleTabClick("css")}
            >
              CSS
            </button>
          </li>
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "iframe" ? "active" : ""}`}
              onClick={() => handleTabClick("iframe")}
            >
              Componentes
            </button>
          </li>
        </ul>
      </nav>
      <hr className="mt-0 mb-4" style={{ opacity: 1, borderTop: "1px solid #e6ebf0" }} />
      <div className="d-flex justify-content-end">
        {!isResultExpanded && (
          <span data-direction="left" data-tooltip="Expandir" tabIndex={0}>
            <button
              type="button"
              className={`btn btn-primary btn-sm ml-2 mb-2 ${styles.shut}`}
              aria-label="Botón"
              onClick={handleExpandResult}
            >
              <span className="material-symbols-rounded o-icon" aria-hidden="true">open_in_full</span>
            </button>
          </span>
        )}
      </div>
      <div className={`${styles.mainEditor}`}>
        <div className={styles.mainResult}>{renderResult()}</div>

        <div className={styles.mainEditor}>
          {activeTab === "html" ? (
            renderCodeEditor("html", htmlCode)
          ) : activeTab === "css" ? (
            renderCodeEditor("css", cssCode)
          ) : (
            <WebIframeObelisco2 />
          )}
        </div>

        <div className={`${styles.figure}`}></div>
      </div>
    </>
  );
};
