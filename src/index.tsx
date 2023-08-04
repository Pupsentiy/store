import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
