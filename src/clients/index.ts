import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "../servers"

const trpc = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:3000" })],
})

const main = async () => {
  const song = await trpc.songByTitle.query("Creep")
  console.log(song)
}

main().catch(console.error)
