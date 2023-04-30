import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdEditNote } from 'react-icons/md';
import { RiQuestionnaireFill } from 'react-icons/ri';
import Table2 from './Table2';
import toastr from 'toastr';
import axiosClient from '../../axios';


function Question() {
  const [formData, setFormData] = useState({
    question: '',
    choice_a: '',
    choice_b: '',
    choice_c: '',
    choice_d: '',
    answer: '',
    startDate: '',
    endDate: '',
    isActive: false,
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        const response = await axiosClient.patch(`/questions/${formData.id}`, formData);
        console.log(response.data);
        toastr.success('', 'Question Updated Successfully!', {
          positionClass: 'toast-top-right',
          progressBar: true,
          timeOut: 3000,
        });
        // do something with the response
      } else {
        const response = await axiosClient.post('/questions', formData);
        console.log(response.data);
        toastr.success('', 'Question Updated Successfully!', {
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
  const [questions, setQuestions] = useState([]);
  const [open,setOpen]=useState(false);
  
  const handleButtonClick = (row) => {
    setFormData(row);
    handleOpen();
  };
  const handleOpen=()=>{
    setOpen(!open);
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  

  useEffect(() => {
    axiosClient.get('/questions')
      .then(response => {
        const sortedQuestions = response.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        setQuestions(sortedQuestions);
        console.log(sortedQuestions);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  

  const data = questions;
  const columns = [
    {
      Header: "No#",
      accessor: "id",
    },
    {
      Header: "Question",
      accessor: "question",
    },
    {
      Header: "Ch-A",
      accessor: "choice_a",
    },
    {
      Header: "Ch-B",
      accessor: "choice_b",
    },
    {
      Header: "Ch-C",
      accessor: "choice_c",
    },
    {
      Header: "Ch-D",
      accessor: "choice_d",
    },
    {
      Header: "Answer",
      accessor: "answer",
    },
    {
      Header: "Status",
      accessor: "isActive",
      Cell: ({ value }) => (
        <span className={value ? "h-3 w-3 inline-block rounded-sm bg-green-500" : "h-3 w-3 inline-block rounded-sm bg-red-500"}>
          {/* {value ? "Active" : "Inactive"} */}
        </span>
      ),
    },
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
  
  // const columns = [
  //   { Header: 'No', accessor: 'no' },
  //   { Header: 'Daily Qoute', accessor: 'daily_quote' },
  //   { Header: 'Video Link_1', accessor: 'video_link_1' },
  //   { Header: 'Video Link_2', accessor: 'video_link_2' },
  //   { Header: 'Main Image', accessor: 'main_image' },
  //   { Header: 'Actions', accessor: '<a>edit</a>' },
  // ];
  return (

    
    <>
    <button className='bg-green-600/50 rounded-lg p-3 text-black' onClick={handleOpen}>Add Question</button>
      {open &&
      <div className="flex flex-col space-y-2 text-black">
        <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
          <div className='w-[2.5rem]'>
            <RiQuestionnaireFill className='w-full text-black' color='black' fill='#000'/>
          </div>
          Ask Question
        </div>
        <form className="pl-10 flex flex-col items-start space-y-4" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col space-y-4">
            <div className="font-semibold text-green font-sans text-2xl">
              Questions
            </div>
            <div>
              <input type="text" placeholder="Enter the first Question" className="py-2 px-3 w-[90%] rounded-md" name="question" value={formData.question} onChange={handleChange}/>
            </div>
            <ol className="flex flex-col space-y-3 list-decimal list-outside">
              <li >
                <input type="text" placeholder="choose 1" className="py-2 px-3 w-64 outline-none rounded-md" name="choice_a" value={formData.choice_a} onChange={handleChange}/>
              </li>
              <li>
                <input type="text" placeholder="choose 2" className="py-2 px-3 w-64 outline-none rounded-md" name="choice_b" value={formData.choice_b} onChange={handleChange}/>
              </li>
              <li>
                <input type="text" placeholder="choose 3" className="py-2 px-3 w-64 outline-none rounded-md" name="choice_c" value={formData.choice_c} onChange={handleChange}/>
              </li>
              <li>
                <input type="text" placeholder="choose 4" className="py-2 px-3 w-64 outline-none rounded-md" name="choice_d" value={formData.choice_d} onChange={handleChange}/>
              </li>
            </ol>
            <span className="flex items-center space-x-4">
              <div>start Date:</div>
              <input type="datetime-local" className="w-56 px-3 py-2 bg-gray-400 text-black rounded-md" name="startDate" value={formData.startDate} onChange={handleChange}/>
            </span>
            <span className="flex items-center space-x-4">
              <div>end Date:</div>
              <input type="datetime-local" className="w-56 px-3 py-2 bg-gray-400 text-black rounded-md" name="endDate" value={formData.endDate} onChange={handleChange}/>
            </span>

            <span className="flex items-center space-x-4">
              <div>Answer:</div>
              <input type="text" className="w-56 px-3 py-2 outline-none rounded-md" name="answer" value={formData.answer} onChange={handleChange}/>
            </span>
            <span className="flex items-center space-x-4">
              <div>Active</div>
              <input type="checkbox" className=" px-2 py-2 outline-none rounded-md" name="isActive" checked={formData.isActive} onChange={() => setFormData({ ...formData, isActive: !formData.isActive })}/>
            </span>
          </div>
          {/* daily quoter will be submited here */}
          <button className="capitalize text-white z-50 bg-black rounded-sm px-5
        py-2 hover:bg-gray-700" type="submit">
        Submit
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
                    <th className="p-3 text-left">Question</th>
                    <th className="p-3 text-left">Ch-A</th>
                    <th className="p-3 text-left">Ch-B</th>
                    <th className="p-3 text-left">Ch-C</th>
                    <th className="p-3 text-left">Ch-D</th>
                    <th className="p-3 text-left">Start Date</th>
                    <th className="p-3 text-left">End Date</th>
                    <th className="p-3 text-left">Answer</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row,index) => (
                    <tr key={row.id} className="border-b border-black/50 text-black">
                      <td className="p-3">{index+1}</td>
                      <td className="p-3">{row.question}</td>
                      <td className="p-3">{row.choice_a}</td>
                      <td className="p-3">{row.choice_b}</td>
                      <td className="p-3">{row.choice_c}</td>
                      <td className="p-3">{row.choice_d}</td>
                      <td className="p-3">{row.startDate}</td>
                      <td className="p-3">{row.endDate}</td>
                      <td className="p-3">{row.answer}</td>
                      
                      {!row.isActive && <td className="p-3 text-sm font-bold text-red-700">Inactive</td>}
                      {row.isActive && <td className="p-3 text-sm text-green-500 font-bold">Active</td>}
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

export default Question;