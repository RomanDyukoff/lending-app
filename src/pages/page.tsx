import { WelcomeSection } from '@/components/organisms/WelcomeSection/WelcomeSection';
import { PageLayout } from '@/layout/layout';

export default function Home(): JSX.Element {
	return (
		<PageLayout>
			<WelcomeSection />
		</PageLayout>
	);
}
