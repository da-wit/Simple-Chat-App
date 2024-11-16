const CheckBox = ({label})=> {
return <div>
    <div className="flex m-2 items-center">
        <label htmlFor={label.toLowerCase()} className="text-lg mr-2">{label}</label>
        <input type="checkbox" id={label.toLowerCase()} className="w-6 h-6 border-2 rounded-md checked:bg-blue-500"/>
    </div>
</div>
}
export default CheckBox;