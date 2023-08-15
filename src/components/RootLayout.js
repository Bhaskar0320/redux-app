import NavBar from "./NavBarPanel";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
    return (
        <div>
            <Provider store = {store}>
                <NavBar />

                <main>
                    <Outlet />
                </main>
            </Provider>
        </div>
    )
}


export default RootLayout;