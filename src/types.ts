export interface Offer {
  id: number,
  previewPhoto: string,
  images: string[],
  isPremium: boolean,
  title: string,
  isFavorite: boolean,
  rating: number,
  goods: string[],
  price: number,
  city: {
    name: string,
    latitude: number,
    longitude: number,
  },
  host: {
    avatarURL: string,
    name: string,
    isPro: boolean,
  },
  description: string,
  maxAdults: number,
  bedrooms: number,
  type: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
}


export interface Comment {
  id: number,
  comment: string,
  date: string,
  machineDate: string,
  rating: number,
  avatar: string,
  isPro: boolean,
  name: string,
}
