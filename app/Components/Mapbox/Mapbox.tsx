'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { Map } from 'react-map-gl'
import { Skeleton } from '@/components/ui/skeleton'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

function MapSection() {
	const { fiveDayForecast } = useGlobalContext()
	const { forecast } = useGlobalContext()
	const activeCityCords = forecast?.coord
	const { city } = fiveDayForecast

	if (!fiveDayForecast || !fiveDayForecast.city || !activeCityCords) {
		return <Skeleton className='h-[25rem]' />
	}

	const [viewport, setViewport] = useState({
		latitude: activeCityCords.lat,
		longitude: activeCityCords.lon,
		zoom: 9,
	})
	useEffect(() => {
		setViewport(prevViewport => ({
			...prevViewport,
			latitude: activeCityCords.lat,
			longitude: activeCityCords.lon,
		}))
	}, [activeCityCords])
	return (
		<Map
			mapboxAccessToken={MAPBOX_TOKEN}
			attributionControl={false}
			{...viewport}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				flex: '1',
				top: '0',
				left: '0',
				zIndex: 0,
			}}
			mapStyle='mapbox://styles/mapbox/streets-v11'
			dragPan={false}
			scrollZoom={false}
		/>
	)
}

export default MapSection
