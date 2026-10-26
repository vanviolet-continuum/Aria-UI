import { useI18n } from '../../../src/template/i18n'
import { Code2, Database, Server } from 'lucide-react'
import { useState } from 'react'
import { Button, ParallelStepper, toast, type ParallelTrack } from '@/template/ui'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'
import { DemoCard } from '../demo-card'

const initialTracks: ParallelTrack[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Code2 size={18} />,
    completed: 1,
    steps: [
      { id: 'design', title: 'Design system' },
      { id: 'components', title: 'Build components' },
      { id: 'accessibility', title: 'Accessibility review' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <Database size={18} />,
    completed: 0,
    steps: [
      { id: 'schema', title: 'Database schema' },
      { id: 'endpoints', title: 'API endpoints' },
      { id: 'tests', title: 'Integration tests' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Server size={18} />,
    completed: 1,
    steps: [
      { id: 'infrastructure', title: 'Infrastructure' },
      { id: 'pipeline', title: 'Delivery pipeline' },
    ],
  },
]
export function ParallelStepperDemo() {
  const { t: tr } = useI18n()

  const [tracks, setTracks] = useState(initialTracks)
  const [complete, setComplete] = useState(false)
  const { runTask } = useMutationTask()
  return (
    <DemoCard
      full
      title={tr('Parallel tracks stepper')}
      description={tr(
        'Independent workstreams, one shared finish. Integration unlocks when every track is ready.',
      )}
      code={`<ParallelStepper tracks={tracks}\n  onProgressChange={(id, completed) => setTracks(previous =>\n    previous.map(track => track.id === id ? { ...track, completed } : track))}\n  onStepSelect={(trackId, stepId) => openStep(trackId, stepId)}\n  integration={{ title: 'Release integration', complete, onIntegrate: submit }}\n/>\n// Track steps can have different lengths; error blocks integration.\n// Wrap async submit with useMutation().runTask to show a global loading overlay.`}
    >
      <div className="demo-stack">
        <ParallelStepper
          tracks={tracks}
          onProgressChange={(id, completed) => {
            setComplete(false)
            setTracks((previous) =>
              previous.map((track) => (track.id === id ? { ...track, completed } : track)),
            )
          }}
          onStepSelect={(trackId, stepId) =>
            toast.info(tr('Workflow checkpoint'), { description: `${trackId} / ${stepId}` })
          }
          integration={{
            title: 'Release integration',
            complete,
            onIntegrate: () => {
              void runTask('Integrating workstreams…', async () => {
                await abortableDelay(1000)
                setComplete(true)
                toast.success(tr('Release integrated'))
              })
            },
          }}
        />
        <div>
          <Button
            size="sm"
            variant="text"
            onClick={() => {
              setTracks(initialTracks)
              setComplete(false)
            }}
          >
            {tr('Reset workflow')}
          </Button>
        </div>
      </div>
    </DemoCard>
  )
}
