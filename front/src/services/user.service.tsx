
import HttpService from "./http.service";

const basePath = "/user";

export const UserService = {
  Save,
  Get,
  GetAll
};

async function Save(request: any): Promise<any> {
    return HttpService.post(`${basePath}/saveUser`, request);
  }

  async function Get(id: any): Promise<any> {
    return HttpService.get(`${basePath}/${id}`);
  }

  async function GetAll(): Promise<any> {
    return HttpService.get(`${basePath}`);
  }
export default UserService;
