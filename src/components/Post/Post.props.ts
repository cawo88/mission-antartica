import { useEffect, useState } from "react";
import PostService from "@/services/posts.service";
import { PostData } from "@/types/";

interface PostProps {
  children?: React.ReactNode;
}

const usePostProps = (props: PostProps) => {
  const [posts, setPosts] = useState<PostData>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const fetchPosts = async () => {
    const response = await PostService.getAll(pageNumber);
    const { data } = response;
    return data;
  };

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setIsLoading(true);
        setPosts(data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    setPageNumber(pageNumber);
  }, []);

  return {
    ...props,
    posts,
    errorMessage,
    isLoading,
  };
};

export { usePostProps };
