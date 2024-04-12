import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

const MainTable = ({
    data,
    columns,
}: any) => {

    const table = useReactTable({
        data,
        columns,
        // pageCount: dataQuery.data?.pageCount ?? -1,
        // state: {
        //   pagination,
        // },
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <table className="table datatable-table">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MainTable;
