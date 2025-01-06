"use client"

import store from "@/lib/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
    // This is Store Provider file for client Components
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider;