import { create } from "zustand";


const TokenStore = create((set) => ({
  accessToken: null,
  setToken(token){
    set({ accessToken: token}); //인자로 넘어온 token을 accessToken에 저장
  },
  deleteToken() {
    set({ accessToken: null});
  }
}));
export default TokenStore;