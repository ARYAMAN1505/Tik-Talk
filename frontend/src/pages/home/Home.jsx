import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar className='w-full md:w-1/4' />
            <MessageContainer className='w-full md:w-3/4' />
        </div>
    );
};

export default Home;
