const CheckBox = ({label,onchange,selected})=> {
return <div>
    <div className="flex m-2 items-center">
        <label htmlFor={label.toLowerCase()} className="text-lg mr-2">{label}</label>
        <input type="checkbox" id={label.toLowerCase()} className=" w-6 h-6 border-2 rounded-md checked:bg-blue-500 " checked={selected === label.toLowerCase()} onChange={() => onchange(label.toLowerCase())} />
    </div>
</div>
}
export default CheckBox;