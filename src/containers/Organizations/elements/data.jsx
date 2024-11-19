import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CaretUpDownIcon from "@/svgs/CaretUpDownIcon";
import { MoreVertical } from "lucide-react";
import event_img from "@/assets/images/events/event-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

export const getColumns = ({
  onDelete = console.log,
  onEdit = console.log,
  onView = console.log,
  isLoading,
  open,
  toggleOpen = console.log,
  loading,
}) => {
  return [
    {
      id: "organization",
      accessorFn: row => row.organization.name,
      header: props => {
        const { column } = props;
        return (
          <div
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting()}
          >
            <div className="capitalize">Organization Name</div>
            <CaretUpDownIcon />
          </div>
        );
      },
      cell: ({ row }) => {
        const organization = row.original.organization;
        return (
          <div className="flex items-center gap-3 w-60">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={value => row.toggleSelected(!!value)}
              aria-label="Select row"
              className="border-grey-light"
            />
            <Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
              <AvatarImage src={organization.image} alt="event image" />
              <AvatarFallback>
                {(organization?.name || "").split()[0]}{" "}
                {(organization?.name || "").split()[1]}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-medium truncate shrink">{organization.name}</h3>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "organizer",
      accessorFn: row => row.organizer.name,
      header: ({ column }) => (
        <div
          className="flex items-center gap-1"
          onClick={() => column.toggleSorting()}
        >
          <div className="capitalize">Owner</div>
          <CaretUpDownIcon />
        </div>
      ),
      cell: ({ row }) => {
        const organizer = row.original.organizer;
        return (
          <div className="flex items-center gap-3 w-36">
            <Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
              <AvatarImage src={organizer.image} alt="event image" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h3 className="font-medium truncate shrink">{organizer.name}</h3>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "phone",
      accessorFn: row => row.phone,
      header: "Phone Number",
      cell: ({ row }) => (
        <div className="flex items-center gap-3 w-36">{row.original.phone}</div>
      ),
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "email",
      accessorFn: row => row.email,
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 min-w-fit"
          onClick={() => column.toggleSorting()}
        >
          <div className="capitalize">Gmail Address</div>
          <CaretUpDownIcon />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3 w-36">
          <h3 className="font-medium truncate shrink">{row.original.email}</h3>
        </div>
      ),
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <Dialog open={open} onOpenChange={toggleOpen}>
          <DialogOverlay className="bg-transparent" />
          <DeleteConfirmationModal
            toggleOpen={a => {
              toggleOpen(a);
            }}
            loading={loading}
            onDelete={() => onDelete(row.original)}
          ></DeleteConfirmationModal>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                disabled={isLoading}
                className="float-right w-8 h-8 p-0 hover:bg-grey-dark hover:text-white"
              >
                <span className="sr-only">Open menu</span>
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => onView(row.original)}>
                View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(row.original)}>
                Edit
              </DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
        </Dialog>
      ),
    },
  ];
};

export const transformOrganizationData = organizations => {
  return organizations.map(org => {
    return {
      id: org._id,
      organization: {
        name: org?.name,
        image: org?.image?.url || event_img,
      },
      organizer: {
        name: org?._created_by?.name,
        phone: org?._created_by?.phone,
        email: org?._created_by?.email,
        image: org?.image?.url || event_img,
      },
      phone: org?._created_by?.phone,
      email: org?._created_by?.email,
    };
  });
};
