import { z } from "zod"
import { PrismaClient } from "@prisma/client"
import { publicProcedure, router } from "./trpc"

const prisma = new PrismaClient()

export const appRouter = router({
  songByTitle: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts
    const song = await prisma.songs.findFirst({
      where: {
        title: input,
      },
    })
    return song
  }),
})

export type AppRouter = typeof appRouter
