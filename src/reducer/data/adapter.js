import Constants from "../../constants";

const toModelOffer = (data) => {
  return data.map((offer) => {
    return {
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
    };
  });
};
const getRelatedRating = (rating) => rating * 100 / Constants.MAX_RATING;

export default toModelOffer;
