export interface Post {
    id: number;
    title: string;
    thumbnailUr: string;
  }
  
export interface PostData {
  data: { posts: Post[] };
}
  