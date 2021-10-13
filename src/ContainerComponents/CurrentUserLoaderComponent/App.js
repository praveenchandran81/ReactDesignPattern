import { ResourceLoader } from "../GenericComponent/ResourceLoader";
import { PostInfo } from "./PostInfo";
import { Posts } from "./Posts";
import { UserContainerComponent } from "./UserContainerComponent";
import { UserInfo } from "./UserInfo";
import { Users } from "./Users";

export const AppUserInfo = () => {
  console.log("appuserinfo");
  return (
    // <UserContainerComponent>
    //     <UserInfo/>
    // </UserContainerComponent>
    <>
      <ResourceLoader
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
      </ResourceLoader>
    </>
  );
};
