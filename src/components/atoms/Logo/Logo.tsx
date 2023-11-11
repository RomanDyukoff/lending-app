import Link from 'next/link';
import { Title } from '../Title/Title';

interface LogoProps {
	classNames?: string;
}

export const Logo = ({ classNames }: LogoProps) => {
	return (
		<Title classNames={classNames}>
			<Link href='/'>Название фирмы</Link>
		</Title>
	)
}
