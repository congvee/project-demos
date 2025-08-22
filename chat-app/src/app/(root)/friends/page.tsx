import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import ConversationFallBack from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";

export default function FriendsPage() {
  return <>
    <ItemList title="Friends">
      Friend page
    </ItemList>
    <ConversationFallBack />
  </>
}