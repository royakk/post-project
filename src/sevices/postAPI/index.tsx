import axios from "axios";
import { PostType } from "../../types";

const httpRequest = axios.create({
    baseURL:  "https://jsonplaceholder.typicode.com/",

})
 
const allPosts = async()=>{
    const {status,data}= await httpRequest.get("/posts")
    if (status !==200) throw new Error("fetching posts failed")
    return data
}
const createPost = async (post: PostType): Promise<any> => {
    try {
      const { status, data } = await httpRequest.post("/posts", post);
      if (status !== 201) throw new Error("Create post failed");
      return data; 
    } catch (error) {
      throw new Error("Create post failed");
    }
  };
const api= {
    allPosts,
    createPost
  };
  export default api