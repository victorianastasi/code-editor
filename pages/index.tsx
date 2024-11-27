import React from "react";
import { CodeEditor } from "../src/components/CodeEditor";

export default function Home() {
  return (
    <main id="main">
      <div className="container-fluid">
          <section style={{marginTop: "64px", marginBottom: "80px"}} className="px-xl-5">
            <h1 className="fw-semibold" style={{marginBottom: "20px"}}>Editor de código</h1>
            <CodeEditor />
          </section>
      </div>
    </main>
  );
}
