import { create } from 'zustand'
import { z } from "zod";
import { formSchema } from '@/components/customcomponents/TripPlanForm';

interface IValues {
    values : z.infer<typeof formSchema>
    setValues : (values : z.infer<typeof formSchema>) => void
}

export const useValuesStore = create<IValues>()((set) => ({
    values: {
        destination: '',
        date: {
            to : new Date(),
            from: new Date()
        },
        budget: '1000-2000',
        usertype: 'solo'
    },
    setValues: (values: z.infer<typeof formSchema>) => set({values})
}));