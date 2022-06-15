import '@/assets/styles/footer.scss'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const author = ref('Jokcy')
    return () => <div id="footer">Written by {author.value}</div>
  },
})
