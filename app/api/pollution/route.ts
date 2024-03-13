import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const apiKey = process.env.OPENWEATHERMAP_API_KEY

		const lat = 41.3828939
		const lon = 2.1774322

		const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`

		const res = await axios.get(url)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log('Error fetching forecast')
		return new Response('Error fetching forecast data', { status: 500 })
	}
}
