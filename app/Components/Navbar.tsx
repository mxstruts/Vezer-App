'use client'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '../context/globalContext'
import { github } from '../utils/Icons'
import SearchDialog from './SearchDialog/SearchDialog'
import ThemeDropdown from './ThemeDropdown/ThemeDropdown'

function Navbar() {
	const { state } = useGlobalContext()

	return (
		<div className='w-full py-4 flex items-center justify-between'>
			<div className='left'></div>
			<div className='search-container flex shrink-0 w-full gap-2 sm:w-fit'>
				<SearchDialog />

				<div className='btn-group flex items-center gap-2'>
					<ThemeDropdown />

					<Button
						className='source-code-btn flex items-center gap-2'
						onClick={() => {
							window.open('https://github.com/mxstruts/Vezer-App', '_blank')
						}}
					>
						{github} Source Code
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
