import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app/App'
import 'app/styles/index.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
