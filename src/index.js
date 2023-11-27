import "./index.css"

import App from "./App";
import { ModalProvider } from "./Context/ModalContext";
import  ReactDOM  from "react-dom/client";
import { ThemeProvider } from "./Context/ThemeContext";

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <ThemeProvider>

    
<ModalProvider>
    <App/>
</ModalProvider>
</ThemeProvider>);
