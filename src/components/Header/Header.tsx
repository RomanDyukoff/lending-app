import { HeaderNav } from '../HeaderNav/HeaderNav';

import './style.scss';

export const Header = () => {
	return (
		<header className='header'>
			<div className='container header__container'>
				<h1 className='header__title'>
					<a href="#">Название фирмы</a>
				</h1>
				<HeaderNav />
			</div>
		</header>
	)
}
