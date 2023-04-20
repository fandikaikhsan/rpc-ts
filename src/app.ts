import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { appRouter } from "./servers"

const server = createHTTPServer({
  router: appRouter,
})

console.log("Listening on http://localhost:3000")

server.listen(3000)
