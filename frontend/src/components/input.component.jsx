const  CustomeInput = ({lableName,name,placeHolder,type,value,onchange,hasError=false,onblur=()=>{}}) =>{
    const errorMessages = {
        username: "Username needs to have at least 3 characters",
        fullname: "Fullname needs to have at least 3 characters",
        password: "Password needs to have at least 6 characters",
        confirmpassword: "Passwords do not match",
      };
return <div>
    <label htmlFor={name} className="text-lg mb-2 block">{lableName}</label>
<input type={type} placeholder={placeHolder} id={name} className="rounded-md w-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-blue-400" value={value} onChange={onchange}  onBlur={() => onblur(name)}/>
{hasError && (
        <span className="text-red-500 block">
          {errorMessages[name.toLowerCase().trim()] || "Invalid input"}
        </span>
      )}
</div>
}
export default CustomeInput;