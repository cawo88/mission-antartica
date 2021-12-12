import { httpClient } from "../http-client";
import { PostData } from "src/types/index";

class PostService {
  public getAll(): Promise<PostData> {
    return httpClient.get("/photos");
  }
}

export default new PostService();
