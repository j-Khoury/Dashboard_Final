import { z } from 'zod'

export const signinSchema = z.object({
  email: z.string().email().min(8, 'This field is required.'),
  password: z.string().min(5, 'must be at least 8 characters.'),
})
