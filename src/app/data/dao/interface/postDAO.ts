import { Post } from "src/app/model/Post";
import {CommonDAO} from "./commonDAO";

export interface PostDAO extends CommonDAO<Post>{
  // search()
}
