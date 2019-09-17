import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    sidebar: {
      title: 'Top 50 Posts',
      submitted: 'submitted',
      comments_text: 'comments',
      dismiss_post: 'Dismiss Post',
      dismiss_all_posts: 'Dismiss All',
    },
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;