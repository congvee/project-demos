"use client"

import ItemList from "@/components/shared/item-list/ItemList";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";
import DMConversationItem from "./_components/DMConversationItem";

export default function ConversationsLayout({children} : {children: React.ReactNode}) {
  const conversations = useQuery(api.conversations.get);

  return <>
    <ItemList title="Conversations">
      {conversations ? (
        conversations.length === 0 ? (
          <p className=" w-full h-full flex items-center justify-center">
            No Conversations found
          </p>
        ) : (
          conversations.map(conversation => {
            return conversation.conversation.isGroup ? null : (
              <DMConversationItem 
                key={conversation.conversation._id}
                id={conversation.conversation._id}
                imageUrl={conversation.otherMember?.imageUrl || ""}
                username={conversation.otherMember?.username || ""}
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