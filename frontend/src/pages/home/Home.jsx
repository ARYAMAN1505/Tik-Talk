import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row items-stretch h-screen overflow-y-auto rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div className='w-full md:w-1/4'>
                <Sidebar />
            </div>
            <div className='w-full md:w-3/4'>
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
