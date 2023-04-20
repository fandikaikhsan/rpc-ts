import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { appRouter } from "."

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
