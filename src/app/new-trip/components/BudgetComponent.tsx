import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { IFormProps } from "./PlacesInputField";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, CheckIcon, ChevronDown } from "lucide-react";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

const budgets = [
  { label: "Less than 500 USD", value: "<500" },
  { label: "Between 500 and 1000 USD", value: "500-1000" },
  { label: "Between 1000 and 2000 USD", value: "1000-2000" },
  { label: "Between 2000 and 5000 USD", value: "2000-5000" },
  { label: "Between 5000 and 10000 USD", value: "5000-10000" },
  { label: "More than 10000 USD", value: ">10000" },
] as const;

export const BudgetComponent = ({ form, className }: IFormProps) => {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <FormField
      control={form.control}
      name="budget"
      render={({ field }) => (
        <FormItem className={`w-[96%] pr-6 ${className}`}>
          <Popover open={open} onOpenChange={setOpen}>
            <div className="relative w-full">
              <PopoverTrigger asChild className="w-full">
                <FormControl className="w-full">
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    {field.value
                      ? budgets.find((budget) => budget.value === field.value)
                          ?.label
                      : "Select your budget"}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <div className="absolute w-full">
                <PopoverContent
                >
                  <Command>
                    <CommandGroup>
                      {budgets.map((budget) => (
                        <CommandItem
                          value={budget.label}
                          key={budget.value}
                          onSelect={() => {
                            setOpen(false);
                            form.setValue("budget", budget.value);
                          }}
                        >
                          {budget.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              budget.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </div>
            </div>
          </Popover>
        </FormItem>
      )}
    />
  );
};
