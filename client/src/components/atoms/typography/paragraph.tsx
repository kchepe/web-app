import clsx from 'clsx';
import { TextProps, Text } from './text';

type ParagraphProps = TextProps;

const Paragraph = ({ className, children }: ParagraphProps) => {
  return <Text className={clsx('leading-7', className)}>{children}</Text>;
};

export default Paragraph;
