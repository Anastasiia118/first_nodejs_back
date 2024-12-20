import express from 'express'
import cors from 'cors'
import {SETTINGS} from './settings'
import {videoController, videoRouter} from './videos/getVideosController'


 
export const app = express() // создать приложение

app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк
 
app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})
app.use(SETTINGS.PATH.BASE, videoRouter) 

app.delete(SETTINGS.PATH.DELETE_ALL, videoController.deleteAllVideos)