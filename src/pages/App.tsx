import { Route, Switch } from "wouter";
import Logo from "../assets/favicon.svg";

export function App() {
    return (
        <Switch>
            <Route path="*" component={Title} />
        </Switch>
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
            <Logo width="200px" />
            <h1>Hello, World!</h1>
            <span>{process.env.IS_DEBUG ? "Is Debug Mode" : "Is Release Mode"}</span>
        </div>
    )
}