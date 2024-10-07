"use client"
import { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (

    <div className='flex items-center justify-center min-h-screen'>
      {step === 1 && (
        <form onSubmit={nextStep}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Next</button>
        </form>
      )}
      
      {step === 2 && (
        <form onSubmit={nextStep}>
             <button type="button" onClick={prevStep}>Back</button>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
         
          <button type="submit">Next</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={nextStep}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 4 && (
        <form onSubmit={nextStep}>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit</button>
        </form>
      )}

      {step === 6 && (
        <div>
          <h1>Thanks for submitting the form!</h1>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
