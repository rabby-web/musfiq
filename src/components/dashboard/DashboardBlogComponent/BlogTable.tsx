/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { TBlog } from "@/types/blog";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";

export default function BlogTable() {
  const [blogs, setBlogs] = React.useState<TBlog[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  // Table states
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Fetch blogs from API
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const result = await response.json();
        const data = result?.data;
        setBlogs(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchProjects();
  }, []);
  //   console.log(blogs);

  // delete blog
  async function handleDeleteBlog(id: string) {
    // Optimistic UI Update: Delete locally first
    const updatedBlogs = blogs.filter((blog) => blog._id !== id);
    setBlogs(updatedBlogs);
    try {
      const response = await fetch(
        `https://dreams-portfolio-backend.vercel.app/api/v1/blogs/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        toast.error("Failed to delete blog!");
        return;
      }

      const data = await response.json();

      if (data?.success) {
        toast.success("Blog deleted successfully!", {
          duration: 2000,
        });
      } else {
        toast.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Something went wrong!");
      // Rollback in case of error
      setBlogs([...blogs]);
    }
  }

  const columns: ColumnDef<TBlog>[] = [
    {
      accessorKey: "thumbnail",
      header: "Thumbnail Image",
      cell: ({ row }) => {
        const thumbnail = row.getValue("thumbnail");

        const isValidUrl =
          typeof thumbnail === "string" &&
          (thumbnail.startsWith("/") || thumbnail.startsWith("http"));

        return (
          <div className="w-[50px] h-[50px] overflow-hidden rounded-lg">
            {isValidUrl ? (
              <Image
                src={thumbnail}
                width={50}
                height={50}
                alt="Thumbnail Image"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span>Invalid Image</span>
              </div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("category")}</div>
      ),
    },
    {
      accessorKey: "authorName",
      header: "Author",
      cell: ({ row }) => (
        <div className="font-medium capitalize">
          {row.getValue("authorName")}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Published Date",
      cell: ({ row }) => {
        const date = row.getValue("createdAt");

        return (
          <div className="font-medium">
            {moment.tz(date, "UTC").format("MMMM D, YYYY")}
          </div>
        );
      },
    },

    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-transparent"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href={`/dashboard/blogs/blog-details/${blog?._id}`}
                  className="flex gap-2"
                >
                  <FaEye className="mr-2 text-green-600" /> View Details
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link
                  href={`/dashboard/blogs/update-blog/${blog?._id}`}
                  className="flex gap-2"
                >
                  <FaEdit className="mr-2 text-amber-500" /> Edit
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleDeleteBlog(blog?._id)}
                className="cursor-pointer"
              >
                <FaTrash className="mr-2 text-red-600" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: blogs,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  });

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter blogs by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-white border-[#27272A]"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto text-white hover:text-white border-[#27272A] bg-[#0A0A0A] hover:bg-[#27272A]"
            >
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-[#27272A]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-[#27272A] border-[#27272A]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-[#989BA4]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-[#27272A] border-[#27272A]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-white">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-[#989BA4]"
                >
                  No blogs data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-[#8750F7] text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-white hover:text-white bg-[#140C1C] hover:bg-[#27272A] border-[#27272A]"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-white bg-[#140C1C] hover:bg-[#27272A] hover:text-white border-[#27272A]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
