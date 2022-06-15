import styles from '@/assets/styles/footer.scss'

export default {
  data() {
    return {
      author: 'Jokcy',
    }
  },
  render() {
    return (
      <div id={styles.footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  },
}
