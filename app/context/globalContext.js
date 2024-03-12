'use Client'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({ children }) => {
	const [forecast, setForecast] = useState({})
	const [airQuality, setAirQuality] = useState({})

	const fetchForecast = async () => {
		try {
			const res = await axios.get('api/weather')
			console.log('RES: ', res.data)
			setForecast(res.data)
		} catch (error) {
			console.log('Error fetching forecast data: ', error.message)
		}
	}

	const fetchAirQuality = async (lat, lon) => {
		try {
			const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`)
			console.log(res.data)
			setAirQuality(res.data)
		} catch (error) {
			console.log('Error fetching air quality data: ', error.message)
		}
	}

	useEffect(() => {
		fetchForecast(), fetchAirQuality()
	}, [])

	return (
		<GlobalContext.Provider
			value={{
				forecast,
				airQuality,
			}}
		>
			<GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)
