import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeIn = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(FadeIn);
