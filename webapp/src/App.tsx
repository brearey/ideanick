import { AllIdeasPage } from './pages/AllIdeasPage'
import { TrpcProvider } from './lib/TrpcProvider.tsx'

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}
