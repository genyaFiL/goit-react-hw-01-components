import PropTypes from 'prop-types';
import css from './FriendListStyles.module.css';
export const FriendList = ({ friends }) => {
  // const { avatar, name, isOnline, id } = friends;
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.node.isRequired,
    })
  ).isRequired,
};
