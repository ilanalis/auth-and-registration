const baseURL = 'http://localhost:8000/api/';

async function makeRequest(endpoint, data) {
    try {
        console.log(data);
        const response = await fetch(`${baseURL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const data = await response.json();
            return { success: false, message: data.message };
        }

        return { success: true };

    } catch (error) {
        return { success: false, message: error.message };
    }
}

export async function login(email, password) {
    return await makeRequest('login', { email, password });
}

export async function signup(name, email, password) {
    return await makeRequest('signup', { name, email, password });
}
