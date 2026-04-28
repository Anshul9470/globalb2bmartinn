// ============================================================
// CENTRALIZED API SERVICE
// All backend calls go through this file
// Backend URL comes from .env => REACT_APP_API_ENDPOINT
// ============================================================

const BASE_URL = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";

// ── Helper ────────────────────────────────────────────────────
const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || data?.message || "API Error");
  return data;
};

// ── Auth ──────────────────────────────────────────────────────

/** POST /register  — Company registration */
export const registerCompany = (formData) =>
  fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);

/** POST /login */
export const loginUser = (email, password) =>
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);

/** POST /send-otp  — Forgot password */
export const sendOTP = (email) =>
  fetch(`${BASE_URL}/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then(handleResponse);

/** POST /reset-password */
export const resetPassword = (email, otp, newPassword, confirmNewPassword) =>
  fetch(`${BASE_URL}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp, newPassword, confirmNewPassword }),
  }).then(handleResponse);

// ── Buyers ────────────────────────────────────────────────────

/** POST /register-buyer */
export const registerBuyer = (formData) =>
  fetch(`${BASE_URL}/register-buyer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);

// ── Contact / Lead Form ───────────────────────────────────────

/** POST /submit-form  — Contact / enquiry form */
export const submitContactForm = (formData) =>
  fetch(`${BASE_URL}/submit-form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);

/** POST /submit-forml  — Landing-page lead form */
export const submitLandingForm = (formData) =>
  fetch(`${BASE_URL}/submit-forml`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);

// ── User Profile ──────────────────────────────────────────────

/** GET /login?id=<userId> */
export const getUserById = (userId) =>
  fetch(`${BASE_URL}/login?id=${userId}`).then(handleResponse);

/** PUT /update/:id  — Update profile (multipart, use FormData) */
export const updateUserProfile = (userId, formData) =>
  fetch(`${BASE_URL}/update/${userId}`, {
    method: "PUT",
    body: formData, // FormData — no Content-Type header (browser sets boundary)
  }).then(handleResponse);

/** PUT /update-gst/:id */
export const updateGST = (userId, gstNumber) =>
  fetch(`${BASE_URL}/update-gst/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gstNumber }),
  }).then(handleResponse);

/** PUT /update-plan */
export const updatePlan = (userId, plan) =>
  fetch(`${BASE_URL}/update-plan`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, plan }),
  }).then(handleResponse);

/** GET /getUserWithPremiumStatus/:id */
export const getPremiumStatus = (userId) =>
  fetch(`${BASE_URL}/getUserWithPremiumStatus/${userId}`).then(handleResponse);

// ── Leads ─────────────────────────────────────────────────────

/** POST /incrementLeadsViewed/:userId */
export const incrementLeadsViewed = (userId, buyerName, mobileNo, email) =>
  fetch(`${BASE_URL}/incrementLeadsViewed/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ buyerName, mobileNo, email }),
  }).then(handleResponse);

/** GET /viewedLeads/:userId */
export const getViewedLeads = (userId) =>
  fetch(`${BASE_URL}/viewedLeads/${userId}`).then(handleResponse);

// ── Products ──────────────────────────────────────────────────

/** POST /products/add/:userId  (multipart) */
export const addProduct = (userId, formData) =>
  fetch(`${BASE_URL}/products/add/${userId}`, {
    method: "POST",
    body: formData,
  }).then(handleResponse);

/** PUT /products/update/:userId/:productId  (multipart) */
export const updateProduct = (userId, productId, formData) =>
  fetch(`${BASE_URL}/products/update/${userId}/${productId}`, {
    method: "PUT",
    body: formData,
  }).then(handleResponse);

/** GET /products/:userId */
export const getProducts = (userId) =>
  fetch(`${BASE_URL}/products/${userId}`).then(handleResponse);

// ── Call-back / Amount ────────────────────────────────────────

/** POST /request-call  (callRoutes) */
export const requestCall = (formData) =>
  fetch(`${BASE_URL}/request-call`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);
