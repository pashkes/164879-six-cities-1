import {getRelatedRating} from "../../utils";

export const toModelOffer = (data) => {
  return data.map((offer) => ({
    id: offer.id,
    city: {
      name: offer.city.name,
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      }
    },
    price: offer.price,
    rating: getRelatedRating(offer.rating),
    title: offer.title,
    type: offer.type,
    description: offer.description,
    goods: offer.goods,
    bedrooms: offer.bedrooms,
    isFavorite: offer[`is_favorite`],
    isPremium: offer[`is_premium`],
    previewPhoto: offer[`preview_image`],
    maxAdults: offer[`max_adults`],
    images: offer.images,
    host: {
      avatarURL: offer.host[`avatar_url`],
      id: offer.host.id,
      isPro: offer.host[`is_pro`],
      name: offer.host.name,
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
  }));
};

const toFormatMachineDate = (date) => {
  const toDate = new Date(date);
  const getYear = toDate.getFullYear().toString();
  const getDay = (toDate.getDay()).toString().padStart(2, `0`);
  const getMonth = (toDate.getMonth() + 1).toString().padStart(2, `0`);
  return `${getYear}-${getMonth}-${getDay}`;
};

const toFormatPostDate = (date) => new Intl.DateTimeFormat(`en-US`, {
  year: `numeric`,
  month: `long`
}).format(new Date(date));

export const toModelReview = (reviews) => ({
  [reviews.id]: reviews.data.map((item) => {
    return {
      id: item.id,
      comment: item.comment,
      date: toFormatPostDate(item.date),
      machineDate: toFormatMachineDate(item.date),
      rating: item.rating,
      name: item.user.name,
      avatar: item.user[`avatar_url`],
      isPro: item.user[`is_pro`],
    };
  })
});
