import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Logo from "../assets/favicon.svg";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" Component={Title} />
            </Routes>
        </BrowserRouter>
    )
}

export function Title() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
        }}>
            <Logo />
            <h1>Hello, World!</h1>
            <span>{process.env.IS_DEBUG ? "Is Debug Mode" : "Is Release Mode"}</span>
        </div>
    )
}