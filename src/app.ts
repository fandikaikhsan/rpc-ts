import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { appRouter } from "./servers"

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
