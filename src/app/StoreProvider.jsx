"use client"

import store from "@/lib/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
    // This is Store Provider file for client Components
    return (
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </Provider>
    )
}

export default StoreProvider;