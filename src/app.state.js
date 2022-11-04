import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "auto",
  language: "en",
  showNotification: false,
  installPrompt: null,
  notificationContent: {
    type: null,
    title: null,
    message: null,
  },
  token: null,
  selectedRequest: null,
  selectedRequestData: null,
  deferredPromptPWA: null,
  showInstallPWAPropmpt: false,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    showNotification: (state, action) => {
      state.showNotification = true;
      state.notificationContent = action.payload;
    },
    hideNotification: (state) => {
      state.showNotification = false;
      state.notificationContent = initialState.notificationContent;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setInstallPrompt(state, action) {
      state.installPrompt = action.payload;
    },
    showRequestDetailModal(state, action) {
      const { selectedRequest, selectedRequestData } = action.payload;
      state.selectedRequest = selectedRequest;
      state.selectedRequestData = selectedRequestData;
    },
    hideRequestDetailModal(state) {
      state.selectedRequest = null;
      state.selectedRequestData = null;
    },
    setPWAInstallPrompt(state, action) {
      state.deferredPromptPWA = action.payload;
      state.showInstallPWAPropmpt = true;
    },
    hidePWAInstallPrompt(state) {
      state.showInstallPWAPropmpt = false;
    },
    removePWAInstallPrompt(state) {
      state.deferredPromptPWA = null;
      state.showInstallPWAPropmpt = false;
    },
  },
});

export default slice.reducer;
export const appActions = slice.actions;
