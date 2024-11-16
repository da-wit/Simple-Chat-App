const Sentmessage = ({message="sfdkjf dkf jkdjf kjdkf kjd f"}) => {
  return (
    <div className="flex flex-col items-end mr-2">
      
    <div className="w-max max-w-xs p-2  text-lg text-white bg-blue-400 break-words  rounded-tl-lg rounded-bl-lg rounded-tr-lg">
      {message}
    </div>
    <span className="text-sm text-gray-500 mb-2">Timestamp</span>
    </div>

  )
}

export default Sentmessage