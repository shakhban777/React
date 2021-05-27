import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   headers: {
      'API-KEY': 'b23bae25-5911-4ad8-a55f-6f54125cdd9f'
   },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance
         .get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   }
};

export const followAPI = {
   followUser(id) {
      return instance
         .post(`follow/${id}`)
         .then(response => response.data);
   },

   unfollowUser(id) {
      return instance
         .delete(`follow/${id}`)
         .then(response => response.data);
   }
};

export const authAPI = {
   me() {
      return instance
         .get(`auth/me`)
         .then(response => response.data);
   }
};

export const profileAPI = {
   getProfile(userId) {
      return instance
         .get(`profile/${userId}`)
         .then(response => response.data);
   },
   getStatus(userId) {
      return instance
         .get(`profile/status/${userId}`)
         .then(response => response.data)
   },
   updateStatus(status) {
      return instance
         .put(`profile/status`, {status: status})
   }
};