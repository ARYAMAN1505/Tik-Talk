import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full md:w-3/8 h-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 p-4">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-y-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 p-4">
                <div className="h-full">
                    <MessageContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;
