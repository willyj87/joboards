import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MwmListGroups from '../../components/listGroups';
import ALL_TEAMS from '../../redux/slices/offers/constants';
import { selectTotalOffers, selectTotalOffersByTeam } from '../../redux/slices/offers/offers.selectors';
import { getOffers, setTeam } from '../../redux/slices/offers/offers.slice';

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector(selectTotalOffersByTeam);
  const totalOffers = useSelector(selectTotalOffers);
  useEffect(() => {
    dispatch(getOffers());
    dispatch(setTeam(ALL_TEAMS));
  }, [dispatch]);
  const handleClick = (team) => {
    dispatch(setTeam(team));
  };
  return (
    <div>
      {teams && totalOffers
      && <MwmListGroups items={teams} handleClick={handleClick} totalOffers={totalOffers} />}
    </div>
  );
};

export default Teams;
