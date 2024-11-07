const  CustomeInput = ({lableName,name,placeHolder,type,}) =>{
return <div>
    <label htmlFor={name} className="text-lg mb-2 block">{lableName}</label>
<input type={type} placeholder={placeHolder} id={name} className="rounded-md w-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-blue-400"/>
</div>
}
export default CustomeInput;