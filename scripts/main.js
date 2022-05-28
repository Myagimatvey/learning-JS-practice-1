import { createApp }  from 'vue';
import App from '../vue-componets/App.vue';
import './modules/DOM-methods'
import './modules/arrays-method'
import './modules/objects-methods'

// --- style ---
import '../style/typography.scss'
import '../style/reset.scss'
import '../style/global.scss'

createApp(App).mount('#app')
