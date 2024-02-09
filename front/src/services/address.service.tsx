
import HttpService from "./http.service";

const basePath = "/address";

export const AddressService = {
    Save
};

async function Save(request: any): Promise<any> {
    return HttpService.post(`${basePath}/userAddress`, request);
  }

export default AddressService;
