import { QueryClient } from '@tanstack/react-query'
import type { TrpcRouter } from '@ideanick/backend/src/trpc.ts'
import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'

const trpc = createTRPCReact<TrpcRouter>()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

export { trpc, queryClient, trpcClient }
