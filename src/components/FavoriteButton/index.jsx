import PropTypes from 'prop-types';
import cn from 'classnames';
import React, { memo } from 'react';
import { useFavoriteButton } from './hooks';

import styles from './styles.scss';

const cx = cn.bind(styles);

const FavoriteButton = ({ src, name, index }) => {
  const { toggleFavorite, isFavorite } = useFavoriteButton({ name, index, src });

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      className={cx('pd-favorite shadow')}
      variant="primary"
    >
      <span
        className={cn('material-icons', { 'text-muted': !isFavorite, 'text-danger': isFavorite })}
      >
        {isFavorite ? 'favorite' : 'favorite_border'}
      </span>
    </button>
  );
};

FavoriteButton.defaultProps = {
  src: null,
};

FavoriteButton.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(FavoriteButton);
