import { useI18n } from '../../src/template/i18n'
import { Download, Heart, Mail, Plus, Settings2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Button, IconButton, Tabs, toast, type SemanticColor } from '@/template/ui'
import { DemoCard } from './demo-card'

const colors: SemanticColor[] = ['primary', 'secondary', 'success', 'warning', 'error', 'info']
export function ColorButtonDemos() {
  const { t: tr, text: localize } = useI18n()

  const [variant, setVariant] = useState<'contained' | 'outlined' | 'soft' | 'text'>('contained')
  return (
    <>
      <DemoCard
        title={tr('Semantic button variants')}
        description={tr('Four appearances. Six colors, each with a clear purpose.')}
        code={`<Button variant="contained" color="primary">Create</Button>\n<Button variant="outlined" color="success">Approve</Button>\n<Button variant="soft" color="warning">Review</Button>\n<Button variant="text" color="error">Delete</Button>`}
      >
        <div className="demo-stack">
          <Tabs
            variant="pill"
            value={variant}
            onChange={(value) => setVariant(value as typeof variant)}
            items={['contained', 'outlined', 'soft', 'text'].map((value) => ({
              value,
              label: value,
            }))}
          />
          <div className="semantic-button-grid">
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() =>
                  toast.info(
                    tr('{{value0}} · {{value1}}', {
                      value0: localize(color),
                      value1: localize(variant),
                    }),
                  )
                }
              >
                {color}
              </Button>
            ))}
          </div>
          <div className="demo-row demo-row--separated">
            <Button variant={variant} color="primary" size="xs">
              {tr('Extra small')}
            </Button>
            <Button variant={variant} color="primary" size="sm">
              {tr('Small')}
            </Button>
            <Button variant={variant} color="primary" size="md">
              {tr('Medium')}
            </Button>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Icon Button')}
        description={tr('Small actions, with the same thoughtful variants and colors.')}
        code={`<IconButton label="Add project" variant="contained" color="primary">\n  <Plus size={17} />\n</IconButton>\n<IconButton label="Remove" variant="outlined" color="error" shape="circle">\n  <Trash2 size={17} />\n</IconButton>`}
      >
        <div className="demo-stack">
          {(['contained', 'outlined', 'soft', 'text'] as const).map((appearance) => (
            <div className="icon-button-demo-row" key={appearance}>
              <span>{appearance}</span>
              {[Plus, Settings2, Heart, Download, Trash2, Mail].map((Icon, index) => (
                <IconButton
                  key={colors[index]}
                  label={tr('{{value0}} {{value1}} icon', {
                    value0: localize(appearance),
                    value1: localize(colors[index]),
                  })}
                  variant={appearance}
                  color={colors[index]}
                  onClick={() => toast(`${colors[index]} action preview`)}
                >
                  <Icon size={16} />
                </IconButton>
              ))}
            </div>
          ))}
          <div className="demo-row demo-row--separated">
            <IconButton label={tr('Small icon')} size="sm" variant="soft" color="primary">
              <Plus size={14} />
            </IconButton>
            <IconButton
              label={tr('Medium circle icon')}
              shape="circle"
              variant="outlined"
              color="success"
            >
              <Heart size={17} />
            </IconButton>
            <IconButton
              label={tr('Large icon')}
              size="lg"
              shape="circle"
              variant="contained"
              color="primary"
            >
              <Plus size={20} />
            </IconButton>
            <IconButton label={tr('Disabled icon')} disabled>
              <Trash2 size={16} />
            </IconButton>
          </div>
        </div>
      </DemoCard>
    </>
  )
}
