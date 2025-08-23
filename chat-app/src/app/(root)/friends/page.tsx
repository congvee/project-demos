"use client"

import ConversationFallBack from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import AddFriendDialog from "./_components/AdddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";
import Request from "./_components/Request";

export default function FriendsPage() {
  const requests = useQuery(api.requests.get);

  return <>
    <ItemList title="Friends" action={<AddFriendDialog />}>
      {
        requests ? 
          requests.length === 0 ? 
            <p className=" w-full h-full flex items-center justify-center">No friend requests found</p> :
            (
              requests.map(request => {
                console.log(request);
                return <Request
                  key={request.request._id} 
                  id={request.request._id} 
                  imageUrl={request.sender.imageUrl}
                  username={request.sender.username}
                  email={request.sender.email}
                />
              })
            ) :
          <Loader2 className=" h-0 w-8" />
      }
    </ItemList>
    <ConversationFallBack />
  </>
}