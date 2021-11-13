import { useState, createContext } from 'react'
import themeEnum from '../resources/ThemeEnum'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState(themeEnum.DARK)

	return (
		<ThemeContext.Provider value={{
			theme: [theme, setTheme],
		}}>
			{props.children}
		</ThemeContext.Provider>
	)
}