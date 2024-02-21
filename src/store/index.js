import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const URL = 'https://api.thedogapi.com/v1'

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': import.meta.env.DOG_API_KEY,
})

export default new Vuex.Store({
  state: {
    dogBreeds: [],
    currentBreed: null,
  },
  mutations: {
    SET_DOG_BREEDS(state, breeds) {
      state.dogBreeds = breeds
    },
    SET_CURRENT_BREED(state, breed) {
      state.currentBreed = breed
    },
  },
  actions: {
    async getBreeds({ commit }) {
      try {
        const breedsResponse = await fetch(`${URL}/breeds?limit=30`, {
          method: 'GET',
          headers,
        })
        const breedsData = await breedsResponse.json()

        const combinedData = await Promise.all(
          breedsData.map(async (breed) => {
            const imagesResponse = await fetch(
              `${URL}/images/search?limit=1&breed_ids=${breed.id}`,
              {
                method: 'GET',
                headers,
              }
            )
            const imagesData = await imagesResponse.json()

            if (imagesData.length > 0) {
              const image = imagesData[0]
              return {
                id: breed.id,
                url: image.url,
                width: image.width,
                height: image.height,
                breed: breed.name,
                bred_for: breed.bred_for,
                breed_group: breed.breed_group,
                life_span: breed.life_span,
                temperament: breed.temperament,
                weight: breed.weight.metric,
              }
            }
            return null
          })
        )
        const filteredData = combinedData.filter((item) => item !== null)

        commit('SET_DOG_BREEDS', filteredData)
      } catch (error) {
        console.error('Error fetching dog breeds:', error)
      }
    },

    async getBreed({ commit }, id) {
      try {
        const breedResponse = await fetch(`${URL}/breeds/${id}`, {
          method: 'GET',
          headers,
        })
        const breedData = await breedResponse.json()

        commit('SET_CURRENT_BREED', breedData)
      } catch (error) {
        console.error('Error fetching dog breed:', error)
      }
    },
  },
})
