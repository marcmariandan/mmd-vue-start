  console.log('Script Started')
  
  /*
  const { createApp }  = Vue
  createApp({
    data() {
      return {
        message: 'Salutare Vue!'
      }
    }
  }).mount('#myapp')
 */

  const myappcomponent ={
    data(){
      return {
        cnt : 0
      }
    },
    methods : {
      increment(){
        this.cnt += 1
      },
      reset(){
        this.cnt = 0
      }
    }
  }
  const myapp = Vue.createApp(myappcomponent).mount('#myapp')

  console.log('Script Repeted')
