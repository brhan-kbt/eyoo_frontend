import { useState, useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { HiOutlineSearch } from 'react-icons/hi';

const Table = ({ data, columns }) => {
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = e => {
    const value = e.target.value || '';
    setFilterInput(value);
  };

  const defaultColumn = useMemo(
    () => ({
      Filter: ({ column: { filterValue, preFilteredRows = [], setFilter } }) => {
        const count = preFilteredRows.length;
  
        // return (
        //   <input
        //     type="text"
        //     value={filterValue || ''}
        //     onChange={e => {
        //       setFilter(e.target.value || undefined);
        //     }}
        //     className="w-full px-2 py-1 border rounded-md outline-none focus:border-blue-500"
        //     placeholder={`Search ${count} records...`}
        //   />
        // );
      },
    }),
    []
  );
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, globalFilter, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 5 }, 
    },
    useGlobalFilter,
    usePagination
  );

  const pageSizeOptions = [5,10, 20, 30, 40, 50];

  return (
    <div className="flex  p-5 flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <HiOutlineSearch className="w-6 h-6 mr-2 text-gray-400" />
          <input
            type="text"
            className="w-full md:w-96 px-2 py-1 border rounded-md outline-none focus:border-blue-500"
            value={globalFilter || ''}
            onChange={e => {
                setGlobalFilter(e.target.value || undefined);
            }}
            placeholder="Search..."
            />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Show</span>
          <select
            className="border rounded-md outline-none focus:border-blue-500"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {pageSizeOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="text-gray-600">rows per page</span>
        </div>
      </div>
      <table {...getTableProps()} className="w-full border border-black/50 ">
        <thead className="bg-black/25">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 text-left font-bold text-gray-700"
                >
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span className="ml-1 text-gray-400">&#x2193;</span>
                    ) : (
                      <span className="ml-1 text-gray-400">&#x2191;</span>
                    )
                  )
                  : null}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=" text-black divide-y divide-black/50">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, j) => {
                  // Display row number in first column
                  if (j === 0) {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-2 px-4 text-sm font-medium"
                      >
                        {i + 1}
                      </td>
                    );
                  }
                  // Conditional rendering for cells with true or false values
                  if (typeof cell.value === 'boolean') {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-2 px-4 text-sm font-medium"
                      >
                        <span
                          className={`h-3 w-3 inline-block rounded-sm ${
                            cell.value === true ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                      </td>
                    );
                  }
                  // Format date cells
                  if (typeof cell.value === 'string' && Date.parse(cell.value)) {
                    const formattedDate = new Date(cell.value).toLocaleString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: true
                    });
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-2 px-4 text-sm font-medium"
                      >
                        {formattedDate}
                      </td>
                    );
                  }
                  // Render other cells as usual
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 px-4 text-sm font-medium"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>


      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md border border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{`Page ${pageIndex + 1} of ${Math.ceil(
            data.length / pageSize
          )}`}</span>
          <button
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md border border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md border border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>
        </div>
        <select
          className="border rounded-md outline-none focus:border-blue-500"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {pageSizeOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
    );
    };
    
    export default Table;