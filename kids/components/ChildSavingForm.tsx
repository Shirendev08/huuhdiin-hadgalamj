"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
const ChildSavingForm = () => {
    const [formData, setFormData] = useState({
        childName: '',
        parentName: '',
        bankBranch: '',
        accountNumber: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <div>
    <h1>Child Savings Account Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Child's Name</label>
        <input
          type="text"
          name="childName"
          value={formData.childName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Parent's Name</label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Bank Branch</label>
        <input
          type="text"
          name="bankBranch"
          value={formData.bankBranch}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Account Number</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ChildSavingForm