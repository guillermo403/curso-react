import { Button } from '@mui/material'
import { useQuestionData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/questions'

export default function Footer() {
  const { correct, incorrect, unanswered } = useQuestionData()
  const reset = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginBlockStart: '16px' }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>

      <div style={{ marginBlockStart: '16px' }}>
        <Button onClick={reset}>Resetear juego</Button>
      </div>
    </footer>
  )
}
