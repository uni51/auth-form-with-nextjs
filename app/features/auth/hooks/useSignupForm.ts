import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupFromSchema } from "../lib/signupFormSchema";
import { z } from "zod";

export const useSingupForm = () => {
  const form = useForm<z.infer<typeof signupFromSchema>>({
    resolver: zodResolver(signupFromSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signupFromSchema>> = (data) => {
    const { username, email, password } = data;
    console.log(username, email, password);
  };

  return { form, onSubmit };
};
