import React, { useState } from 'react';

function OtpInput({ length = 4, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/, ''); // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    if (newOtp.every((char) => char !== '')) {
      onOtpSubmit(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="otp-container">
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength="1"
          className="otp-input w-10 h-10 rounded-md text-black m-2 border-2 border-black text-center"
        />
      ))}
    </div>
  );
}

export default OtpInput;
