import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].isAuthRequire;

export const getUserData = (state) => state[NAME_SPACE].userData;
