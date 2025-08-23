"use client"

import ItemList from "@/components/shared/item-list/ItemList";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";
import DMConversationItem from "./_components/DMConversationItem";
import CreateGroupDialog from "./_components/CreateGroupDialog";
import GroupConversationItem from "./_components/GroupConversationItem";

export default function ConversationsLayout({children} : {children: React.ReactNode}) {
  const conversations = useQuery(api.conversations.get);

  return <>
    <ItemList title="Conversations" action={<CreateGroupDialog />}>
      {conversations ? (
        conversations.length === 0 ? (
          <p className=" w-full h-full flex items-center justify-center">
            No Conversations found
          </p>
        ) : (
          conversations.map(conversation => {
            return conversation.conversation.isGroup ? (
              <GroupConversationItem 
                key={conversation.conversation._id}
                id={conversation.conversation._id}
                name={conversation.conversation.name || ""}
                lastMessageSender={conversation.lastMessage?.sender}
                lastMessageContent={conversation.lastMessage?.content}
              />
            ) : (
              <DMConversationItem 
                key={conversation.conversation._id}
                id={conversation.conversation._id}
                imageUrl={conversation.otherMember?.imageUrl || ""}
                username={conversation.otherMember?.username || ""}
                lastMessageSender={conversation.lastMessage?.sender}
                lastMessageContent={conversation.lastMessage?.content}
              />
            );
          })
        )
      ) : (
        <Loader2 />
      )}
    </ItemList>  
    {children}
  </>;
}