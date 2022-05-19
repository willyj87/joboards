import { createSelector } from '@reduxjs/toolkit';
import ALL_TEAMS from './constants';

const selectOffers = (state) => state.offers.value;

export const selectTotalOffers = ({ offers: { value } }) => {
  let total = 0;
  value.forEach(({ postings }) => {
    total += postings.length;
  });
  return total;
};

export const selectTeam = (state) => state.offers.team;

export const selectAvailableTeams = (state) => state.offers.availableTeams;

export const selectOffersByTeam = createSelector(
  [selectOffers, selectTeam],
  (offers, team) => (team === ALL_TEAMS
    ? offers : offers.filter((offer) => offer.title === team)),
);

export const selectTotalOffersByTeam = ({ offers: { value } }) => (
  value.map(
    ({ title, postings }) => ({ team: title, count: postings.length }),
  ));

export default selectOffers;
