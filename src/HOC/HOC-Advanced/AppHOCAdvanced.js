
import {Users} from './Users';
import {Posts} from './Posts';
import { withResources } from './withResources';

const usersUrl='https://jsonplaceholder.typicode.com/users';
const postsUrl='https://jsonplaceholder.typicode.com/posts';

const UsersWrapped=withResources(Users,usersUrl,"users");
const PostsWrapped=withResources(Posts,postsUrl,"posts");
export const AppHOCAdvanced =()=>{

    return(
        <>
        {/* <Users></Users>
        <Posts></Posts> */}
 
        <UsersWrapped/>
        <PostsWrapped/>
        </>
    )
}