"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { addDays } from "date-fns";
import { PlacesInputField } from "@/app/new-trip/components/PlacesInputField";
import { SelectDatesComponent } from "@/app/new-trip/components/SelectDatesComponent";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1) && data.to <= addDays(data.from,10),
      "Start date must be in the future"
    ),
});

export const TripPlanForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("values",values);
  }

  function onError(a: any) {
    console.log(a);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="flex flex-col container space-y-4 z-40 items-center"
      >
        <h3 className="self-start text-xl lg:px-72">
          Where do you plan to go?
        </h3>
        <div className="flex justify-center w-full lg:px-64">
          <PlacesInputField form={form} />
          <SelectDatesComponent form={form} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
