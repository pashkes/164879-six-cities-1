import Constants from "./constants";

export const toPercentRating = (rating) => (rating / 100 * Constants.MAX_RATING).toFixed(1);
export const toRelatedRating = (rating) => Math.floor(rating * 100 / Constants.MAX_RATING);
