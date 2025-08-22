import { Card } from "@/components/ui/card";

export default function ConversationContainer({ children }: {children: React.ReactNode}) {
  return <Card className=" w-full h-[calc(100vh-32px)] lg:h-full p-2 flex flex-col gap-2">
    {children}
  </Card>
}