import { ThemedView } from './themed-view';

interface IProps extends Required<React.PropsWithChildren> {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <ThemedView className={`px-4 ${className}`}>{children}</ThemedView>;
};

export default Container;
