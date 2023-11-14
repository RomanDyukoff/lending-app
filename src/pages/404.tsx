import { PageLayout } from '@/layout/layout';

export default function NotFoundPage(): JSX.Element {
	return (
		<PageLayout title="Ошибка | Такой страницы не существует">
			<div>Упс...</div>
		</PageLayout>
	);
}
