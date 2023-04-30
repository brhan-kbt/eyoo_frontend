import { useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import axios from 'axios';
import Table from './Table';
import { MdEdit, MdEditNote } from 'react-icons/md';
import Table2 from './Table2';
import toastr from 'toastr';
import axiosClient from '../../axios';

function Contents() {
  const [formData, setFormData] = useState({
    daily_quote: '',
    main_image: '',
    video_link_1: '',
    video_link_2: '',
    
  });

  const [contents, setContents] = useState([]);
  

  useEffect(() => {
    axiosClient.get('/contents')
      .then(response => {
        setContents(response.data);
        console.log(response.data);
      
      })
      .catch(error => {
        console.error(error);
       
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        const response = await axiosClient.patch(`/contents/${formData.id}`, formData);
        console.log(response.data);
        toastr.success('', response.data.message, {
          positionClass: 'toast-top-right',
          progressBar: true,
          timeOut: 3000,
        });
        // do something with the response
        
      } else {
        const response = await axiosClient.post('/contents', formData);
        console.log(response.data);
        toastr.success('',response.data.message, {
          positionClass: 'toast-top-right',
          progressBar: true,
          timeOut: 3000,
        });
        // do something with the response
      }
    } catch (error) {
      console.error(error);
      toastr.error( '', 'Something went wrong!',{
        positionClass: 'toast-top-right',
        progressBar: true,
        timeOut: 3000,
      });
    }
  };
  
  const [open,setOpen]=useState(false);

  const handleOpen=()=>{
    setOpen(!open);

  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  
  const handleButtonClick = (row) => {
    setFormData(row);
    handleOpen();
  };
  



  const data = contents;

  const columns = [
    { Header: 'No', accessor: 'no' },
    { Header: 'Daily Qoute', accessor: 'daily_quote' },
    { Header: 'Video Link_1', accessor: 'video_link_1' },
    { Header: 'Video Link_2', accessor: 'video_link_2' },
    { Header: 'Main Image', accessor: 'main_image' },
    {
      Header: "Actions",
      accessor: "id",
      id: "actions", // change the id value to "actions"
      Cell: ({ row }) => (
        <button onClick={() => handleButtonClick(row.original)} title="Edit">
          <MdEditNote />
        </button>
      ),
    },
  ];

  return (
    <>
      <button className='bg-black px-3 ml-6 mb-8 py-1 rounded-lg' onClick={handleOpen}>Add Content</button>

    { open &&
    <div className="flex flex-col  space-y-14">
      <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
        <div className="w-[2.5rem]">
          <AiFillPlayCircle className="w-full text-black" color="black" fill="#000" />
        </div>
        Video Link
      </div>
      <form className="pl-10 flex flex-col items-start space-y-4 text-black" onSubmit={handleSubmit}>
        <div className="font-semibold flex flex-row text-txtgreen font-sans">Insert Video Link</div>
        <div>
          <input
            type="text"
            placeholder="link 1"
            className="py-2 px-3 w-80 rounded-md"
            name="video_link_1"
            value={formData.video_link_1}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="link 2"
          className="py-2 px-3 w-80 rounded-md"
          name="video_link_2"
          value={formData.video_link_2}
          onChange={handleChange}
        />

        <div className=" flex flex-col items-start space-y-3 w-full">
          <div className="font-semibold text-dimtxt font-sans">Enter your quote here</div>
          <textarea
            placeholder="Type here..."
            rows={10}
            className=" bg-white w-[90%] p-2 outline-none rounded-md"
            name="daily_quote"
            value={formData.daily_quote}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* daily quoter will be submited here */}
        <button className="capitalize text-white bg-black rounded-md px-5 py-1" type="submit">
          SAVE
        </button>
      </form>
    </div>
    }

    <div className="w-[98%]">
            <div className="flex flex-col bg-white p-5 rounded-lg">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
                  <div className="w-full">
                <div className="mx-auto ">
                <Table2 data={data} columns={columns} />
                </div>
            </div>
            </div>
        </div>
  </div>
      {/* <div className="w-[98%]">
      <div className="flex flex-col bg-white p-5 rounded-lg">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="w-full">
              <div className="mx-auto ">
              <table className="w-full border border-black/50 ">
                <thead>
                  <tr className="bg-black">
                    <th className="p-3 text-left">No#</th>
                    <th className="p-3 text-left">Daily Qoute</th>
                    <th className="p-3 text-left">Video Link_1</th>
                    <th className="p-3 text-left">Video Link_2</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row,index) => (
                    <tr key={row.id} className="border-b border-black/50 text-black">
                      <td className="p-3">{index+1}</td>
                      <td className="p-3">{row.daily_quote}</td>
                      <td className="p-3">{row.video_link_1}</td>
                      <td className="p-3">{row.video_link_2}</td>
                      <td className="p-3 text-green-600 font-bold text-xl" title='Edit'>
                        <button onClick={() => handleButtonClick(row)}><MdEditNote/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              </div>
          </div>
          </div>
        </div>
      </div> */}
    
    </>

  );
}

export default Contents;
