import axios from "axios";
import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import Table from "./Table";


const showMore = () =>{
    console.log("display the given comment in pop up screen")
}

function Ideas() {

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
      axiosClient.get('/ideas')
        .then(response => {
          setIdeas(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    const data = ideas;
      const columns = [
        { Header: 'No', accessor: 'no' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Ideas', accessor: 'idea' },
        { Header: 'Date', accessor: 'date' },
      ];

    return (
      <div className="flex flex-col  space-y-2 w-full">
        <div className="font-bold text-3xl text-txtclr w-full">Ideas</div>
        <div className="w-[98%]">
        <div className="flex flex-col bg-white p-5 rounded-lg">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                {/* <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="">
                    <table className="max-w-full">
                    <thead className="bg-[#55555550] border-b">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Email
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Idea's
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr className=" bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01-02-2022</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark Jackson
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            markmarkson@gmail.com
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 line-clamp-2">
                            wow I love adanech abebe gigim yalech gebere nech beyiw, eachother togetherlaskdf
                            alsdjflkasfdlaskf 
                            asdlfajsdlf
                            laslkkkkkkkkkkj
                        </td>
                        </tr>
                        <tr className=" bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01-02-2022</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4">
                            Mark Jackson
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4">
                            markmarkson@gmail.com
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 line-clamp-2">
                            wow I love adanech abebe gigim yalech gebere nech beyiw, eachother togetherlaskdf
                            alsdjflkasfdlaskf 
                            asdlfajsdlf
                            laslkkkkkkkkkkj
                        </td>
                        </tr>
                        <tr className=" bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01-02-2022</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark Jackson
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            markmarkson@gmail.com
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 line-clamp-2">
                            wow I love adanech abebe gigim yalech gebere nech beyiw, eachother togetherlaskdf
                            alsdjflkasfdlaskf 
                            asdlfajsdlf
                            laslkkkkkkkkkkj
                        </td>
                        </tr>
                        <tr className=" bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01-02-2022</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark Jackson
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            markmarkson@gmail.com
                        </td>
                        <td className="text-sm relative text-gray-900 font-light px-6 py-4 line-clamp-2">
                            wow I love adanech abebe gigim yalech gebere nech beyiw, eachother togetherlaskdf
                            alsdjflkasfdlaskf 
                            asdlfajsdlf
                            laslkkkkkkkkkkj
                            <div onClick={showMore} className="absolute bottom-1 right-7 hover:cursor-pointer font-sans text-white px-2 rounded-full bg-btngreen">show more</div>
                        </td>
                        </tr>
                        <tr className=" bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">01-02-2022</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark Jackson
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            markmarkson@gmail.com
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 line-clamp-2">
                            wow I love adanech abebe gigim yalech gebere nech beyiw, eachother togetherlaskdf
                            alsdjflkasfdlaskf 
                            asdlfajsdlf
                            laslkkkkkkkkkkj
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div> */}
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
  
  export default Ideas;
  