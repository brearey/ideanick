import * as React from 'react'
import { queryClient, trpc, trpcClient } from './trpc.tsx'
import { QueryClientProvider } from '@tanstack/react-query'

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
