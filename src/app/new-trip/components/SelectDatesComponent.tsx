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
import { Calendar as CalendarIcon } from "lucide-react";
import { addDays, format, subDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export const SelectDatesComponent = ({ form }: IFormProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="flex">
          <FormControl>
            <Popover
              open={isPopoverOpen}
              onOpenChange={(open) => {
                setIsPopoverOpen(open);
                field.onChange(undefined);
              }}
            >
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal border-slate-400 border-2",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, "LLL dd, yy")} -{" "}
                        {format(field.value.to, "LLL dd, yy")}
                      </>
                    ) : (
                      format(field.value.from, "LLL dd, yy")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={field.value?.from}
                  selected={field.value}
                  onSelect={(e) => {
                    field.onChange(e);
                    if (e?.to) {
                      setIsPopoverOpen(false);
                    }
                  }}
                  numberOfMonths={2}
                  disabled={(date) =>
                    date < new Date() || date > addDays(field.value?.from, 10) || date < subDays(field.value?.from, 10)
                  }
                  min={2}
                  showOutsideDays={false}
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
