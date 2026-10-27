import { useI18n } from '../../template/i18n'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, EmptyState, PageHeader } from '../../template'

export function HomePage() {
  const { t: tr } = useI18n()

  const navigate = useNavigate()
  return (
    <div className="standard-page starter-home page-enter">
      <PageHeader
        size="md"
        eyebrow={
          <Badge variant="primary" appearance="outline">
            Aria UI
          </Badge>
        }
        title={tr('A clear starting point.')}
        description={tr(
          'Your layout, components, and theme are ready. Make room for your application.',
        )}
      />
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
