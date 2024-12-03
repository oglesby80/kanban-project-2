import { UserLogin } from "../interfaces/UserLogin"; // Assuming UserLogin has `username` and `password`

const login = async (userInfo: UserLogin): Promise<string> => {
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        if (!response.ok) {
            throw new Error('Invalid login credentials');
        }

        const data = await response.json();
        return data.token; // Return the token from the response
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Rethrow the error so the caller can handle it
    }
};

export { login };


