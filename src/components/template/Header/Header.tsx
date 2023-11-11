import { Container } from '@/components/atoms/Container/Container';
import { Logo } from '@/components/atoms/Logo/Logo';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { NavList } from '@/components/atoms/NavList/NavList';
import { NavItemProps } from '@/components/atoms/NavItem/NavItem';

import styles from './style.module.scss';

const items: NavItemProps[] = [
	{ href: '#about', label: 'О Нас' },
	{ href: '#works', label: 'Работы' },
	{ href: '#contacts', label: 'Контакты' },
	{ href: '#price', label: 'Цены' },
]

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<Logo classNames={styles.header__title} />
				<Navigation classNames={styles.header__nav} navItems={items} />
			</Container>
		</header>
	)
}
