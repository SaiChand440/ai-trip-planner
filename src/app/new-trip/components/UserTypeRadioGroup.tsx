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
        <FormItem className={`w-[96%] pr-6 ${className}`}>
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  Solo Trip
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="mb-3 h-6 w-6" />
                  Couples Trip
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="mb-3 h-6 w-6" />
                  Friends Trip
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CheckIcon className="mb-3 h-6 w-6" />
                  Family Trip
                </Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
