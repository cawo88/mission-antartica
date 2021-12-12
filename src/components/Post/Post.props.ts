import { useEffect, useState, useRef } from "react";
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
  const loadMoreElementRef = useRef<HTMLHeadingElement | null>();

  const fetchPosts = async () => {
    const response = await PostService.getAll(pageNumber);
    const { data } = response;
    return data;
  };

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setIsLoading(true);
        setPosts((post) => [...post, ...data]);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    setPageNumber(pageNumber);
  }, []);

  const onLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  let pagination = 1;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    if (isLoading) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          pagination++;
          console.log("i intersecting");
          onLoadMore();
          if (pagination >= 100) {
            if (loadMoreElementRef.current) {
              observer.unobserve(loadMoreElementRef.current);
            }
          }
        }
      }, observerOptions);
      if (loadMoreElementRef.current) {
        observer.observe(loadMoreElementRef.current);
      }
    }
  }, [isLoading, pagination]);

  console.log("posts", posts);

  return {
    ...props,
    posts,
    errorMessage,
    isLoading,
    loadMoreElementRef,
  };
};

export { usePostProps };
