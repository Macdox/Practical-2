import React from 'react'


const [PasswordValid, SetpasswordValid] = useState(
    {
    passsword : '',
    passwordLength : false,
    isUpperCase : false,
    isLowerCase :false,
    isNumber : false,
    isSpecialChar : false,
    }
);
function PasswordStrength() {
  return (
    <div>PasswordStrength</div>
  )
}

export default PasswordStrength