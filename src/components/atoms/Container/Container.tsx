import styles from './style.module.scss';

interface ContainerProps {
	classNames?: string;
	children?: React.ReactNode;
}

export const Container = ({
	classNames = '',
	children = <div></div>,
}: ContainerProps): JSX.Element => {
	return <div className={`${classNames} ${styles.container}`}>{children}</div>;
};
