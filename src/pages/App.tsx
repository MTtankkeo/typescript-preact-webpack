import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>Hello, World!</h1>} />
            </Routes>
        </BrowserRouter>
    )
}