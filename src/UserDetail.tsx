
import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from './usersApi';
import UserForm from './UserForm';

function UserDetail({ userId }: { userId: string }) {
    const { data: user, isLoading, isFetching } = useQuery(
        ['user', userId],
        () => getUser(userId),
        // { enabled: Boolean(userId) }
    );

    const [isEditing, setIsEditing] = React.useState(false);
    if (!userId) {
        return <div>Select a user</div>;
    }
    if (isLoading) {
        return <div>Loading user details</div>
    }
    return (
        <div>
            <button onClick={()=>setIsEditing(!isEditing)}>{isEditing?'CANCEL':'EDIT'}</button>
            {/* <div style={{ display: isFetching ? 'block' : 'none' }}>Background Fetching...</div> */}
            {isEditing && user ? <UserForm user={user} setIsEditing={setIsEditing} />
                :
                <div>
                    <h1>{user?.name}</h1>
                    <p>{user?.details}</p>
                </div>}
        </div>
    )
}

export default UserDetail