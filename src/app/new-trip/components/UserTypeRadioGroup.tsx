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
                  {/* <svg
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
                  </svg> */}
                  <svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904-.727 4.127-6.894-1.215.348-1.97 4.924.868L9.83 8.79zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </g>
                  </svg>
                  <p className="text-sm text-center md:text-base">Solo Trip</p>
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
                  {/* <CheckIcon className="h-6 w-6" /> */}
                  <Image alt='couples' className="h-6 w-6" height={6} width={6} src={CouplesIcon} />
                  <p className="text-sm text-center md:text-base">Couples Trip</p>
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
                  <svg fill="#ffffff" version="1.1" className="h-6 w-6" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.941 123.941" stroke="#ffffff" stroke-width="0.0012394100000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#0d0d0d" stroke-width="4.2139940000000005"> <g> <g> <path d="M62.938,14.356c0.758,6.359,6.161,11.294,12.723,11.294c7.083,0,12.827-5.743,12.827-12.826S82.744,0,75.661,0 C69.009,0,63.54,5.068,62.902,11.552c0.056,0.522,0.091,1.053,0.091,1.591C62.992,13.552,62.971,13.955,62.938,14.356z"></path> <path d="M90.709,33.332c-0.272,1.096-0.817,2.202-1.714,3.252c-2.938,3.454-11.688,7.025-21.244,7.025 c-1.483,0-2.977-0.092-4.458-0.272v22.832c0,0.897-0.108,1.782-0.308,2.649c0.08,0.26,0.167,0.518,0.267,0.769 c-0.037,0.26-0.061,0.521-0.061,0.79l0.004,47.678c0,3.25,2.635,5.884,5.885,5.883c3.251,0,5.884-2.635,5.884-5.884l-0.002-40.917 c0.233,0.012,0.465,0.029,0.701,0.029c0.045,0,0.091-0.004,0.138-0.006l-0.002,40.895c0,3.25,2.633,5.884,5.885,5.884 c3.249,0,5.885-2.634,5.885-5.884V71.195c0.36,0.393,0.788,0.734,1.282,1.004c0.756,0.41,1.57,0.606,2.373,0.606 c1.767,0,3.478-0.94,4.379-2.601C106.088,50.928,98.069,39.496,90.709,33.332z M88.788,61.385V46.107 C90.956,49.886,91.486,54.74,88.788,61.385z"></path> <path d="M72.565,26.358c-0.012,0.002-0.021,0.003-0.032,0.005c-2.433,0.581-4.792,1.83-6.611,3.588 c0.587,0.043,1.18,0.072,1.787,0.072c4.474,0,8.484-1.192,10.438-2.122c0.295-0.513,0.662-0.98,1.079-1.401 c-0.123-0.033-0.246-0.077-0.369-0.108c0,0-1.887-0.278-3.177-0.288C74.393,26.095,72.565,26.358,72.565,26.358z"></path> <path d="M88.185,35.092c2.134-2.505,1.721-5.403,0.365-7.164c-1.679-2.18-4.805-2.587-6.982-0.91 c-0.678,0.521-1.185,1.182-1.509,1.91c-3.228,1.785-13.693,4.734-22.217,0.13c-0.166-0.089-0.333-0.166-0.504-0.235 c-1.577-1.167-3.409-2.012-5.283-2.459c-0.011-0.002-0.021-0.003-0.032-0.005c0,0-1.618-0.26-3.074-0.255 c-1.458,0.004-3.217,0.29-3.217,0.29c-1.603,0.394-3.176,1.072-4.582,1.995c-0.173,0.08-0.348,0.146-0.513,0.248 c-6.298,3.861-25.459,15.614-11.411,41.436c0.901,1.658,2.613,2.601,4.378,2.601c0.803,0,1.621-0.196,2.376-0.606 c0.387-0.212,0.73-0.472,1.038-0.761l-0.026,29.681l-11.021,7.209c-2.72,1.778-3.481,5.426-1.703,8.145 c1.13,1.727,3.012,2.664,4.931,2.664c1.105,0,2.222-0.311,3.215-0.96l4.566-2.986l-0.002,2.994 c-0.002,3.25,2.628,5.886,5.878,5.89c0.002,0,0.004,0,0.006,0c3.248,0,5.883-2.631,5.885-5.879l0.009-10.708l9.951-6.51 c1.661-1.086,2.663-2.935,2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794c0.456-1.148,0.716-2.398,0.716-3.738V40.912 c2.109,0.385,4.216,0.568,6.27,0.568C77.54,41.479,85.682,38.033,88.185,35.092z M35.799,60.636 c-2.328-6.087-1.901-10.641,0-14.236V60.636z M49.603,92.732l-0.837,0.549l0.016-16.121c0.047,0,0.095,0.004,0.143,0.004 c0.233,0,0.463-0.018,0.694-0.028L49.603,92.732z"></path> <circle cx="48.926" cy="12.825" r="12.825"></circle> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M62.938,14.356c0.758,6.359,6.161,11.294,12.723,11.294c7.083,0,12.827-5.743,12.827-12.826S82.744,0,75.661,0 C69.009,0,63.54,5.068,62.902,11.552c0.056,0.522,0.091,1.053,0.091,1.591C62.992,13.552,62.971,13.955,62.938,14.356z"></path> <path d="M90.709,33.332c-0.272,1.096-0.817,2.202-1.714,3.252c-2.938,3.454-11.688,7.025-21.244,7.025 c-1.483,0-2.977-0.092-4.458-0.272v22.832c0,0.897-0.108,1.782-0.308,2.649c0.08,0.26,0.167,0.518,0.267,0.769 c-0.037,0.26-0.061,0.521-0.061,0.79l0.004,47.678c0,3.25,2.635,5.884,5.885,5.883c3.251,0,5.884-2.635,5.884-5.884l-0.002-40.917 c0.233,0.012,0.465,0.029,0.701,0.029c0.045,0,0.091-0.004,0.138-0.006l-0.002,40.895c0,3.25,2.633,5.884,5.885,5.884 c3.249,0,5.885-2.634,5.885-5.884V71.195c0.36,0.393,0.788,0.734,1.282,1.004c0.756,0.41,1.57,0.606,2.373,0.606 c1.767,0,3.478-0.94,4.379-2.601C106.088,50.928,98.069,39.496,90.709,33.332z M88.788,61.385V46.107 C90.956,49.886,91.486,54.74,88.788,61.385z"></path> <path d="M72.565,26.358c-0.012,0.002-0.021,0.003-0.032,0.005c-2.433,0.581-4.792,1.83-6.611,3.588 c0.587,0.043,1.18,0.072,1.787,0.072c4.474,0,8.484-1.192,10.438-2.122c0.295-0.513,0.662-0.98,1.079-1.401 c-0.123-0.033-0.246-0.077-0.369-0.108c0,0-1.887-0.278-3.177-0.288C74.393,26.095,72.565,26.358,72.565,26.358z"></path> <path d="M88.185,35.092c2.134-2.505,1.721-5.403,0.365-7.164c-1.679-2.18-4.805-2.587-6.982-0.91 c-0.678,0.521-1.185,1.182-1.509,1.91c-3.228,1.785-13.693,4.734-22.217,0.13c-0.166-0.089-0.333-0.166-0.504-0.235 c-1.577-1.167-3.409-2.012-5.283-2.459c-0.011-0.002-0.021-0.003-0.032-0.005c0,0-1.618-0.26-3.074-0.255 c-1.458,0.004-3.217,0.29-3.217,0.29c-1.603,0.394-3.176,1.072-4.582,1.995c-0.173,0.08-0.348,0.146-0.513,0.248 c-6.298,3.861-25.459,15.614-11.411,41.436c0.901,1.658,2.613,2.601,4.378,2.601c0.803,0,1.621-0.196,2.376-0.606 c0.387-0.212,0.73-0.472,1.038-0.761l-0.026,29.681l-11.021,7.209c-2.72,1.778-3.481,5.426-1.703,8.145 c1.13,1.727,3.012,2.664,4.931,2.664c1.105,0,2.222-0.311,3.215-0.96l4.566-2.986l-0.002,2.994 c-0.002,3.25,2.628,5.886,5.878,5.89c0.002,0,0.004,0,0.006,0c3.248,0,5.883-2.631,5.885-5.879l0.009-10.708l9.951-6.51 c1.661-1.086,2.663-2.935,2.663-4.918l0.026-25.541c0-0.269-0.024-0.533-0.059-0.794c0.456-1.148,0.716-2.398,0.716-3.738V40.912 c2.109,0.385,4.216,0.568,6.27,0.568C77.54,41.479,85.682,38.033,88.185,35.092z M35.799,60.636 c-2.328-6.087-1.901-10.641,0-14.236V60.636z M49.603,92.732l-0.837,0.549l0.016-16.121c0.047,0,0.095,0.004,0.143,0.004 c0.233,0,0.463-0.018,0.694-0.028L49.603,92.732z"></path> <circle cx="48.926" cy="12.825" r="12.825">
                  </circle> </g> </g> </g></svg>
                  <p className="text-sm text-center md:text-base">Friends Trip</p>
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
                  <svg viewBox="0 0 1024 1024" fill="#ffffff" className="h-6 w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#030303" stroke-width="10.24"><path d="M513.544 65.232c-2.296-1.592-6.008-1.744-8.296-0.144l-112.912 79.592c-2.288 1.608-3.504 0.56-3.504-2.232v-55.128c0-2.792-3.544-4.272-6.344-4.272h-73.352c-2.792 0-3.928 1.48-3.928 4.272v113.696c0 2.792-2.416 6.36-4.712 7.96L23.536 403.768c-2.288 1.608-2.16 3.56 0.632 3.56h123.096c2.792 0 4.992 0.952 4.992 3.744v543.816a5.2 5.2 0 0 0 5.128 5.152h703.168c2.792 0 5.536-2.352 5.536-5.152V411.072c0-2.792 1.784-3.744 4.584-3.744h129c2.8 0 3.2-1.952 0.904-3.544L513.544 65.232z m189.312 316.512a38.256 38.256 0 1 1 0 76.512 38.256 38.256 0 0 1 0-76.512zM522.08 607.928a27.8 27.8 0 1 1 0 55.6 27.8 27.8 0 0 1 0-55.6zM336.952 381.672a38.256 38.256 0 1 1 0 76.512 38.256 38.256 0 0 1 0-76.512z m449.864 294.832a19.936 19.936 0 0 1-19.936-19.92l-0.024-121.744a2.08 2.08 0 0 0-2.072-2.072h-4.224a2.08 2.08 0 0 0-2.072 2.072v341.576a25.712 25.712 0 0 1-51.424 0V675.432c0-1.464-0.68-2.08-2.128-2.08h-4.144c-1.448 0-2.128 0.608-2.128 2.08v200.984a25.712 25.712 0 0 1-51.424 0V534.84a2.08 2.08 0 0 0-2.072-2.072h-4.224a2.08 2.08 0 0 0-2.072 2.072l-16.36 98.936c-0.592 2.24-1.36 3.688-2.28 5.336-4.368 7.8-45.264 87.64-45.264 87.64-0.56 1-1.008 3.888-1.008 3.888s-0.08 147.88-0.2 149.024c-1.304 11.68-11.88 22.472-24.76 22.472-13.632 0-23.536-11.36-23.736-23.8l-0.024-63.024a2.08 2.08 0 0 0-2.072-2.072h-3.112a2.08 2.08 0 0 0-2.072 2.072l-0.008 62.696c-0.2 12.44-12.488 24.128-26.12 24.128s-24.464-11.752-24.664-24.192V728.2c0-1.144-0.464-2.88-1.04-3.872l-45.064-84.6a30.128 30.128 0 0 1-3.2-8.248c-0.08-0.216-30.032-97.776-30.032-97.776-0.176-0.408-1.064-2.12-3.144-2.12h-4.208c-1.184-0.016-1.88 0.992-1.568 2.128l59.64 195.176c0.32 1.136 0 3.128-2.08 3.128h-41.84c-1.184 0-2.048 0.96-2.048 2.144l0.008 142.248a25.712 25.712 0 0 1-51.424 0l-0.008-142.248a2.144 2.144 0 0 0-2.144-2.144h-4.176a2.144 2.144 0 0 0-2.144 2.144l-0.008 142.248a25.712 25.712 0 0 1-51.424 0l0.008-142.248c0-1.184-0.864-2.144-2.048-2.144h-41.84c-2.08 0-2.4-1.992-2.08-3.128l59.64-195.176c0.312-1.136-0.376-2.152-1.568-2.128h-0.008-4.2a3.448 3.448 0 0 0-3.144 2.12l-29.8 97.136a19.944 19.944 0 0 1-38.12-11.696L248 521.584c4.56-15.832 15.648-51.88 46.984-51.88h84.048c33.624 0 42.32 36.048 46.872 51.88 0 0 30.184 98.696 30.304 99.272 4.944 8.664 25.92 52.032 25.92 52.032a3.96 3.96 0 0 0 3.104 1.8h69.848c2.448 0 3.76-0.784 4.92-2.784l24.368-50.544c3.512-24.488 14.608-101.936 14.608-103.312 0-27.288 20.984-48.272 47.224-48.272h113.336c26.232 0 47.224 20.984 47.232 48.272l0.008 138.52a19.976 19.976 0 0 1-19.96 19.936z"></path></g><g id="SVGRepo_iconCarrier"><path d="M513.544 65.232c-2.296-1.592-6.008-1.744-8.296-0.144l-112.912 79.592c-2.288 1.608-3.504 0.56-3.504-2.232v-55.128c0-2.792-3.544-4.272-6.344-4.272h-73.352c-2.792 0-3.928 1.48-3.928 4.272v113.696c0 2.792-2.416 6.36-4.712 7.96L23.536 403.768c-2.288 1.608-2.16 3.56 0.632 3.56h123.096c2.792 0 4.992 0.952 4.992 3.744v543.816a5.2 5.2 0 0 0 5.128 5.152h703.168c2.792 0 5.536-2.352 5.536-5.152V411.072c0-2.792 1.784-3.744 4.584-3.744h129c2.8 0 3.2-1.952 0.904-3.544L513.544 65.232z m189.312 316.512a38.256 38.256 0 1 1 0 76.512 38.256 38.256 0 0 1 0-76.512zM522.08 607.928a27.8 27.8 0 1 1 0 55.6 27.8 27.8 0 0 1 0-55.6zM336.952 381.672a38.256 38.256 0 1 1 0 76.512 38.256 38.256 0 0 1 0-76.512z m449.864 294.832a19.936 19.936 0 0 1-19.936-19.92l-0.024-121.744a2.08 2.08 0 0 0-2.072-2.072h-4.224a2.08 2.08 0 0 0-2.072 2.072v341.576a25.712 25.712 0 0 1-51.424 0V675.432c0-1.464-0.68-2.08-2.128-2.08h-4.144c-1.448 0-2.128 0.608-2.128 2.08v200.984a25.712 25.712 0 0 1-51.424 0V534.84a2.08 2.08 0 0 0-2.072-2.072h-4.224a2.08 2.08 0 0 0-2.072 2.072l-16.36 98.936c-0.592 2.24-1.36 3.688-2.28 5.336-4.368 7.8-45.264 87.64-45.264 87.64-0.56 1-1.008 3.888-1.008 3.888s-0.08 147.88-0.2 149.024c-1.304 11.68-11.88 22.472-24.76 22.472-13.632 0-23.536-11.36-23.736-23.8l-0.024-63.024a2.08 2.08 0 0 0-2.072-2.072h-3.112a2.08 2.08 0 0 0-2.072 2.072l-0.008 62.696c-0.2 12.44-12.488 24.128-26.12 24.128s-24.464-11.752-24.664-24.192V728.2c0-1.144-0.464-2.88-1.04-3.872l-45.064-84.6a30.128 30.128 0 0 1-3.2-8.248c-0.08-0.216-30.032-97.776-30.032-97.776-0.176-0.408-1.064-2.12-3.144-2.12h-4.208c-1.184-0.016-1.88 0.992-1.568 2.128l59.64 195.176c0.32 1.136 0 3.128-2.08 3.128h-41.84c-1.184 0-2.048 0.96-2.048 2.144l0.008 142.248a25.712 25.712 0 0 1-51.424 0l-0.008-142.248a2.144 2.144 0 0 0-2.144-2.144h-4.176a2.144 2.144 0 0 0-2.144 2.144l-0.008 142.248a25.712 25.712 0 0 1-51.424 0l0.008-142.248c0-1.184-0.864-2.144-2.048-2.144h-41.84c-2.08 0-2.4-1.992-2.08-3.128l59.64-195.176c0.312-1.136-0.376-2.152-1.568-2.128h-0.008-4.2a3.448 3.448 0 0 0-3.144 2.12l-29.8 97.136a19.944 19.944 0 0 1-38.12-11.696L248 521.584c4.56-15.832 15.648-51.88 46.984-51.88h84.048c33.624 0 42.32 36.048 46.872 51.88 0 0 30.184 98.696 30.304 99.272 4.944 8.664 25.92 52.032 25.92 52.032a3.96 3.96 0 0 0 3.104 1.8h69.848c2.448 0 3.76-0.784 4.92-2.784l24.368-50.544c3.512-24.488 14.608-101.936 14.608-103.312 0-27.288 20.984-48.272 47.224-48.272h113.336c26.232 0 47.224 20.984 47.232 48.272l0.008 138.52a19.976 19.976 0 0 1-19.96 19.936z"></path></g></svg>
                  <p className="text-sm text-center md:text-base">Family Trip</p>
                </Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
