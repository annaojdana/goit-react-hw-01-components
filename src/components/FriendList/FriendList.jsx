import PropTypes from 'prop-types';
// import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.length > 0 && (friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className="item">
            <span className="status"></span>
            <img src={avatar} alt="user avatar" className="avatar" />
            <p className="name">{name}</p>
          </li>
        )))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
