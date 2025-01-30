const baseURL = 'http://localhost:8000/api/';

async function makeRequest(endpoint, method = "POST", data = null) {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${baseURL}${endpoint}`, options);

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message };
        }

        return { success: true, data: await response.json() };

    } catch (error) {
        return { success: false, message: error.message };
    }
}

export async function login(email, password) {
    return await makeRequest('login', "POST", { email, password });
}

export async function signup(name, email, password) {
    return await makeRequest('signup', "POST", { name, email, password });
}

export async function getUsers() {
    return await makeRequest('users', "GET");
}
