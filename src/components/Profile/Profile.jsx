import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const {
    card,
    description,
    avatarImg,
    name,
    usertag,
    userlocation,
    userstats,
  } = styles;
  return (
    <section className="profile">
      <div className={card}>
        <div className={description}>
          <img src={avatar} alt="User avatar" className={avatarImg} />
          <p className={name}>{username}</p>
          <p className={usertag}>@{tag}</p>
          <p className={userlocation}>{location}</p>
        </div>

        <ul className={userstats}>
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
