/* eslint-disable react/prop-types */
import { flexRender } from "@tanstack/react-table";

export default function Table({table}) {
  return (
    <div>
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-black">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="">
                    {header.isPlaceholder ? null : (
                      <div className="flex min-w-[250px]">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="gap-20 border border-black pl-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
