import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDemo } from '../../../hooks/useDemo'
import { getSoulieInteraction } from '../soulie.engine'
import type { SoulieAction, SoulieAssistantContext, SouliePageEventAction, SoulieIntent } from '../soulie.types'
import { SoulieLauncher } from './SoulieLauncher'
import { SouliePanel } from './SouliePanel'

type SoulieAssistantProps = {
  context: SoulieAssistantContext
  onPageEvent?: (event: SouliePageEventAction['event']) => void
}

export function SoulieAssistant({ context, onPageEvent }: SoulieAssistantProps) {
  const { state } = useDemo()
  const navigate = useNavigate()
  const generatedId = useId()
  const dialogId = `soulie-assistant-${generatedId.replace(/:/g, '')}`
  const dialogRef = useRef<HTMLDialogElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const restoreLauncherFocusRef = useRef(true)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIntent, setSelectedIntent] = useState<SoulieIntent | null>(null)
  const interaction = getSoulieInteraction(context, state)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !isOpen || dialog.open) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    window.requestAnimationFrame(() => titleRef.current?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  function finishClose() {
    setIsOpen(false)
    setSelectedIntent(null)
    const shouldRestoreLauncherFocus = restoreLauncherFocusRef.current
    restoreLauncherFocusRef.current = true
    if (shouldRestoreLauncherFocus) window.requestAnimationFrame(() => launcherRef.current?.focus())
  }

  function closePanel() {
    const dialog = dialogRef.current
    if (dialog?.open) dialog.close()
    else finishClose()
  }

  function runAction(action: SoulieAction) {
    if (action.kind === 'panel') {
      if (action.command === 'reset') setSelectedIntent(null)
      else closePanel()
      return
    }

    restoreLauncherFocusRef.current = false
    closePanel()
    if (action.kind === 'navigate') navigate(action.to)
    else onPageEvent?.(action.event)
  }

  return (
    <>
      <SoulieLauncher
        ref={launcherRef}
        expanded={isOpen}
        controls={dialogId}
        hasSuggestion={interaction.hasActionableRecommendation}
        onOpen={() => setIsOpen(true)}
      />
      <SouliePanel
        dialogRef={dialogRef}
        titleRef={titleRef}
        dialogId={dialogId}
        interaction={interaction}
        selectedIntent={selectedIntent}
        onSelectIntent={setSelectedIntent}
        onAction={runAction}
        onClose={closePanel}
        onDialogClose={finishClose}
      />
    </>
  )
}
