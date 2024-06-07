import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
import { UrlSite } from '.';

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = localStorage.getItem('auth');
    if (auth) {
        const { token } = JSON.parse(auth);
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(UrlSite(), httpClient);

export default dataProvider;
