import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor } from 'js/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  const {
    statistics,
    statsCard,
    statsTitle,
    list,
    item,
    statsLabel,
    statsPercentage,
  } = styles;
  let statsNum = stats.length;
  let itemWidth = (100 / statsNum).toString() + '%';
  console.log(itemWidth);
  return (
    <section className={statistics}>
      <div className={statsCard}>
        {title && <h2 className={statsTitle}>{title}</h2>}

        <ul className={list}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={item}
              style={{
                backgroundColor: getRandomHexColor(),
                width: itemWidth,
              }}
            >
              <span className={statsLabel}>{label}</span>
              <span className={statsPercentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
