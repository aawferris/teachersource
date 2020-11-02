import api from './apiConfig'

export const getLessons = async () => {
  try {
    const response = await api.get('/lessons')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getLesson = async id => {
  try {
    const response = await api.get(`/lessons/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createLesson = async lesson => {
  try {
    const response = await api.post('/lessons', lesson)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateLesson = async (id, lesson) => {
  try {
    const response = await api.put(`/lessons/${id}`, lesson)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteLesson = async id => {
  try {
    const response = await api.delete(`/lessons/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}