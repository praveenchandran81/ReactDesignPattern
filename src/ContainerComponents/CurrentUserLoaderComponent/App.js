import { DataSource } from "../GenericComponent/DataSource";
import { ResourceLoader } from "../GenericComponent/ResourceLoader";
import { PostInfo } from "./PostInfo";
import { Posts } from "./Posts";
import { UserContainerComponent } from "./UserContainerComponent";
import { UserInfo } from "./UserInfo";
import { Users } from "./Users";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => ()=> {
  return localStorage.getItem(key);
};

const TextFromLocalStorage = ({ message }) => {
  return <h1>{message}</h1>;
};

export const AppUserInfo = () => {
  console.log("appuserinfo");
  return (
    <>
      {/* <ResourceLoader
        resourceUrl="https://jsonplaceholder.typicode.com/posts"
        resourceName="posts"
      >
       <Posts/>
      </ResourceLoader>

      <ResourceLoader
        resourceUrl="https://jsonplaceholder.typicode.com/users"
        resourceName="users"
      >
        <Users />
      </ResourceLoader> */}

      <DataSource
        getDataSource={getServerData(
          "https://jsonplaceholder.typicode.com/users"
        )}
        resourceName="users"
      >
        <Users />
      </DataSource>

      <DataSource
        getDataSource={getDataFromLocalStorage("key1")}
        resourceName="message"
      >
        <TextFromLocalStorage />
      </DataSource>
    </>
  );
};
