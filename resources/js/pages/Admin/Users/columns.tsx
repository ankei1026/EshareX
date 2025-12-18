"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Chip from '@mui/material/Chip';

export type User = {
  id: string
  name: string
  username: string
  email: string
  role: "admin" | "user"
}

export const userColumns = (
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
): ColumnDef<User>[] => [
    // {
    //   id: 'id',
    //   header: ({ column }) => (
    //     <div className="text-center">ID</div>
    //   ),
    //   cell: ({ row, table }) => (
    //     <div className="text-black text-center">
    //       {row.index + 1 + table.getState().pagination.pageIndex * table.getState().pagination.pageSize}
    //     </div>
    //   )
    // },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: ({ column }) => (
        <div className="text-center text-black">Role</div>
      ),
      cell: ({ row }) => {
        const role = row.original.role;
        const color: "success" | "primary" = role === "admin" ? "success" : "primary";

        // const userRole: string = role === "admin" ? "Admin" : "User";

        // const colorMap: Record<string, string> = {
        //   admin: "success",
        //   user: "primary",
        // }
        // const color: string = colorMap[role];

        // let color: string;
        // switch (role) {
        //   case 'admin':
        //     color = "success";
        //     break;
        //   case 'user':
        //     color = "primary"
        //     break;
        //   default:
        //     color = "primary";
        // }

        const roleMap: Record<string, string> = {
          admin: 'Admin',
          user: 'User'
        }
        const userRole: string = roleMap[role] || 'Unknown';

        return <div className="text-center"><Chip color={color} variant="outlined" label={userRole} ></Chip></div>;
      },
    },
    {
      header: ({ column }) => (
        <div className="text-center">Actions</div>
      ),
      id: "actions",
      cell: ({ row }) => {

        return (
          <div className="text-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleEdit(row.original.id)}>Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleDelete(row.original.id)}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]