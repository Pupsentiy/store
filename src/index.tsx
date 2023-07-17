import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProviders'
import 'shared/config/i18n/i18n'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)
