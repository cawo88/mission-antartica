export interface PostType {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export interface PostData {
  data: PostType[];
}
