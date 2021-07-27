import { makeAutoObservable, runInAction } from 'mobx'

class FeedbackStore {
  constructor() {
    makeAutoObservable(this)
  }

  send = async ({ email, subject, message }) => {
    try {
      let result
      const response = await window.rest.post('/email/feedback', {
        email,
        subject,
        message,
      })
      runInAction(() => {
        result = { ...response.data, ok: true }
      })
      return result
    } catch (error) {
      return { ...error, ok: false }
    }
  }
}

export default new FeedbackStore()
