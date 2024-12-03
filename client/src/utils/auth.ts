import { JwtPayload, jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is installed

class AuthService {
    getProfile(): JwtPayload | null {
        const token = this.getToken();
        if (!token) return null;

        try {
            return jwtDecode<JwtPayload>(token); // Decode the token
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    loggedIn(): boolean {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); // Token exists and is not expired
    }

    isTokenExpired(token: string): boolean {
        try {
            const decoded = jwtDecode<JwtPayload>(token);
            const currentTime = Math.floor(Date.now() / 1000);
            return decoded.exp ? decoded.exp < currentTime : true; // Check if the token has expired
        } catch (error) {
            console.error('Error checking token expiration:', error);
            return true;
        }
    }

    getToken(): string | null {
        return localStorage.getItem('jwt'); // Retrieve token from localStorage
    }

    login(idToken: string): void {
        localStorage.setItem('jwt', idToken); // Save token to localStorage
        window.location.assign('/'); // Redirect to the home page
    }

    logout(): void {
        localStorage.removeItem('jwt'); // Remove token from localStorage
        window.location.assign('/login'); // Redirect to the login page
    }
}

export default new AuthService();

