import './ThemeSwitch.css'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../shared/provider/ThemeProvider'
import themeEnum from '../../shared/resources/ThemeEnum'

export const ThemeSwitch = () => {
	const { theme: [theme, setTheme] } = useContext(ThemeContext)
	const [buttonText, setButtonText] = useState(theme)

	const switchTheme = () => {
		var element = document.body;
		element.classList.toggle("dark-mode")
		if(theme === themeEnum.LIGHT || theme === themeEnum.MIDNIGHT){
			setTheme(themeEnum.DARK)
			setButtonText(themeEnum.DARK)
		}
		else {
			setTheme(themeEnum.LIGHT)
			setButtonText(themeEnum.LIGHT)
		}
	}

	/*const switchThemeTwo = () => {
		var element = document.body;
		element.classList.toggle("midnight-mode")
		if(theme == themeEnum.LIGHT || theme == themeEnum.DARK){
			setTheme(themeEnum.MIDNIGHT)
		}
		else {
			setTheme(themeEnum.LIGHT)
		}

	}*/

	return (
		<div>
		<button className= "theme-button input" onClick={() => switchTheme()}>{buttonText} Theme</button>
		</div>
	)
}