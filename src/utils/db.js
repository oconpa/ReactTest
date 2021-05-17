import axios from 'axios'

const db = axios.create({
    baseURL: 'API Gateway Base URL'
  });

export const db_getAllRecords = async () => {
    const response = await db.get('/scanAll')

    return response.data
}

export const db_createPost = async (user_id) => {
    const response = await db.put('/user/', {
      user_id
    })
  
    return response.data
}

export const db_updateUser = async (user_id, type) => {
    const response = await db.post('/user/' + user_id.toString(), {
      type
    })

    return response.data
}  
  