import styles from './Footer.scss'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref('Jokcy')

    return () => <div class={styles.footer}>Written by {count.value}</div>
  },
})
