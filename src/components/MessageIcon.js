import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';


const MessageIcon = () => {
    return (
        <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
            <BsFillChatDotsFill></BsFillChatDotsFill>
        </div>
    );
};

export default MessageIcon;