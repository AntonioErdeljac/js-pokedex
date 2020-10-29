import PropTypes from 'prop-types';
import cn from 'classnames';
import React, { memo } from 'react';
import { useFavoriteButton } from './hooks';

import styles from './styles.scss';

const cx = cn.bind(styles);

const FavoriteButton = ({ id }) => {
  const { setFavorite, isFavorite } = useFavoriteButton({ id });

  return (
    <button
      type="button"
      onClick={setFavorite}
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

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default memo(FavoriteButton);
