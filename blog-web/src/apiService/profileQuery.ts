import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProfile, getProfiles, createProfile, updateProfile, deleteProfile } from "./profileAPI"
import { FormData } from "../components/UserForm"

export const useQueryGetProfiles = () => {
    return useQuery({
        queryKey: ['profiles'],
        queryFn: getProfiles,
    })

}

export const useQueryGetProfile = (id: any) => {
    // console.log(id, "query");
    return useQuery({
        queryKey: ['profile', id],
        queryFn: () => getProfile(id),
    })
}

export const useMutationCreateProfile = () => {
    return useMutation({
        mutationFn: (formdata: FormData) => createProfile(formdata)
    })
}

export const useMutationUpdateProfile = (updatedData: any) => {
    const queryClient = useQueryClient();
    console.log(updatedData, "updated data.......mutation"
    );
    // console.log(b, "updated data (bbb).......mutation"
    // );

    return useMutation({
        mutationFn: (updatedData: any) => updateProfile(updatedData),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['profiles', variables.id]);
        },
    })
}

export const useMutationDeleteProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: any) => deleteProfile(id),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['profiles', variables.id]);
        },
    })
}
