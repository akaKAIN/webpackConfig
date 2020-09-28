import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'
import './css/body.css'
import ApiService from '../ApiService'


console.log(`webpack is cool ${config.key}`)
const service = new AppService('TestText')
service.log()
ApiService.say()

