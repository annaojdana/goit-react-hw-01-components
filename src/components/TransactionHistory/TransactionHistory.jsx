import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <section className="transactions">
      {items.length > 0 && (
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
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
