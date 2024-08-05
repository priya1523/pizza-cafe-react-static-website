//libraries
import React from "react";
import { createRoot } from "react-dom/client";
//components
import App from "./App";

function Root(){
    return <main className="root-c">
        <App/>
    </main>
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />)