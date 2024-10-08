"use client"
import { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import '../styles/globals.css'
const PhoneInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Initialize intl-tel-input only on the client side
    const phoneInputInstance = intlTelInput(inputRef.current, {
      initialCountry: 'mn', // Set default country (Mongolia)
      separateDialCode: true, // To show the country code separately
    });

    // Clean up the instance when the component unmounts
    return () => {
      phoneInputInstance.destroy();
    };
  }, []);

  const handleInputChange = () => {
    const inputVal = inputRef.current.value;
    onChange(inputVal);
  };

  return (
    <input
      ref={inputRef}
      type="tel"
      value={value}
      onChange={handleInputChange}
      className="form-control"
      placeholder="Enter phone number"
      id="phone"
    />
  );
};

export default PhoneInput;
