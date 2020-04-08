import React from 'react';
import PropTypes from 'prop-types';

import './GenereTag.scss';

const Tag = ({ text }) => (<div className="tag">{text}</div>);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tag;