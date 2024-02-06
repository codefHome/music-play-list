import { z } from "zod";
export const CreateSongShema=z.object({
    title: z
    .string().refine((value) => value.trim().length > 0, {
        message: "Title is required",
      })
      .refine((value) => value.length >= 2, {
        message: "Please enter at least 2 characters.",
      }),
  
    artist:z.string().refine((value) => value.trim().length > 0, {
        message: "Artist is required",
      })
      .refine((value) => value.length >= 2, {
        message: "Please enter at least 2 characters.",
      }),
    album:z.string().refine((value) => value.trim().length > 0, {
        message: "Album is required",
      })
      .refine((value) => value.length >= 2, {
        message: "Please enter at least 2 characters.",
      }),
    genre:z.string().refine((value) => value.trim().length > 0, {
        message: "Genre is required",
      })
      .refine((value) => value.length >= 2, {
        message: "Please enter at least 2 characters.",
      }),
})

type CreateSongValidation=z.infer<typeof CreateSongShema>
export default CreateSongValidation