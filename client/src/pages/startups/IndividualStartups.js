import React from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Icon} from 'react-icons-kit';  
import { FaArrowAltCircleDown, FaArrowCircleDown, FaArrowCircleLeft, FaArrowDown, FaEnvelope, FaMoneyCheck, FaPhone } from 'react-icons/fa';
import {arrowDownCircle} from 'react-icons-kit/feather/arrowDownCircle';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPencil } from 'react-icons/fa6';
import {arrowUpCircle} from 'react-icons-kit/feather/arrowUpCircle'
function IndividualStartups() {
 const {id} = useParams();
 const [data, getData] = useState([]);
 const [arrowChange, setArrowChange] = useState(arrowDownCircle);
 let [phase, setPhase] = useState(0);
 const handleToggle = () => {

    if(phase == 0){
        setArrowChange(arrowUpCircle)
        setPhase(1)
    }
    else if(phase ==1)
    {
        setArrowChange(arrowDownCircle)
        setPhase(0);
    }
}
 const GetData = async() => {
    try {
        const result = await axios.get(`http://localhost:3003/api/v1/startup/${id}`);
        getData(result.data.rows);
    }
    catch(err)
    {
        console.log(err);
    } 
 }
 useEffect(() => {
    GetData();

 }, [])
 useEffect(() => {
    console.log(data)
 }, [])
  return (
    <div className="h-screen flex">
                    <section id="SideBar" className="fixed h-full">
                        <SideBar />
                    </section>
                    <section className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                                    <div className="text-gray-400">Dashboard / Startups / Profile</div>
                                    <div className="p-0 text-2xl font-semibold text-gray-500 flex mt-5"><span className="mt-2"><FaArrowCircleLeft size={18} /></span><span className="ps-2">Startup Profile</span></div>
                            {/* {id} */}

                            <div className="mt-4">
                                    <div className="border border-md">
                                            <section id="personal-data">
                                                    <div className="grid grid-cols-2 gap-10 my-5">
                                                            <div className="left-side">
                                                                        <div className='flex justify-center items-center text-2xl'>{data[0]?.basic?.startup_name || <span className="text-red-600 animate transition-all 0.5s"><IoIosCloseCircleOutline />NA</span>}</div>
                                                                        <span className="flex justify-center items-center mt-4"><button className="bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300 p-1">{data[0]?.startup_status}</button></span>
                                                            </div>
                                                            <div className="right-side">
                                                                        <div className="flex justify-center items-center">
                                                                                <span className="pt-1 text-gray-500"><FaEnvelope size={17}/></span>
                                                                                <span className="ps-2">{data[0]?.official?.official_email_address || <span className="text-red-600"><IoIosCloseCircleOutline />NA</span>}</span>
                                                                         </div>

                                                                         <div className="flex justify-center items-center mt-4">
                                                                                <span className="pt-1 text-gray-500"><FaPhone size={17}/></span>
                                                                                <span className="ps-2 ">{data[0]?.official?.official_contact_number || <span className="text-red-600"><IoIosCloseCircleOutline />NA</span>}</span>
                                                                         </div>
                                                            </div>
                                                    </div>
                                            </section> 
                                            <section className="mentor-data mt-10 my-4">
                                                    <div className="grid grid-cols-4 gap-10 mx-10">
                                                            <div className="grid grid-cols-1">
                                                                <span className='text-sm'>Mentors</span>
                                                                <span className="font-semibold text-sm">Not associated</span>
                                                            </div>
                                                            <div className="grid grid-cols-1">
                                                                <span className='text-sm'>Sector</span>
                                                                <span className="font-semibold text-sm">{data[0]?.basic?.startup_program || <span className="text-red-600"><IoIosCloseCircleOutline />NA</span>}</span>
                                                            </div>
                                                            <div className="grid grid-cols-1">
                                                                <span className='text-sm'>Mentors</span>
                                                                <span className="font-semibold text-sm">Nirmaan</span>
                                                            </div>
                                                            <div className="grid grid-cols-1">
                                                                <span className='text-sm'>Program</span>
                                                                <span className="font-semibold text-sm">{data[0]?.basic?.program || <span className="text-red-600"><IoIosCloseCircleOutline />NA</span>}</span>
                                                            </div>
                                                    </div>
                                            </section>     
                                    </div>
                                    <div className="border mt-2">
                                            <div className="flex justify-between m-3">
                                                    <div className="text-xl font-semibold">Team Members</div>
                                                    <div className="text-green-600"><FaPencil size={20}/></div>
                                            </div>
                                            <div className="flex justify-between m-3">
                                                    <div className="flex justify-between gap-20">
                                                        <div className="font-semibold text-green-600 text-lg">{data[0]?.founder?.founder_name}</div>
                                                        <div className="text-green-600"><button onClick={handleToggle}><Icon icon={arrowChange} size={18} /></button></div>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className="border mt-2">
                                                <div className="grid grid-cols-4 gap-5 m-3">
                                                        <div className="border">
                                                            <div className="flex justify-between p-3">
                                                                <div><FaMoneyCheck size={36}/></div>
                                                                <div>
                                                                    <span className="md:p-2 font-semibold">Rs.10,00,000</span>
                                                                    <div className="text-sm font-semibold">Funding Disbursed</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border">
                                                            <div className="flex justify-between p-3">
                                                                <div><FaMoneyCheck size={36}/></div>
                                                                <div>
                                                                    <span className="md:p-2 font-semibold">Rs.10,00,000</span>
                                                                    <div className="text-sm font-semibold">Funding Disbursed</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border">
                                                            <div className="flex justify-between p-3">
                                                                <div><FaMoneyCheck size={36}/></div>
                                                                <div>
                                                                    <span className="md:p-2 font-semibold">Rs.10,00,000</span>
                                                                    <div className="text-sm font-semibold">Funding Disbursed</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border">
                                                            <div className="flex justify-between p-3">
                                                                <div className=""><FaMoneyCheck size={36}/></div>
                                                                <div>
                                                                    <span className="md:p-2 font-semibold">Rs.10,00,000</span>
                                                                    <div className="text-sm font-semibold">Funding Disbursed</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                    </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
} 

export default IndividualStartups
