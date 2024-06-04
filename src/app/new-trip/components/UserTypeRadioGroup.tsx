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
import Image from "next/image";
import CouplesIcon from '../../../../public/images/svgIcons/CouplesIcon.svg'
interface IUserType {
  usertype: "solo" | "couple" | "friends" | "family";
}

export const UserTypeRadioGroup = ({ form, className }: IFormProps) => {
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
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M160-80v-240h120v240H160Zm200 0v-476q-50 17-65 62.5T280-400h-80q0-128 75-204t205-76q100 0 150-49.5T680-880h80q0 88-37.5 157.5T600-624v544h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
                  </svg>
                  <p className="text-xs text-center md:text-base">
                    Couples Trip
                  </p>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z" />
                  </svg>
                  <p className="text-xs text-center md:text-base">
                    Friends Trip
                  </p>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M720-720q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720ZM680-80v-320q0-40-20.5-72T607-522l35-103q8-25 29.5-40t48.5-15q27 0 48.5 15t29.5 40l102 305H800v240H680ZM500-500q-25 0-42.5-17.5T440-560q0-25 17.5-42.5T500-620q25 0 42.5 17.5T560-560q0 25-17.5 42.5T500-500ZM220-720q-33 0-56.5-23.5T140-800q0-33 23.5-56.5T220-880q33 0 56.5 23.5T300-800q0 33-23.5 56.5T220-720ZM140-80v-280H80v-240q0-33 23.5-56.5T160-680h120q33 0 56.5 23.5T360-600v240h-60v280H140Zm300 0v-160h-40v-160q0-25 17.5-42.5T460-460h80q25 0 42.5 17.5T600-400v160h-40v160H440Z" />
                  </svg>
                  <p className="text-xs text-center md:text-base">
                    Family Trip
                  </p>
                </Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
