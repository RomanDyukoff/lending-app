import './style.scss';

interface NavItemProps {
	href: string;
	label: string;
}

const items: NavItemProps[] = [
	{ href: '#about', label: 'О Нас' },
	{ href: '#works', label: 'Работы' },
	{ href: '#contacrs', label: 'Контакты' },
	{ href: '#price', label: 'Цены' },
]

const NavItem = ({ href, label }: NavItemProps) => {
	return (
		<li className='navigation__item'>
			<a className="navigation__link" href={href}>{label}</a>
		</li>
	)
}

export const HeaderNav = () => {
	return (
		<nav className='navigation'>
			<ul className='navigation__list'>
				{
					items.map((item, i) => (
						<NavItem key={i} label={item.label} href={item.href} />
					))
				}
			</ul>
		</nav>
	)
}
