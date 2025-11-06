import { ThemedView } from './themed-view';

interface ICardContainerProps extends Required<React.PropsWithChildren> {
  className?: string;
}

export const CardContainer = ({ children, className }: ICardContainerProps) => {
  return (
    <ThemedView className={`overflow-hidden rounded-2xl bg-background-secondary p-4 ${className}`}>
      {children}
    </ThemedView>
  );
};
