import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full md:w-1/3 h-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <Sidebar />
            </div>
            <div className="w-full md:w-2/3 h-full overflow-y-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
