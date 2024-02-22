import './index.css';
import Vue from 'vue';
import App from './App.vue';
import vkbeautify from 'vkbeautify'

console.log(vkbeautify.xml(''))

new Vue({
  el: '#root',
  render: (h) => h(App),
});

// export async function bootstrap() {
//   console.log('app bootstraped');
// }

// export async function mount() {
//   new Vue({
//     el: '#root',
//     render: (h) => h(App),
//   });
  
//   console.log('mount')
// }

// export async function unmount() {
//   console.log('unmount')
// }
