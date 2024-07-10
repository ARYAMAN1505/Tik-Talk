import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import notificationSound from "../assets/sounds/notification.mp3";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { selectedConversation, messages, setMessages } = useConversation();

    useEffect(() => {
        if (!selectedConversation) return;

        socket?.on("newMessage", (newMessage) => {
            if (newMessage.conversationId !== selectedConversation._id) return;

            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, selectedConversation, setMessages, messages]);
};

export default useListenMessages;
