
const Receivedmessage = ({message,time}) => {
  return (
    <div className="flex flex-col ml-2 items-start">
    <div className="w-max max-w-xs p-2 m text-lg text-white bg-black break-words  rounded-tr-lg rounded-br-lg rounded-tl-lg">
      {message}
    </div>
    <span className="text-sm mb-2 text-slate-300">{time}</span>
    </div>
      
  )
}

export default Receivedmessage;
