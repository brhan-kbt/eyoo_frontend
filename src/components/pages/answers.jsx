import axios from 'axios';
import { useEffect, useState } from 'react';
import {MdAnalytics} from 'react-icons/md'
import axiosClient from '../../axios';
import Table from './Table';
function Responses() {
    const [response, setResponder] = useState([]);

    useEffect(() => {
      axiosClient.get('/response')
        .then(response => {
          setResponder(response.data.data);
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const data = response;
      const columns = [
        { Header: 'No', accessor: 'no' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Phone Number', accessor: 'phone_number' },
        { Header: 'Q#1', accessor: 'question_1' },
        { Header: 'Q#2', accessor: 'question_2' },
        { Header: 'Q#3', accessor: 'question_3' },
        { Header: 'Q#4', accessor: 'question_4' },
        { Header: 'Score', accessor: 'score' },
      ];
    return (
        // <div className="flex flex-col space-y-2 w-full">
        //     <div className="font-bold text-3xl text-txtclr w-full">User Answer</div>
        //     <div className="w-[98%]">
        //         <div className="flex flex-col">
        //             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        //                 <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        //                     <div className="">
        //                         <table className="max-w-full">
        //                             <thead className="bg-[#55555550] border-b">
        //                                 <tr>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         No.
        //                                     </th>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         Name
        //                                     </th>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         Phone No.
        //                                     </th>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         Date
        //                                     </th>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         Score
        //                                     </th>
        //                                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
        //                                         Answers
        //                                     </th>
        //                                 </tr>
        //                             </thead>
        //                             <tbody>
        //                                 <tr className=" bg-white border-b">
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         Mark Jackson
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         0987654321
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">10-11-2023</td>
        //                                     <td className="px-7 py-4">3</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 flex items-center space-x-4">
        //                                         <div className="flex flex-col items-center">
        //                                             <div>1</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>2</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>3</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>4</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                     </td>
        //                                 </tr>
        //                                 <tr className=" bg-white border-b">
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">02</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         Mark Jackson
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         0987654321
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">10-11-2023</td>
        //                                     <td className="px-7 py-4">2</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 flex items-center space-x-4">
        //                                         <div className="flex flex-col items-center">
        //                                             <div>1</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>2</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>3</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>4</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                     </td>
        //                                 </tr>
        //                                 <tr className=" bg-white border-b">
        //                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">03</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         Mark Jackson
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        //                                         0987654321
        //                                     </td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">10-11-2023</td>
        //                                     <td className="px-7 py-4">1</td>
        //                                     <td className="text-sm text-gray-900 font-light px-6 py-4 flex items-center space-x-4">
        //                                         <div className="flex flex-col items-center">
        //                                             <div>1</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>2</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${true ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>3</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                         <div className="flex flex-col items-center">
        //                                             <div>4</div>
        //                                             <div className={`w-5 h-5 border border-white rounded-md bg-white border-1 ${false ? 'bg-green-500' : 'bg-red-500'}`}></div>
        //                                         </div>
        //                                     </td>
        //                                 </tr>
        //                             </tbody>
        //                         </table>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
   
        <div className="flex flex-col  space-y-2 w-full">
       <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
             <div className='w-[2.5rem]'>
                 <MdAnalytics className='w-full text-black' color='black' fill='#000'/>
             </div>
                 Response
             </div> 
        
        <div className="w-[98%]">
        <div className="flex flex-col bg-white p-5 rounded-lg">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
               
                  <div className="w-full">
                <div className="mx-auto ">
                    <Table columns={columns} data={data} />
                </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
}

export default Responses;
