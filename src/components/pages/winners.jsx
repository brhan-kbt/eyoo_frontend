import { useState } from "react";
import { TfiCup } from "react-icons/tfi";
import axios from "axios";
import axiosClient from "../../axios";

const Winners = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    phone_number: "",
    date: "",
    cardBirr: "",
    photo: null,
  });
  // const handleFormChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prevState) => ({
      ...prevState,
      photo: file,
    }));
    console.log(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataSent = new FormData();
      formDataSent.append("email", formData.email);
      formDataSent.append("name", formData.name);
      formDataSent.append("phone_number", formData.phone_number);
      formDataSent.append("date", formData.date);
      formDataSent.append("cardBirr", formData.cardBirr);
      formDataSent.append("photo", formData.photo);


      
      console.log("Form Data:");
for (const pair of formDataSent.entries()) {
  console.log(pair[0] + ": " + pair[1]);
}
      const response = await axiosClient.post(
        "/winners",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Add any further logic to handle the response from the backend
    } catch (error) {
      console.log(error);
      // Add any further logic to handle errors
    }
  };
  

  return (
    <div className="flex flex-col  space-y-14">
      <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
        <div className="w-[2.5rem]">
          <TfiCup className="w-full text-black" color="black" fill="#000" />
        </div>
        Winner
      </div>
      <form className="w-[98%] flex flex-col items-start  bg-white space-y-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col w-[100%] space-y-4 px-1 rounded-lg py-8">
          <div className=" flex flex-col space-y-4">
            <ul className="flex flex-col space-y-6 list-none md:px-5">
              <li>
                <span className="flex flex-col  ">
                  <label className="ml-3 py-2" htmlFor="">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name..."
                    className="bg-fieldGrey py-2 ml-3 w-[60%] outline-none border rounded-md border-fieldBorder"
                  />
                </span>
              </li>
              <li>
                <span className="flex flex-col ">
                  <label className="ml-3 py-2">Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="email"
                    className="bg-fieldGrey py-2 ml-3 px-3 w-[60%] outline-none border rounded-md border-fieldBorder"
                  />
                </span>
              </li>
              <li>
                <span className="flex flex-col ">
                  <label className="ml-3 py-2">Phone No.</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleFormChange}
                    placeholder="093200**10"
                    className="bg-fieldGrey py-2 px-3 w-[60%] ml-3 outline-none border rounded-md border-fieldBorder"
                  />
                </span>
              </li>
              <li>
                <span className="flex flex-col ">
                  <label className="ml-3 py-2">Date</label>
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    placeholder="name"
                    className="bg-fieldGrey py-2 px-3 w-[60%] ml-3 outline-none border rounded-md border-fieldBorder"
                  />
                </span>
              </li>
              <li>
                <span className="flex flex-col ">
                  <label className="ml-3 py-2">Card</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="cardBirr"
                      value={formData.cardBirr}
                      onChange={handleFormChange}
                      placeholder="100"
                      className="bg-fieldGrey py-2 px-3 w-[60%] ml-3 outline-none border rounded-md border-fieldBorder"
                    />
                    </div>
                </span>
              </li>
              <li>
                <span className="flex flex-col ">
                  <label className="ml-3 py-2">Photo</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      name="photo"
                      // value={formData.photo}
                      onChange={handleFileChange}
                      placeholder="100"
                      className="bg-fieldGrey py-2 px-3 w-[60%] ml-3 outline-none border rounded-md border-fieldBorder"
                    />
                    </div>
                </span>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="rounded-md bg-black text-white py-3 px-8 font-semibold text-lg hover:bg-opacity-80 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Winners;