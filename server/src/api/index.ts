import {loginUser, signUpUser} from "./users";
import {addDevice, getDevice} from "./device";
import {sos} from "./sos";
import {addMock} from "./mock";

const api = {
    loginUser,
    signUpUser,
    addMock,
    addDevice,
    getDevice,
    sos,
};

export default api;
