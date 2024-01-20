import React, { useState, useEffect } from 'react';

export function Input({ label, type, id, val, placeholder }) {
   


    return (
        <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <label htmlFor={id} className="font-semibold capitalize">
            {label}
          </label>
        </div>
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
           value={val}
          placeholder={placeholder}
        />
      </div>
    );
    



}
export default Input;