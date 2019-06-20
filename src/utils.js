import Constants from "./constants";

export const convertRating = (value, maxRating) => (value / 100 * maxRating).toFixed(1);
export const getRelatedRating = (rating) => rating * 100 / Constants.MAX_RATING;
