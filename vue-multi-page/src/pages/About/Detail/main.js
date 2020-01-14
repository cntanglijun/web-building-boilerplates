import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default {
  name: 'Home',

  data() {
    return {
      step: 1000,
      seconds: 1,
      date: new Date().toLocaleString()
    }
  },

  components: {
    Header,
    Footer
  },

  mounted() {
    this._updateDate()
  },

  methods: {
    async _sleep(seconds) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, this.step * seconds)
      })
    },

    async _updateDate() {
      await this._sleep(this.seconds)
      this.date = new Date().toLocaleString()
      await this.$nextTick()
      this._updateDate()
    }
  }
}
