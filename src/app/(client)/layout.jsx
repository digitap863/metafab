import { AOSInit } from "@/components/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const Layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-[#FFFFFF] ">
            <AOSInit />
            <Navbar />
            <main className="">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;