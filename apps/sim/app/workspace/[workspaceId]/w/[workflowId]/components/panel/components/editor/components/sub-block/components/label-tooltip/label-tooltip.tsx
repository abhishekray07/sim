import { Tooltip } from '@sim/emcn'
import { CircleInfo } from '@sim/emcn/icons'

interface LabelTooltipProps {
  text: string
}

/** Info icon beside a sub-block label that reveals the block's `tooltip` help text on hover. */
export function LabelTooltip({ text }: LabelTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <span className='inline-flex self-center' aria-label={text}>
          <CircleInfo className='size-3 shrink-0 cursor-help text-muted-foreground' />
        </span>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>{text}</p>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
