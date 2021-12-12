import { httpClient } from "../http-client";
import { PostData } from "src/types/index";

class PostService {
  public getAll(pageNumber: number): Promise<PostData> {
    return httpClient.get(`/photos?_page=${pageNumber}&_limit=10`);
  }
}

export default new PostService();
