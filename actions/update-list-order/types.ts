import { z } from "zod"
import { List } from '@prisma/client'

import { ActionState } from '@/lib/create-safe-action'
import { UpdatedListOrder } from './schema'

export type InputType = z.infer<typeof UpdatedListOrder>
export type ReturnType = ActionState<InputType, List[]>