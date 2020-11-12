import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';
import { Chip, Avatar } from '@material-ui/core';

const Stats = ({ stats }) => (
  <>
    <h3>Stats</h3>
    {_.map(
      stat => (
        <Chip key={stat.stat.name} label={stat.stat.name} avatar={<Avatar>{stat.baseStat}</Avatar>} />
      ),
      stats,
    )}
  </>
);

Stats.propTypes = { stats: PropTypes.arrayOf(PropTypes.shape()).isRequired };

export default Stats;
