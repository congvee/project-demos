"use client"

import { useConversation } from "@/hooks/useConversation"
import { useQuery } from "convex/react";
import { api } from "../../../../../../../convex/_generated/api";
import { Id } from "../../../../../../../convex/_generated/dataModel";
import Message from "./Message";

export default function Body() {
  const { conversationId } = useConversation();

  const messages = useQuery(api.messages.get, {
    id: conversationId as Id<"conversations">
  })

  return <div className=" flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar">
    {messages?.map(({
      message,
      senderImage,
      senderName,
      isCUrrentUser
    }, index) => {
      const lastByUser = messages[index - 1]?.message.senderId === messages[index]?.message.senderId;
      return <Message
        key={message._id}
        senderImage={senderImage}
        senderName={senderName}
        fromCurrentUser={isCUrrentUser}
        lastByUser={lastByUser}
        createdAt={message._creationTime}
        content={message.content}
        type={message.type}
      />
    })}
  </div>
}