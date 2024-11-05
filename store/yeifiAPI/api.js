import axios from "axios"
const yeifiAPI = axios.create({
  baseURL: "https://yeifi-49905.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return yeifiAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return yeifiAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return yeifiAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_uvcbdh_list(payload) {
  return yeifiAPI.get(`/api/v1/uvcbdh/`)
}
function api_v1_uvcbdh_create(payload) {
  return yeifiAPI.post(`/api/v1/uvcbdh/`, payload)
}
function api_v1_uvcbdh_retrieve(payload) {
  return yeifiAPI.get(`/api/v1/uvcbdh/${payload.id}/`)
}
function api_v1_uvcbdh_update(payload) {
  return yeifiAPI.put(`/api/v1/uvcbdh/${payload.id}/`, payload)
}
function api_v1_uvcbdh_partial_update(payload) {
  return yeifiAPI.patch(`/api/v1/uvcbdh/${payload.id}/`, payload)
}
function api_v1_uvcbdh_destroy(payload) {
  return yeifiAPI.delete(`/api/v1/uvcbdh/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return yeifiAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return yeifiAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return yeifiAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return yeifiAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return yeifiAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return yeifiAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return yeifiAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return yeifiAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return yeifiAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return yeifiAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return yeifiAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_uvcbdh_list,
  api_v1_uvcbdh_create,
  api_v1_uvcbdh_retrieve,
  api_v1_uvcbdh_update,
  api_v1_uvcbdh_partial_update,
  api_v1_uvcbdh_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
