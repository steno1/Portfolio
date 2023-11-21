import "./index.css"

import App from "./App";
import { ModalProvider } from "./Context/ModalContext";
import  ReactDOM  from "react-dom/client";

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(
<ModalProvider>
    <App/>
</ModalProvider>);
