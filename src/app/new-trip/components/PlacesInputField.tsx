import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import usePlacesAutoComplete from "use-places-autocomplete";

export interface IFormProps {
  form: UseFormReturn<
    {
      destination: string;
      date: {
        from: Date;
        to: Date;
      };
      usertype: "solo" | "couple" | "friends" | "family";
      budget:
      | "<500"
      | "500-1000"
      | "1000-2000"
      | "2000-5000"
      | "5000-10000"
      | ">10000";
    },
    any,
    {
      destination: string;
      date: {
        from: Date;
        to: Date;
      };
      usertype: "solo" | "couple" | "friends" | "family";
      budget:
      | "<500"
      | "500-1000"
      | "1000-2000"
      | "2000-5000"
      | "5000-10000"
      | ">10000";
    }
  >;
  className?: string;
}

export const PlacesInputField = ({ form }: IFormProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { data, status },
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      types: ["administrative_area_level_3", "country", "administrative_area_level_2", "administrative_area_level_1"],
      // types: ["administrative_area_level_3", "country", "locality", "administrative_area_level_2", "administrative_area_level_1"],
    }
  })


  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name="destination"
      render={({ field }) => (
        <FormItem className="w-full md:w-3/4">
          <FormControl className="border-slate-400 border-2">
            <Command>
              <CommandInput
                placeholder="Search destination..."
                className="h-9 "
                onFocus={() => setOpen(true)}
                onValueChange={(e) => {
                  e.length > 2 ? setValue(e) : null;
                  e.length > 2 ? setOpen(true) : setOpen(false);
                  form.setValue("destination", e);
                }}
                onBlur={() => setOpen(false)}
                value={form.getValues().destination}
              />
              <CommandEmpty
                className={open && data.length >= 1 ? "block" : "hidden"}
              >
                No destination found.
              </CommandEmpty>
              <CommandGroup className={data.length >= 1 ? "block" : "hidden"}>
                {data.map((destination) => (
                  <CommandItem
                    key={destination.description}
                    value={destination.description}
                    onSelect={(currentValue) => {
                      form.setValue("destination", currentValue);
                      setOpen(false);
                      clearSuggestions();
                    }}
                    className="text-start"
                  >
                    {destination.description}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === destination.description
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
