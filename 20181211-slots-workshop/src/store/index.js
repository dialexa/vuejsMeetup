import Vue from 'vue';
import Vuex from 'vuex';
import { reviews, guid } from '../data.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    reviews: [
      {
        id: '',
        stars: 0,
        text: '',
        createdAt: '',
        user: {
          name: '',
          avatar: '',
        }
      }
    ]
  },
  getters: {
    totalReviews: state => {
      return state.reviews.length;
    },
    reviewCounts: state => {
      const counts = {
        5: 0, 4: 0, 3: 0, 2: 0, 1: 0,
      };

      state.reviews.forEach(review => {
        counts[review.stars]++;
      });

      return counts;
    },
    averageStars: state => {
      const reviewCountMapped = state.reviews.map(review => review.stars);
      const totalStarCount = reviewCountMapped.reduce((total, sum, index) => total + (sum * (index + 1)));
      return Math.floor(totalStarCount/state.reviews.length);
    }
  },
  mutations: {
    addReview(state, review) {
      state.reviews.unshift(review);
    },
    setReviews(state, reviews) {
      state.reviews = reviews;
    }
  },
  actions: {
    loadData({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('setReviews', reviews);
          resolve(reviews)
        }, 2000);
      })
    },
    addReview({ commit }, review) {
      commit('addReview', {
        id: guid(),
        ...review,
      })
    }
  }
});
