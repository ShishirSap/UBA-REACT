import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import { Outlet } from "react-router-dom"

const DashboardLayout:React.FC=()=>{
    return(
        <div className="min-h-screen flex flex-col md:flex-row">
            <Sidebar/>
            <div className="flex-1">
                <Header/>
                <main className="p-4">
                
                
          <Outlet/>
                   
                </main>
            </div>
          
        </div>
    )
}
export default DashboardLayout