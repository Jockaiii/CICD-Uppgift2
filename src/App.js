import './shared/global/style/Global.css'
import { Routing } from './routes/Routing'
import { PokemonProvider } from './shared/provider/PokemonProvider'
import { ScoreProvider } from './shared/provider/ScoreProvider'
import { ThemeProvider } from './shared/provider/ThemeProvider'
import ContentContainer from './components/themeSwitch/ContentContainer'
import TopBar from './components/themeSwitch/TopBar'
import MultiTheme from './components/themeSwitch/MultiTheme'
import { MultiThemeProvider } from './shared/provider/MultiThemeProvider'

function App() {
  return (
    <div className='app-container'>
      <ScoreProvider>
        <PokemonProvider>
          <MultiThemeProvider>
            <MultiTheme>
          <ThemeProvider>
            <TopBar />
            <ContentContainer>
              <Routing>
              </Routing>
            </ContentContainer>
          </ThemeProvider>
          </MultiTheme>
          </MultiThemeProvider>
        </PokemonProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
