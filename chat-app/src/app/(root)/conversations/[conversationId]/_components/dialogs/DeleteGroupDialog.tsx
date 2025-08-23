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

export default function DeleteGroupDialog({
  conversationId,
  open,
  setOpen
}: Props) {

  const { mutate: deleteGroup, pending } = userMutationState(api.conversation.deleteGroup);

  async function handleDeleteGroup() {
    deleteGroup({ conversationId })
      .then(() => {
        toast.success("Group deleted!");
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
          This action cannot be undone. All message will be deleted and
          you will not be able to message this group.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel disabled={pending}> Cancel </AlertDialogCancel>
        <AlertDialogAction disabled={pending} onClick={handleDeleteGroup}>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

}