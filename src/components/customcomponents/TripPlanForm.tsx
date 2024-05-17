"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { addDays } from "date-fns";
import { PlacesInputField } from "@/app/new-trip/components/PlacesInputField";
import { SelectDatesComponent } from "@/app/new-trip/components/SelectDatesComponent";
import { UserTypeRadioGroup } from "@/app/new-trip/components/UserTypeRadioGroup";
import { BudgetComponent } from "@/app/new-trip/components/BudgetComponent";
import { usePathname, useRouter } from "next/navigation";
import { useValuesStore } from "@/store/valuesStore";

export const formSchema = z.object({
  destination: z.string().min(2, {
    message: "destination must be at least 2 characters.",
  }),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) =>
        data.from > addDays(new Date(), -1) &&
        data.to <= addDays(data.from, 10),
      "Start date must be in the future"
    ),
  usertype: z.enum(["solo", "couple", "friends", "family"], {
    required_error: "You need to select the type of traveller you are",
  }),
  budget: z.enum(["<500", "500-1000", "1000-2000", "2000-5000", "5000-10000", ">10000"], {
    required_error: "You need to select the type of traveller you are",
  }),
});



export const TripPlanForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      usertype: "solo"
    },
  });

  const route = useRouter();
  // const { setValues } = useValuesStore();
  function onSubmit(values: z.infer<typeof formSchema>) {
    // setValues(values);
    const serializedObject = encodeURIComponent(JSON.stringify(values));
    route.push(`/itinerary?value=${serializedObject}`);
  }

  function onError(a: any) {
    console.log(a);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="flex flex-col w-full sm:container space-y-4 z-40 items-center"
      >
        <h3 className="self-start text-xl lg:px-72">
          Where do you plan to go?
        </h3>
        <div className="flex justify-center w-full lg:px-64 flex-col sm:flex-row">
          <PlacesInputField form={form} />
          <SelectDatesComponent form={form} />
        </div>
        <h3 className="self-start text-xl lg:px-72 pt-10">
          Is it going to be a?
        </h3>
        <UserTypeRadioGroup
          form={form}
          className="flex justify-stretch px-0 lg:px-64"
        />
        <h3 className="self-start text-xl lg:px-72 pt-10">
          How much do you plan to spend on this trip?{" "}
          <span className="text-slate-500"> (Optional) </span>
        </h3>
        <BudgetComponent
          form={form}
          className="flex justify-stretch px-0 lg:px-64 pb-10"
        />
        <div className="pb-2 w-full grid justify-stretch items-stretch lg:px-72">
          <Button className="z-10 w-full lg:w-full mb-10" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
