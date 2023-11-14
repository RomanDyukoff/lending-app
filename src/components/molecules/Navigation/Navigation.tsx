'use client';
import { useState, useCallback, useEffect } from 'react';
import styles from './style.module.scss';
import { NavList } from '../../atoms/NavList/NavList';
import { NavItemProps } from '../../atoms/NavItem/NavItem';

interface NavigationProps {
	classNames?: string;
	children?: React.ReactNode;
	navItems: NavItemProps[];
}

export const Navigation = ({
	classNames = '',
	navItems,
	children = null,
}: NavigationProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleButton = useCallback(() => {
		setIsOpen((prevState) => !prevState);
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<nav className={`${classNames} ${styles.navigation}`}>
			<button
				onClick={toggleButton}
				className={`${styles.navigation__burger} ${isOpen ? `${styles.open}` : ''}`}
				aria-expanded={isOpen}
			>
				<div />
				<div />
				<div />
			</button>
			<div
				className={`${styles.navigation__menu} ${isOpen ? `${styles.open}` : ''}`}
				aria-hidden={!isOpen}
			>
				{children}
				<NavList classNames={styles.navigation__list} navItems={navItems} />
			</div>
		</nav>
	);
};
