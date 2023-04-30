import {SlNotebook} from 'react-icons/sl'

const submit = (event) =>{
  event.preventDefault()
}

function Quote() {
  
  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="font-bold text-3xl text-txtclr w-full capitalize flex gap-3 items-center">
            <div className='w-[2.5rem]'>
                <SlNotebook className='w-full text-black' color='black' fill='#000'/>
            </div>
                Daily Quote
            </div>
      <form className="pl-10 flex flex-col items-start space-y-3 w-full" onSubmit={submit}>
        <div className="font-semibold text-dimtxt font-sans">
          please enter your quote here
        </div>
        <textarea
          placeholder="Type here..."
          rows={10}
          className=" bg-white w-[90%] p-2 outline-none rounded-md"
        ></textarea>

        {/* daily quoter will be submited here */}
        <button className="capitalize text-white bg-[#23675A] rounded-sm px-5 py-1">
          SAVE
        </button>
      </form>
    </div>
  );
}

export default Quote;
