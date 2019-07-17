import Constants from "./constants";

export const toPercentRating = (rating:number):string => (rating / 100 * Constants.MAX_RATING).toFixed(1);
export const toRelatedRating = (rating:number):number => Number((rating * 100 / Constants.MAX_RATING).toFixed(0));
