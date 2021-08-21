import React, { useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const CityDetailsTable = ({ detailsList }) => {
  const dataAsString = JSON.stringify(detailsList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => detailsList, [dataAsString]);

  const columns = useMemo(
    () => [
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Temperature",
        accessor: "temp",
        isNumeric: true,
      },
      {
        Header: "Sunrise",
        accessor: "sunrise",
        isNumeric: true,
      },
      {
        Header: "Sunset",
        accessor: "sunset",
        isNumeric: true,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
                key={index}
              >
                <Flex userSelect="none">
                  {column.render("Header")}
                  <chakra.span pl="2">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BiDownArrow aria-label="sorted descending" />
                      ) : (
                        <BiUpArrow aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Flex>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => (
                <Td
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                  key={index}
                >
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default CityDetailsTable;
