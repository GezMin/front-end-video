import type { Metadata } from 'next'

import MainStatistics from '@/components/ui/admin/admin-statistics/main-statistics/MainStatistics'
import MiddleStatistics from '@/components/ui/admin/admin-statistics/middle-statistics/MiddleStatistics'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return (
		<div className='px-6'>
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}
