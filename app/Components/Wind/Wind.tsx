'use client'
import { useGlobalContext } from '@/app/context/globalContext'
import { wind } from '@/app/utils/Icons'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Compass from './Compass'

function Wind() {
	const { forecast } = useGlobalContext()

	const windSpeed = forecast?.wind?.speed
	const windDir = forecast?.wind?.deg

	if (!windSpeed || !windDir) {
		return <Skeleton className='h-[12rem] w-full' />
	}

	return (
		<div
			className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex 
    flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none'
		>
			<h2 className='flex items-center gap-2 font-medium'>{wind} Wind</h2>

			<div className='compass relative flex items-center justify-center'>
				<div className='image relative'>
					<Compass speed={windSpeed} deg={windDir} />
				</div>
				<p
					className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium'
				></p>
			</div>
		</div>
	)
}

export default Wind
