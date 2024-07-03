import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <div className="w-full md:w-2/5 h-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <Sidebar />
            </div>
            <div className="w-full md:w-3/5 h-full overflow-y-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 md:ml-0 md:mt-0 md:border-t-0 border-t">
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
