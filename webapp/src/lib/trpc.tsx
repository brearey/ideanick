import type { TrpcRouter } from '@ideanick/backend/src/trpc.ts'
import { createTRPCReact } from '@trpc/react-query'

const trpc = createTRPCReact<TrpcRouter>()
