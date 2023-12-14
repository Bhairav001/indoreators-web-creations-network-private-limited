import React from 'react';
import { IoClose } from 'react-icons/io5';

const Form = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center items-center">
      <form className="bg-white shadow-md w-96 flex flex-col p-8" onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <IoClose />
        </div>
        <label className="text-lg">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={rest.name}
          className="text-base border-b border-gray-300 p-2 mt-2 mb-4"
        />

        <label className="text-lg">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
          value={rest.email}
          className="text-base border-b border-gray-300 p-2 mt-2 mb-4"
        />

        <label className="text-lg">Mobile: </label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleOnChange}
          value={rest.mobile}
          className="text-base border-b border-gray-300 p-2 mt-2 mb-4"
        />

        <button className="submit-btn bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
