import axios from 'axios';
import { useEffect, useState } from 'react';
import {MdEmail} from 'react-icons/md'
import axiosClient from '../../axios';
import Table from './Table';

function Subscribers() {

    const [subscribers, setSubscribers] = useState([]);
    // const [emails, setEmails] = useState([]);

    useEffect(() => {
      axiosClient.get('/subscribers')
        .then(response => {
          setSubscribers(response.data);
         const emails = response.data.map(subscriber => subscriber.email);
          console.log(emails);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    const data = subscribers;
      const columns = [
        { Header: 'No', accessor: 'no' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: ' Date of Subscription', accessor: 'date' },
      ];
  return (

    <div className="flex flex-col  space-y-2 w-full">
        <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
             <div className='w-[2.5rem]'>
                 <MdEmail className='w-full text-black' color='black' fill='#000'/>
             </div>
                 Subscribers
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
    // <div className="flex flex-col space-y-2 w-full">
    //   <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
    //         <div className='w-[2.5rem]'>
    //             <MdEmail className='w-full text-black' color='black' fill='#000'/>
    //         </div>
    //             Subscribers
    //         </div>

    //         <div className="w-full">

                
    //         {/* <div className="flex flex-col w-full">
    //             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
    //                 <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 w-full">
    //                 <div className="w-full">
    //                     <table className="max-w-full">
    //                     <thead className="bg-[#55555550] border-b w-full">
    //                         <tr className="w-full">
    //                         <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[3%]">
    //                             No.
    //                         </th>
    //                         <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[33%]">
    //                             User Email
    //                         </th>
    //                         <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[33%]">
    //                             Date of Subscription
    //                         </th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                     <tr className=" bg-white border-b w-full">
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             1
    //                         </td>
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             markmarkson@gmail.com
    //                         </td>
    //                         <td className="text-sm relative text-gray-900 font-light px-6 py-4 line-clamp-2">
    //                             1/05/2015
    //                         </td>
    //                         </tr>
    //                     <tr className=" bg-white border-b">
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             2
    //                         </td>
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             markmarkson@gmail.com
    //                         </td>
    //                         <td className="text-sm relative text-gray-900 font-light px-6 py-4 line-clamp-2">
    //                             1/05/2015
    //                         </td>
    //                         </tr>
    //                     <tr className=" bg-white border-b">
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             3
    //                         </td>
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             markmarkson@gmail.com
    //                         </td>
    //                         <td className="text-sm relative text-gray-900 font-light px-6 py-4 line-clamp-2">
    //                             1/05/2015
    //                         </td>
    //                         </tr>
    //                     <tr className=" bg-white border-b">
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             4
    //                         </td>
    //                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                             markmarkson@gmail.com
    //                         </td>
    //                         <td className="text-sm relative text-gray-900 font-light px-6 py-4 line-clamp-2">
    //                             1/05/2015
    //                         </td>
    //                         </tr>
    //                     </tbody>
    //                     </table>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div> */}
    //         <div className="mx-auto bg-white">
    //             <Table columns={columns} data={data} />
    //         </div>

    //     </div>



      
    // </div>
  );
}

export default Subscribers;
