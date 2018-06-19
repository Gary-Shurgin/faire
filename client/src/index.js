import index from './js/Main'
import './css/main.css'
import http from 'http'

http.createServer(onRequest).listen(process.env.PORT || 6000)
