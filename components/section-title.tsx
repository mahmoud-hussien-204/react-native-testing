import { ThemedText } from './themed-text';

interface IProps {
  title: string;
}

const SectionTitle = ({ title }: IProps) => {
  return <ThemedText className='mb-4 text-gray-300'>{title}</ThemedText>;
};

export default SectionTitle;
