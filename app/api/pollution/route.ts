import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const apiKey = process.env.OPENWEATHERMAP_API_KEY

		const lat = 40.4167754
		const lon = -3.7037902

		const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`

		const res = await axios.get(url)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log('Error fetching forecast')
		return new Response('Error fetching forecast data', { status: 500 })
	}
}
