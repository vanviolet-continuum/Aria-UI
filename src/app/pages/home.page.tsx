import { useI18n } from '../../template/i18n'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, EmptyState } from '../../template'

export function HomePage() {
  const { t: tr } = useI18n()

  const navigate = useNavigate()
  return (
    <div className="standard-page starter-home page-enter">
      <div className="page-intro">
        <Badge variant="primary" appearance="outline">
          Aria UI
        </Badge>
        <h2>{tr('A clear starting point.')}</h2>
        <p>{tr('Your layout, components, and theme are ready. Make room for your application.')}</p>
      </div>
      <section className="starter-welcome">
        <EmptyState
          title={tr('Ready for what comes next.')}
          description={tr('Start with a clean workspace and a theme that feels like you.')}
          action={
            <Button variant="contained" onClick={() => navigate('/settings/appearance')}>
              {tr('Customize your theme') + ' '}
              <ArrowRight size={14} />
            </Button>
          }
        />
      </section>
    </div>
  )
}
