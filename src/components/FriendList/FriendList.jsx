import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const { list, online, offline, item, avatarImg, friendName } = styles;
  return (
    <section className="friends">
      <ul className={list}>
        {friends.length > 0 &&
          friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={item}>
              <span className={isOnline ? online : offline}></span>
              <img src={avatar} alt="user avatar" className={avatarImg} />
              <p className={friendName}>{name}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
