import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createRouter({ routeTree })
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            experimental_prefetchInRender: true,
        }
    }
})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<StrictMode> <App /> </StrictMode>)