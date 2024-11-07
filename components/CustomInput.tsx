import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
    email: z.string().email(),
  })

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: string,
    label: string,
    placeholder: string
}
  
const CustomInput = ({ control, name, label, placeholder}: CustomInput ) => {
  return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex flex-col w-full">
                        <FormControl>
                            <Input 
                            placeholder={placeholder}
                            className="input-class"
                            type="password"
                            {...field}
                            />                                    
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
            />

  )
}

export default CustomInput