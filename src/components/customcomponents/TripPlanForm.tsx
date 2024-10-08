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
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { useValuesStore } from "@/store/valuesStore";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { createSupabaseClient } from "@/lib/supabase/browser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  budget: z.enum(
    ["<500", "500-1000", "1000-2000", "2000-5000", "5000-10000", ">10000"],
    {
      required_error: "You need to select the type of traveller you are",
    }
  ),
});

export const itineraryResponseSchema = z.object({
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
  budget: z.enum(
    ["<500", "500-1000", "1000-2000", "2000-5000", "5000-10000", ">10000"],
    {
      required_error: "You need to select the type of traveller you are",
    }
  ),
  trip_data: z.string(),
});

const supabase = createSupabaseClient();

export const TripPlanForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      usertype: "solo",
    },
  });

  const handleLoginWithOAuth = async () => {
    const supabase = createSupabaseClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const [session, setSession] = useState<Session | null>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then((userData) => {
      setSession(userData.data.session);
    });
  }, [setSession]);

  const route = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    if (!session?.user.user_metadata) {
      setOpenModal(true);
      return;
    } else {
      const trip_id = uuidv4();
      (async () => {
        await fetch(`${window.location.origin}/api/create-trip`, {
          method: "POST",
          body: JSON.stringify({
            destination: values.destination,
            budget: values.budget,
            start_date: values.date.from,
            end_date: values.date.to,
            user_type: values.usertype,
            trip_id: trip_id,
          }),
        });
        route.push(`/itinerary/${encodeURIComponent(trip_id)}`);
      })();
    }
  }

  function onError(a: any) {
  }
  const [loading, setLoading] = useState(false);
  return (
    <>
    {loading ? <div className="loader"></div> :
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="flex flex-col w-full sm:container space-y-4 z-40 items-center"
        >
          <h3 className="md:self-start self-center md:text-xl text-md lg:px-20 xl:px-64">
            Where do you plan to go?
          </h3>
          <div className="flex justify-center w-full lg:px-14 xl:px-52 flex-col md:flex-row gap-3 md:gap-6">
            <PlacesInputField form={form} />
            <SelectDatesComponent form={form} />
          </div>
          <h3 className="self-start lg:text-xl md:text-lg text-md lg:px-20 xl:px-64 lg:pt-10 md:pt-6 pt-2">
            Is it going to be a?
          </h3>
          <UserTypeRadioGroup
            form={form}
            className="flex justify-stretch px-0 lg:px-14 xl:px-52"
          />
          <h3 className="self-start md:text-xl text-md lg:px-20 xl:px-64 lg:pt-10 md:pt-6 pt-2">
            How much do you plan to spend on this trip?{" "}
          </h3>
          <BudgetComponent
            form={form}
            className="flex justify-stretch px-0 lg:px-14 xl:px-52 md:pb-10 pb-2"
          />
          <div className="pb-2 w-full lg:w-[60%] xl:w-[30%] grid justify-stretch items-stretch ">
            {!loading ? (
              <Button className="z-10 w-full lg:w-full mb-10" type="submit">
                Submit
              </Button>
            ) : (
              <Button className="z-10 w-full lg:w-full mb-10">
                Loading...
              </Button>
            )}
          </div>
        </form>

      </Form>
    }
      <Dialog open={openModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              Sign in to save your trip plans, see our recommended trips and
              access them on any device.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="default"
              onClick={() => {
                handleLoginWithOAuth();
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
