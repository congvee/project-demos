import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MessageSquare, Users } from 'lucide-react';

export function useNavigation() {
  const pathname = usePathname();

  const paths = useMemo(() => {
    return [{
      name: "Conversations",
      href: "/conversations",
      icon: <MessageSquare />,
      active: pathname.startsWith("/conversations")
    }, {
      name: "Friends",
      href: "/friends",
      icon: <Users />,
      active: pathname === "/friends"
    }];
  }, [pathname]);

  return paths;
}