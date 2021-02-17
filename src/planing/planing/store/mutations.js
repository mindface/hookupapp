import * as types from './mutation-types'

const mutations = {
  [types.SET_LOADING](state, isLoading) {
    state.loading = isLoading
  },
  [types.POST_DATA_BOX](state, data) {
    state.level_data = data
    return state.level_data
  },
  [types.FACE_PATTERN_DATA_BOX](state, data) {
    state.face_pattern_data = data
    return state.face_pattern_data
  },
  [types.STEATE_DATA_BOX](state, data) {
    state.state_data = data
    return state.state_data
  },
  [types.POST_ITEM_DATA_BOX](state, data) {
    state.post_item_data = data
    return state.post_item_data
  }
}

export default mutations
