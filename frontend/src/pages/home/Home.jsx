import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex md:flex-row flex-col h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="md:w-2/5 md:flex-shrink-0 h-full md:h-auto overflow-y-auto bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <Sidebar />
            </div>
            
            {/* Message Container */}
            <div className="md:w-3/5 h-full overflow-y-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
