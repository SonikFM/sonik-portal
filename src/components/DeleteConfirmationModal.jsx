import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const DeleteConfirmationModal = ({ onDelete, toggleOpen, loading = false }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this record ? This action cannot be
          undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="secondary" onClick={() => toggleOpen(false)}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={onDelete} disabled={loading}>
          {loading ? "Deleting" : "Delete"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteConfirmationModal;
