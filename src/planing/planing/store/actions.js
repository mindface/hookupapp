import * as types from './mutation-types'
import axios from 'axios'

const token = document.getElementsByName("csrf-token")[0].getAttribute("content");

const actions = {
 async levelSettings({dispatch,commit,state}, data) {
  commit(types.SET_LOADING, true)
  const res = await axios.get(`/api/levels`)
  if (res.status > 400) {
    console.log(res.error)
  }
  commit(types.POST_DATA_BOX, res.data)
  setTimeout(() =>{
  commit(types.SET_LOADING, false)
  },1000)
 },
 async facePatternsSettings({dispatch,commit,state}, data) {
  const res = await axios.get(`/api/face_patterns`)
  if (res.status > 400) {
    console.log(res.error)
  }
  commit(types.FACE_PATTERN_DATA_BOX, res.data)
 },
 async stateSettings({dispatch,commit,state}, data) {
  const res = await axios.get(`/api/states`)
   if (res.status > 400) {
     console.log(res.error)
   }
  commit(types.STEATE_DATA_BOX, res.data)
 },
 async getPostItem({dispatch,commit,state}, data) {
  const res = await axios.get(`/api/${data.basePost}s/${data.postId}`, data.createData)
  if (res.status > 400) {
    console.log(res.error)
  }
  commit(types.POST_ITEM_DATA_BOX, res.data)
 },
 async getPostItemDelete({dispatch,commit,state}, data) {
  console.log(data)
  const res = await axios.delete(`/api/${data.basePost}s/${data.postId}`, data)
  if (res.status > 400) {
    console.log(res.error)
  }
 },
 async postGroupUpdate({dispatch,commit,state}, data) {
   const res = await axios.patch(`/api/${data.basePost}s/${data.postId}`, data.createData)
   if (res.status > 400) {
     console.log(res.error)
   }
   commit(types.POST_ITEM_DATA_BOX, res.data)
 },
 async postCardUpdate({dispatch,commit,state}, data) {
  const res = await axios.patch(`/api/${data.basePost}s/${data.postId}`, data.createData)
   if (res.status > 400) {
     console.log(res.error)
   }
   commit(types.POST_DATA_BOX, res.data)
   // if (res.status < 400) {
   //   console(res.error)
   // }
 },
 async postCreateDate({dispatch,commit,state}, data) {
  const token = document.getElementsByName("csrf-token")[0].getAttribute("content");
  axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token' : token,
    'Content-Type': 'application/json',
   }
  const res = await axios.post(`/api/${data.basePost}s`, data.createData)
   if (res.status > 400) {
     console.log(res.error)
   }
   commit(types.POST_DATA_BOX, res.data)
 }
}

export default actions
