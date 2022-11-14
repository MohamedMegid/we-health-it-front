const state = {
  form: {
    email: null,
    phoneNumber: null,
    password: null,
  },
};
const getters = {
  getFormDate(state) {
    return state.form;
  },
};
const actions = {
  setFormData(context, payload) {
    context.commit("step1form", payload);
  },
};
const mutations = {
  step1form: (state, payload) => {
    if (payload.type === "phone") {
      state.form.phoneNumber = payload.phoneNumber;
      state.form.email = payload.email;
      state.form.password = payload.password;
    } else {
      state.form.email = payload.email;
      state.form.phoneNumber = payload.phoneNumber;
      state.form.password = payload.password;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
