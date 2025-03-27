import { useContext } from "react";
import WelcomeWidget from "./WelcomeWidget";
import { AuthContext } from "../Context/AuthContext";

export default function Home() {

    const { logout } = useContext(AuthContext);
    return (
        <>
            <h1>Your at home</h1>
            <WelcomeWidget/>
            <button onClick= { logout }>LogOut</button>
        </>
    );

}