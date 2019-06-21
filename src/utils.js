import Constants from "./constants";

export const convertRating = (rating) => (rating / 100 * Constants.MAX_RATING).toFixed(1);
export const getRelatedRating = (rating) => rating * 100 / Constants.MAX_RATING;
