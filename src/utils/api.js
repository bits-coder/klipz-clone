import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: "AIzaSyCrl2Zqvf6c0aOaUZGH3gfvoLEcnTJdX8U",
  },
})