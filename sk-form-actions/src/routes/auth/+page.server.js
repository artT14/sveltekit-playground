export const actions = {
    login: async ({request, cookies})=>{
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if (!username || !password){
            return {message: 'Missing Username or Password'}
        }
        cookies.set('username', username, {path: '/'});
        return {message: 'Logged In'};
    },
    register: async ({request, cookies})=>{
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if (!username || !password){
            return {message: 'Missing Username or Password'}
        }
        cookies.set('username', username, {path: '/'});
        return {message: 'Registered!'};
    },
}