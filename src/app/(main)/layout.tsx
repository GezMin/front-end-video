import { FC, PropsWithChildren } from 'react'

import MainLayout from '@/components/main-layout/MainLayout'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<MainLayout>
			<div>Layout</div>
			{children}
		</MainLayout>
	)
}

export default Layout
