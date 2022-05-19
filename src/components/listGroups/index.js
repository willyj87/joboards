import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, ListGroup } from 'react-bootstrap';
import generateKey from '../../utils/keyGenerator';
import ALL_TEAMS from '../../redux/slices/offers/constants';

const MwmListGroup = ({ items, handleClick, totalOffers }) => {
  const [teamKey, setTeamKey] = useState(ALL_TEAMS);
  const handleOnClick = (team) => {
    handleClick(team);
    setTeamKey(team);
  };
  return (
    <ListGroup variant="flush" defaultActiveKey={0}>
      <ListGroup.Item className="d-flex justify-content-between align-items-start" action eventKey={0} onClick={() => handleOnClick(ALL_TEAMS)} active={ALL_TEAMS === teamKey}>
        <div className="me-auto" data-testid="all-test">
          {ALL_TEAMS}
        </div>
        <Badge variant="success" pill data-testid="all-test-badge">
          {totalOffers}
        </Badge>
      </ListGroup.Item>
      {items.map((item) => {
        const key = generateKey(item.team);
        return (
          <ListGroup.Item className="d-flex justify-content-between align-items-start" action key={key} eventKey={key} onClick={() => handleOnClick(item.team)} active={item.team === teamKey} data-testid={item.team}>
            <div className="me-auto">
              {item.team}
            </div>
            <Badge variant="success" pill data-testid={`${item.team}-badge`}>
              {item.count}
            </Badge>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

MwmListGroup.defaultProps = {
  handleClick: () => {},
};

MwmListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    team: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
  handleClick: PropTypes.func,
  totalOffers: PropTypes.number.isRequired,
};
export default MwmListGroup;
