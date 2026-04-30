"use client";

import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background: var(--surface-container-lowest);
  border-radius: var(--radius-lg);
  margin: 4rem 0;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.thead`
  background: var(--surface-container-high);
  
  th {
    padding: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    color: var(--primary);
  }
`;

const TableRow = styled.tr`
  transition: background 0.2s ease;
  
  &:hover {
    background: var(--surface-container-low);
  }

  td {
    padding: 1.5rem;
    color: var(--on-surface-variant);
  }
`;

export default function DataTable({ data }) {
  if (!data || data.length === 0) return null;
  
  const headers = Object.keys(data[0]);

  return (
    <TableWrapper>
      <StyledTable>
        <TableHeader>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {headers.map(header => (
                <td key={header}>{row[header]}</td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}
