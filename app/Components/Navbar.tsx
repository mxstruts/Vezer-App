'use client'
import { Button } from '@/components/ui/button'
import {
	useGlobalContext,
	useGlobalContextUpdate,
} from '../context/globalContext'
import { github } from '../utils/Icons'
import SearchDialog from './SearchDialog/SearchDialog'
import ThemeDropdown from './ThemeDropdown/ThemeDropdown'

function Navbar() {
	const { setActiveCityCoords } = useGlobalContextUpdate()
	function getLocation() {
		return new Promise((resolve, reject) => {
			if (!navigator.geolocation) {
				reject(new Error('Geolocation is not supported by this browser.'))
			} else {
				navigator.geolocation.getCurrentPosition(
					position => {
						const { latitude, longitude } = position.coords
						setActiveCityCoords([latitude, longitude])
						resolve({ latitude, longitude })
					},
					error => {
						reject(error)
					}
				)
			}
		})
	}
	return (
		<div className='w-full py-4 flex items-center justify-between'>
			<div className='left'></div>
			<div className='search-container flex shrink-0 w-full gap-2 sm:w-fit'>
				<SearchDialog />

				<div className='btn-group flex items-center gap-2'>
					<ThemeDropdown />
					<Button onClick={() => getLocation()}>Get Location</Button>

					<Button
						className='source-code-btn flex items-center gap-2'
						onClick={() => {
							window.open('https://github.com/mxstruts/', '_blank')
						}}
					>
						{github} <p className='hidden md:block'>mxstruts</p>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
