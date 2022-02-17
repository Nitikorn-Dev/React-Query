import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3006/'
});
export const getUsers = ()=> api.get<User[]>('/users').then(res=>res.data);
export const getUser = (id:string)=> api.get<User>(`/users/${id}`).then(res=>res.data);
export const updateUser = ({id,...userUpdate}:User)=> api.put(`/users/${id}`,userUpdate).then(res=>res.data);
export default api;