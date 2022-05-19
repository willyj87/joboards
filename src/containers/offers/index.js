import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MwmAccordion from '../../components/accordion';
import ALL_TEAMS from '../../redux/slices/offers/constants';
import { selectOffersByTeam } from '../../redux/slices/offers/offers.selectors';
import { getOffers, setTeam } from '../../redux/slices/offers/offers.slice';

const Offers = () => {
  const dispatch = useDispatch();
  const offersByTeam = useSelector(selectOffersByTeam);
  useEffect(() => {
    dispatch(getOffers());
    setTeam(ALL_TEAMS);
  }, [dispatch]);
  return (
    <Container>
      {offersByTeam && <MwmAccordion items={offersByTeam} />}
    </Container>
  );
};

export default Offers;
