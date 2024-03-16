'use client'

import { useGlobalContext } from '@/app/context/globalContext'
import * as React from 'react'
import Map from 'react-map-gl'
import { Skeleton } from '@/components/ui/skeleton'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

function MapSection() {
	const { fiveDayForecast } = useGlobalContext()
	if (!fiveDayForecast || !fiveDayForecast.city) {
		return <Skeleton className='h-[25rem]' />
	}

	const { city } = fiveDayForecast

	const lat = city.coord.lat
	const lon = city.coord.lon

	return (
		<div className=' col-span-2 h-[25rem] overflow-hidden overscroll-contain  p-0 md:p-0 xl:col-span-3'>
			<Map
				mapboxAccessToken={MAPBOX_TOKEN}
				initialViewState={{
					longitude: lon,
					latitude: lat,
					zoom: 10,
				}}
				style={{
					flex: '1',
					position: 'relative',
					width: '100%',
					height: '100%',
					top: '0',
					left: '0',
					zIndex: 0,
				}}
				mapStyle='mapbox://styles/mapbox/streets-v11'
			/>
		</div>
	)
}

export default MapSection
