import Divider from "../divider";
import { Conversations } from "./conversations/conversations.component";
import { Logout } from "./logout/logout";
import { Searchinput } from "./search/searchinput.component";

const SideBar = () => {
    return <div className=" max-h-screen  flex flex-col border-r border-slate-500">
        <Searchinput/>
        <Divider/>
        <Conversations/>
        <Logout/>
    </div>
}
export default SideBar;