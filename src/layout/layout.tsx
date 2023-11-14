import type { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from '@/components/template/Header/Header';

interface PageLayoutProps {
	title?: string;
	children: ReactNode;
}

export const PageLayout = ({ children, title }: PageLayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};
