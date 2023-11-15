import type { NavItemProps } from '../NavItem/NavItem';
import { NavItem } from '../NavItem/NavItem';

interface NavListProps {
    classNames?: string;
    navItems: NavItemProps[];
}

export const NavList = ({ classNames = '', navItems }: NavListProps): JSX.Element => {
    return (
        <ul className={classNames}>
            {navItems.map((item, i) => (
                <NavItem key={i} label={item.label} href={item.href} />
            ))}
        </ul>
    );
};
