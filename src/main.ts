import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

import App from './App.vue';

import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: `${process.env.VUE_APP_API_URL_BASE}/graphql`,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
