const Conversation = ({ name,username,profilePic,isOnline,onclick,isSelected=false }) => {
    return <>
        <div className={`m-2 px-2 ${isSelected ?"bg-blue-500": 'bg-sky-900' } rounded-lg ${isSelected?"": 'hover:bg-sky-800'} flex items-center gap-5 border-l-4 ${isOnline ? 'border-l-green-400' : 'border-none'}`}  onClick={onclick}>
            <div className="w-16 rounded-full overflow-hidden"><img src={profilePic} alt={username} /></div>
            <div className="text-white">
                {name}
                <p>{username}</p>
            </div>

        </div>

    </>
}
export default Conversation;