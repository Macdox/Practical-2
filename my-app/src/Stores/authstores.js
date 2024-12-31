import {create} from 'zustand';

import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1";

axios.defaults.withCredentials = true;

export const useAuthstore = create((set) => ({
    teacher: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,


    login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/teacherlogin`, { email, password });
			set({
				isAuthenticated: true,
				teacher: response.data.teacher,
				error: null,
				isLoading: false,
				isVerified : true
			});
			console.log(response.data.teacher);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},


}))