import React from "react";
import { IFormProps } from "./PlacesInputField";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";

interface IUserType {
  usertype: "solo" | "couple" | "friends" | "family";
}

export const UserTypeRadioGroup = ({ form , className}: IFormProps) => {
  return (
    <FormField
      control={form.control}
      name="usertype"
      render={({ field }) => (
        <FormItem className={`w-full md:w-[96%] pr-6 ${className}`}>
          <FormControl>
            <RadioGroup
              defaultValue="solo"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
              onValueChange={(value) => {
                form.setValue("usertype", value as IUserType["usertype"]);
              }}
            >
              <div>
                <RadioGroupItem
                  value="solo"
                  id="solo"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="solo"
                  className="flex flex-row md:flex-col items-center justify-center md:justify-between gap-3 rounded-md border-2 border-muted bg-popover md:p-4 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  <p className="text-xs text-center md:text-base">Solo Trip</p>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="couple"
                  id="couple"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="couple"
                  className="flex flex-row md:flex-col items-center justify-center md:justify-between gap-3 rounded-md border-2 border-muted bg-popover md:p-4 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="h-6 w-6" />
                  <p className="text-xs text-center md:text-base">Couples Trip</p>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="friends"
                  id="friends"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="friends"
                  className="flex flex-row md:flex-col items-center justify-center md:justify-between gap-3 rounded-md border-2 border-muted bg-popover md:p-4 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="h-6 w-6" />
                  <p className="text-xs text-center md:text-base">Friends Trip</p>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="family"
                  id="family"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="family"
                  className="flex flex-row md:flex-col items-center justify-center md:justify-between gap-3 rounded-md border-2 border-muted bg-popover md:p-4 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="h-6 w-6" />
                  <p className="text-xs text-center md:text-base">Family Trip</p>
                </Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
