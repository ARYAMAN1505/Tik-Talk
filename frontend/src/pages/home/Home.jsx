import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full md:w-1/4 bg-gray-800 text-white h-full">
                <Sidebar />
            </div>
            <div className="w-full md:w-3/4 h-full overflow-y-auto bg-gray-200">
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
