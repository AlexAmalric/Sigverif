// components/ui/table.tsx
import React from 'react';

export const Table = ({ children, className }) => <table className={`min-w-full divide-y divide-gray-200 ${className}`}>{children}</table>;

export const TableHeader = ({ children }) => <thead className="bg-gray-50">{children}</thead>;

export const TableRow = ({ children }) => <tr>{children}</tr>;

export const TableHead = ({ children, className }) => (
  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

export const TableBody = ({ children }) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;

export const TableCell = ({ children, className }) => (
  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${className}`}>{children}</td>
);
