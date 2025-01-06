import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "DEM",
  description: "Daily Expenses Monitoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
