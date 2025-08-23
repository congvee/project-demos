import Link from "next/link";
import { Id } from "../../../../../convex/_generated/dataModel"
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Props {
  id: Id<"conversations">;
  imageUrl: string;
  username: string;
}

export default function DMConversationItem({
  id,
  imageUrl,
  username
}: Props) {

  return <Link href={`/conversations/${id}`} className=" w-full">
    <Card className=" p-2 flex flex-row items-center gap-4 truncate">
      <div className=" flex flex-row items-center gap-4 truncate">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div className=" flex flex-col truncate">
          <h4 className=" truncate"> {username} </h4>
          <p className=" text-sm text-muted-foreground">
            Start the conversation!
          </p>
        </div>
      </div>
    </Card>
  </Link>
}