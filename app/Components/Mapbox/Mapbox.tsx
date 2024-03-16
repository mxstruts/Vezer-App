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

	if (!fiveDayForecast || !fiveDayForecast.city || !activeCityCords) {
		return <Skeleton className='h-[25rem]' />
	}

	const { city } = fiveDayForecast

	return (
		<Map
			mapboxAccessToken={MAPBOX_TOKEN}
			initialViewState={{
				longitude: activeCityCords.lon,
				latitude: activeCityCords.lat,
				zoom: 10,
			}}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				borderRadius: '10px',
			}}
			mapStyle='mapbox://styles/mapbox/streets-v11'
		/>
	)
}

export default MapSection
