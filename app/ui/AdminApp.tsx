"use client";
  
import { Admin, Resource, fetchUtils, radiantDarkTheme } from "react-admin";
import CarsList from "./cars/CarsList";
import CreateCars from "./cars/CreateCars";
import { IconCar, IconMenu, IconUsersGroup } from "@tabler/icons-react";
import CarEdit from "./cars/EditCar";
import ShowCar from "./cars/ShowCar";
import orangeTheme from "../Helper/Theme";
import UserList from "./user/UserList";
import PostUser from "./user/PostUser";
import ShowUser from "./user/ShowUser";
import AppointList from "./appoint/AppointList";
import { UrlSite } from "../utils";
import authProvider from "../utils/authProvider";

const apiUrl=UrlSite();
const dataProvider: any = {
  ... authProvider,
  getList: async (resource: any, params: any) => {
    const { json, headers } = await fetchUtils.fetchJson(
      `${apiUrl}/${resource}?page=${params.pagination.page}&perPage=${params.pagination.perPage}`
    );

    console.log("Fetched data:", json);

    if (resource === "cars" ) {
      return {
        data: json.items,
        total: headers.get("X-Total-Count"),
      };
    } else {
      return {
        data: json,
        total: headers.get("X-Total-Count"),
      };
    }
  },
  getOne: async (resource: string, params: any) => {
    const { json } = await fetchUtils.fetchJson(
      `${apiUrl}/${resource}/${params.id}`
    );

    const singleResource = json;

    return {
      data: singleResource,
    };
  },
  create: async (resource: string, params: any) => {
    console.log("Data sent to API :", JSON.stringify(params.data));
    let requestBody;
    if (resource === "cars") {
      requestBody = JSON.stringify([params.data]);
    } else {
      requestBody = JSON.stringify(params.data);
    }

    const { json } = await fetchUtils.fetchJson(`${apiUrl}/${resource}`, {
      method: "POST",
      body: requestBody,
    });

    const createdResource = json;

    return {
      data: {
        ...createdResource,
        id: createdResource.id,
      },
    };
  },

  update: async (resource: string, params: any) => {
    const { json } = await fetchUtils.fetchJson(
      `${apiUrl}/${resource}/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify(params.data),
      }
    );

    const updatedResource = json;

    return {
      data: updatedResource,
    };
  },
  delete: async (resource: string, params: any) => {
    const { json } = await fetchUtils.fetchJson(
      `${apiUrl}/${resource}/${params.id}`,
      {
        method: "DELETE",
      }
    );

    const deletedResource = json;

    return {
      data: deletedResource,
    };
  },
  deleteMany: async (resource: string, params: any) => {
    const { ids } = params;

    const deletePromises = ids.map(async (id: any) => {
      const { json } = await fetchUtils.fetchJson(
        `${apiUrl}/${resource}/${id}`,
        {
          method: "DELETE",
        }
      );
      return json;
    });

    const deletedResources = await Promise.all(deletePromises);

    return {
      data: deletedResources,
    };
  },
};
// const CustomLayout = (props: LayoutProps) => (
//   <Layout {...props} menu={MenuLive} />
// );
export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={orangeTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="cars"
      list={CarsList}
      create={CreateCars}
      edit={CarEdit}
      show={ShowCar}
      icon={IconCar}
    />
    <Resource
      name="users"
      list={UserList}
      create={PostUser}
      show={ShowUser}
      icon={IconUsersGroup}
    />
    <Resource
      name="appointments"
      list={AppointList}
      icon={IconMenu}
    />
  </Admin>
);
