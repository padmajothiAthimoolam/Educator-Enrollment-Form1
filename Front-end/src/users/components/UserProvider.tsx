import { FormProvider, useForm } from "react-hook-form";
import { Users } from "./Users";
import { Schema, schema, defaultValues } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from '@hookform/devtools';

export function UserProvider() {
    const methods = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues,
    });

    return (
        <FormProvider {...methods}>
            <Users />
            <DevTool control={methods.control} />
        </FormProvider>
    )
}