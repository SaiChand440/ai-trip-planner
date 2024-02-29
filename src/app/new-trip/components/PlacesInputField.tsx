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
      username: string;
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
      username: string;
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
  } = usePlacesAutoComplete();

  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem className="w-3/4 pr-6">
          <FormControl className="border-slate-400 border-2">
            <Command>
              <CommandInput
                placeholder="Search framework..."
                className="h-9 "
                onFocus={() => setOpen(true)}
                onValueChange={(e) => {
                  e.length > 2 ? setValue(e) : null;
                  e.length > 2 ? setOpen(true) : setOpen(false);
                  form.setValue("username", e);
                }}
                onBlur={() => setOpen(false)}
                value={form.getValues().username}
              />
              <CommandEmpty
                className={open && data.length >= 1 ? "block" : "hidden"}
              >
                No framework found.
              </CommandEmpty>
              <CommandGroup className={data.length >= 1 ? "block" : "hidden"}>
                {data.map((framework) => (
                  <CommandItem
                    key={framework.description}
                    value={framework.description}
                    onSelect={(currentValue) => {
                      form.setValue("username", currentValue);
                      setOpen(false);
                      clearSuggestions();
                    }}
                    className="text-start"
                  >
                    {framework.description}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.description
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
