interface PostProps {
  children?: string;
}

const usePostProps = (props: PostProps) => {
  return {
    ...props,
  };
};

export { usePostProps };
