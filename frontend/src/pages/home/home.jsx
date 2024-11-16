import Messages from "../../components/Message/message"
import SideBar from "../../components/sidebar/sidebar.component"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] lg:h-screen bg-clip-padding backdrop-filter backdrop-blur-lg rounded-lg">
     <SideBar/>
     <Messages/>
    </div>
  )
}

export default Home
