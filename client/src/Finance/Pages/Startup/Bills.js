import React from 'react'
import SideBar from '../../Components/Sidebar'
import NavBar from '../../../components/NavBar'

function Bills() {
  return (
    <div className="h-screen flex">
            <section className="fixed h-full">
                    <SideBar />
            </section>
            <section className="flex-grow">
                            <div className="fixed w-full">
                                  <NavBar />
                            </div>
                            <div className="p-[90px;] h-full">
                                  <h1 className="font-semibold text-gray-500 text-lg">Bills / Funding status</h1>
                                  <div className="">

                                  </div>
                            </div>
            </section>
    </div>
  )
}

export default Bills
