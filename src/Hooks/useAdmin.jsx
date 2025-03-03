import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useAuth();
    const AxiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
          
            const res = await AxiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        },
       
    });

    return [isAdmin,isAdminLoading];
};

export default useAdmin;
