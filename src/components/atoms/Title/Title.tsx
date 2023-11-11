import styles from './style.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
	levet?: HeadingLevel;
	classNames?: string;
	children?: React.ReactNode;
}

export const Title = ({ levet, classNames, children }: TitleProps) => {
	const Tag = levet || 'h1';
	return (
		<Tag className={`${classNames} ${styles.title}`}>{children}</Tag>
	)
}
