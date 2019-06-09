import {combineReducers} from "redux";

import {reducer as data} from "./data/data";
import {reducer as checkAuthorization} from "./user/user";
import NameSpace from "./name-spaces";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: checkAuthorization,
});
