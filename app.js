import Alpine from 'alpinejs'
import Hello from './hello.js'
import Notify from './notify.js'

Alpine.data('obj', Hello) // 由 Hello 函數控管 x-data
Alpine.data('notify', Notify)

Alpine.start()

