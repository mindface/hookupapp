
const getters = {
 postDate(state) {
  return state.level_data
 },
 postItemDate(state) {
  return state.post_item_data
 },
 postDateEye(state) {
  let mapData
  if(state.level_data.length > 0){
    mapData = state.level_data.map(value => {
      if(value.guropsnumber === 1){
        return value
      }
    })
  } else {
    mapData = []
  }
  return mapData.filter(Boolean)
 },
 postDateRecognition(state) {
  const mapData = state.level_data.map(value => {
    if(value.guropsnumber === 2){
      return value
    }
  })
  return mapData.filter(Boolean)
 },
 postDateProcessing(state) {
  const mapData = state.level_data.map(value => {
    if(value.guropsnumber === 3){
      return value
    }
  })
  return mapData.filter(Boolean)
 },
 statedDate(state) {
   return state.state_data
 },
 facePatternDate(state) {
   return state.face_pattern_data
 },
}

export default getters
