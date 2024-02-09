
import HttpService from "./http.service";

const basePath = "/phone";

export const PhoneService = {
    Save
};

async function Save(request: any): Promise<any> {
    return HttpService.post(`${basePath}/userPhones`, request);
  }

export default PhoneService;
