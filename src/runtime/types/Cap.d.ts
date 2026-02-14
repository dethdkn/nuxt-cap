import type {
  CapConfig,
  CapErrorEvent,
  Cap as CapInstance,
  CapProgressEvent,
  CapResetEvent,
  CapSolveEvent,
  CapWidget,
} from '@cap.js/widget'

type CapClass = typeof CapInstance

export type {
  CapConfig,
  CapInstance,
  CapClass,
  CapWidget,
  CapErrorEvent,
  CapProgressEvent,
  CapResetEvent,
  CapSolveEvent,
}
