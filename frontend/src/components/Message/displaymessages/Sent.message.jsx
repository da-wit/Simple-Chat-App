const Sentmessage = ({message,time}) => {
  return (
    <div className="flex flex-col items-end mr-2">
      
    <div className="w-max max-w-xs p-2  text-lg text-white bg-blue-400 break-words  rounded-tl-lg rounded-bl-lg rounded-tr-lg">
      {message}
    </div>
    <span className="text-sm text-slate-300 mb-2">{time}</span>
    </div>

  )
}

export default Sentmessage