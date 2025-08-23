"use client"

import { Dispatch, SetStateAction } from "react";
import { Id } from "../../../../../../../convex/_generated/dataModel";
import { userMutationState } from "@/hooks/useMutationState";
import { api } from "../../../../../../../convex/_generated/api";
import { toast } from "sonner";
import { ConvexError } from "convex/values";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";


interface Props {
  conversationId: Id<"conversations">;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function LeaveGroupDialog({
  conversationId,
  open,
  setOpen
}: Props) {

  const { mutate: leaveGroup, pending } = userMutationState(api.conversation.leaveGroup);

  async function handleLeaveGroup() {
    leaveGroup({ conversationId })
      .then(() => {
        toast.success("Group left!");
      })
      .catch(error => {
        toast.error(error instanceof ConvexError ? error.data : "Unexpected error occurred1111")
      })
  }

  return <AlertDialog open={open} onOpenChange={setOpen}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Are you sure?
        </AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. You will not be able to see any previous message or send new messages to this group.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel disabled={pending}> Cancel </AlertDialogCancel>
        <AlertDialogAction disabled={pending} onClick={handleLeaveGroup}>Leave</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

}