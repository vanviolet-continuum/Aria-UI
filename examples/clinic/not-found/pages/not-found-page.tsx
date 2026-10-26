import { useI18n } from '../../../../src/template/i18n'
import { ArrowLeft, LayoutDashboard } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/template/ui/button/button'
import { NotFoundState } from '@/template/ui/not-found-state/not-found-state'

export function NotFoundPage() {
  const { t: tr } = useI18n()

  const navigate = useNavigate()
  return (
    <div className="standard-page">
      <NotFoundState
        action={
          <div className="demo-row state-actions">
            <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} />
              {tr('Go back')}
            </Button>
            <Link
              to="/dashboard"
              className="button button--md"
              data-variant="contained"
              data-color="primary"
            >
              <LayoutDashboard size={15} />
              {tr('Back to dashboard')}
            </Link>
          </div>
        }
      />
    </div>
  )
}
