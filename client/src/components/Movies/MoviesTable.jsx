/* eslint-disable react/prop-types */
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from '@tanstack/react-table';
import columns from './columns';
import Table from '../../ui-core/Table';

export default function   MoviesTable({ data }) {
    const table = useReactTable({
        columns,
        data,
        enableColumnFilters: false,
        enableFilters: false,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });
  return (
    <Table
      className="flex w-full flex-1 flex-col justify-between"
      table={table}
      />
  )
}