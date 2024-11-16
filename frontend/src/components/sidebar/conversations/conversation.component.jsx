const Conversation = ({ isOnline = false }) => {
    return <>
        <div className={`m-2 px-2 bg-sky-900 rounded-lg hover:bg-sky-400 flex items-center gap-5 border-l-4 ${isOnline ? 'border-l-green-400' : 'border-none'}`}>
            <div className="w-16 rounded-full overflow-hidden"><img src="https://th.bing.com/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?rs=1&pid=ImgDetMain" alt="profile pic" /></div>
            <div>
                Name
                <p>username</p>
            </div>

        </div>

    </>
}
export default Conversation;