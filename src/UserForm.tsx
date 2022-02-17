import React from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { updateUser } from './usersApi';

function UserForm({ user, setIsEditing }: { user: User, setIsEditing: Function }) {

    const [fields, setFields] = React.useState({ ...user });

    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(updateUser, {
        onSuccess: (data) => {
            // queryClient.invalidateQueries(['user',user.id])
            queryClient.setQueriesData(['user', user.id], data);
            setIsEditing(false);
        }
    })


    const handdleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (fields.name === "" || fields.details === "") {
            return alert("plase Enter");
        }
        mutate(fields);
    }

    if (isLoading) {
        return <div>'Saving your changes...'</div>
    }

    return (
        <div style={{ paddingTop: 20 }}>
            UserForm
            <form
                onSubmit={handdleSubmit}
            >
                <label>
                    Name:{' '}
                    <input
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={(e) => setFields(preve => ({ ...preve, name: e.target.value }))}
                        style={{ width: '100%', marginBottom: 20 }} />
                </label>
                <label>
                    Details:{' '}
                    <textarea
                        name="details"
                        value={fields.details}
                        onChange={(e) => setFields(preve => ({ ...preve, details: e.target.value }))}
                        style={{ width: '100%', marginBottom: 20 }} />
                </label>
                <button type='submit'>send</button>

            </form>
        </div>
    )
}

export default UserForm