import styles from './style.module.scss';

export interface NavItemProps {
	href: string;
	label: string;
}

export const NavItem = ({ href, label }: NavItemProps) => {
	return (
		<li className={styles.item}>
			<a className={styles.item__link} href={href}>{label}</a>
		</li>
	)
}