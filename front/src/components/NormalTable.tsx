import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

interface PaginatedTableProps {
  data: any[];
  columns: any[];
}

const NormalTable: React.FC<PaginatedTableProps> = ({ data, columns }) => {

  useEffect(() => {
  }, [data]);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.cell ? column.cell(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NormalTable;
