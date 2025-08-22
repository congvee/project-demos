import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

export default function ConversationsLayout({children} : {children: React.ReactNode}) {
  return <>
    <ItemList title="Conversations">
      Conversations page
    </ItemList>  
    {children}
  </>;
}