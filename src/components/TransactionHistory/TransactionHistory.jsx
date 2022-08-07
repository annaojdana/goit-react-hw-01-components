import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const { transactions, table, table__header, table__heading, table__body, table__cell, table__row } =
    styles;
  return (
    <section className={transactions}>
      {items.length > 0 && (
        <table className={table}>
          <thead className={table__header}>
            <tr>
              <th className={table__heading}>Type</th>
              <th className={table__heading}>Amount</th>
              <th className={table__heading}>Currency</th>
            </tr>
          </thead>
          <tbody className={table__body}>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <tr key={id} className={table__row}>
                  <td className={table__cell}>{type}</td>
                  <td className={table__cell}>{amount}</td>
                  <td className={table__cell}>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
