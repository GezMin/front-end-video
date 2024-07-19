import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div>Layout</div>
			{children}
		</div>
	)
}

export default Layout
