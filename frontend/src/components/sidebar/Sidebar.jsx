import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col h-full">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations className="flex-grow overflow-y-auto" />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
