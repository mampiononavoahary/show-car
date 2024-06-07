import { AuthProvider } from 'react-admin';
import axios from 'axios';
import { UrlSite } from '.';

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        try {
            const response = await axios.post(
                UrlSite("users/login"),
                { email: username, password }
            );
            const { type, accessToken } = response.data;
            if (type === 'Bearer' && accessToken) {
                localStorage.setItem('token', accessToken);
                return Promise.resolve();
            }
            return Promise.reject('Invalid credentials');
        } catch (error) {
            return Promise.reject('Invalid credentials');
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject('Not authenticated');
    },
    checkError: error => {
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
