import { Outlet } from "react-router-dom"
// import Footer from "./Footer"
import Navbar from "./Navbar"

const AppLayout = () => {
    return (
        <>
            <div className="h-screen w-full">
                <div className="h-[10%] bg-black">
                    <Navbar />
                </div>
                <div className="h-[80%]">
                    <Outlet />
                </div>
                {/* <div className="h-[10%]">
                    <Footer />
                </div> */}
            </div>
        </>
    )
}

export default AppLayout
