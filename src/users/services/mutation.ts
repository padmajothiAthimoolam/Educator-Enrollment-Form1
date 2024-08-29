import {useMutation, useQueryClient } from "@tanstack/react-query";
import { Schema } from "../types/schema";
import axios from 'axios';
import { mapData } from "../utils/mapData";
import { omit } from "lodash";

export function useCreateUser() {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn: async (data: Schema) => {
            await axios.post('http://localhost:8080/users', omit(mapData(data), 'variant'));
            
        },

        onSuccess: async () => {
            await queryclient.invalidateQueries({queryKey:['users']})
            alert("User Created")
        },
    })
}

export function useEditUser() {
    const queryclient = useQueryClient();

    return useMutation({
        mutationFn: async (data: Schema) => {
            if(data.variant === 'edit') {
                await axios.put(`http://localhost:8080/users/${data.id}`,omit(mapData(data),'variant'));
                alert('User edited successfully!');
            }
        },
        onSuccess: async(_, variables) => {
            await queryclient.invalidateQueries({ queryKey: ['users']});

            if(variables.variant === 'edit'){
                await queryclient.invalidateQueries({
                    queryKey: ['user', { id: variables.id}],
                })
            }
        },
    })
}