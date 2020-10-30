import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import Visibility from 'react-visibility-sensor';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import styles from './styles.scss';
import { Item, BottomPixel, Loader, Empty } from './components';

const cx = cn.bind(styles);

const List = ({ items, onScroll, isLoading, hasLoaded }) => {
  if (isLoading && isEmpty(items)) {
    return (
      <Container className={cx('pd-list')}>
        <Loader />
      </Container>
    );
  }

  if (hasLoaded && isEmpty(items)) {
    return (
      <Container className={cx('pd-list')}>
        <Empty />
      </Container>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Container className={cx('pd-list')}>
          <Row className="mt-3">
            {items.map((item, index) => (
              <Item src={item.src} key={item.name} name={item.name} index={index} />
            ))}
          </Row>
          {onScroll && (
            <Visibility onChange={onScroll}>
              <BottomPixel />
            </Visibility>
          )}
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

List.defaultProps = {
  onScroll: null,
  isLoading: false,
  hasLoaded: false,
};

List.propTypes = {
  isLoading: PropTypes.bool,
  hasLoaded: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    }),
  ).isRequired,
  onScroll: PropTypes.func,
};

export default List;
