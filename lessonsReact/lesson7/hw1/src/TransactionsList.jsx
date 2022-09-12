import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(transaction => (
        <li key={transaction.id} className="transaction">
          <Transaction {...transaction} />
        </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
