const toModelUserDate = (userData) => ({
  id: userData.id,
  email: userData.email,
  name: userData.name,
  avatar: userData[`avatar_url`],
  isPro: userData[`is_pro`],
});

export default toModelUserDate;
