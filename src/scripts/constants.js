export const KeyCodes = {
  escape: 27
};

export const SupportFlags = {
  none: 0,
  audio: 1,
  touch: 2
};

export const AppState = {
  default: 0,
  loading: 1,
  loaded: 2,
  failed: 3,
  ready: 4
};

export const PlayerState = {
  default: 0,
  playing: 1,
  paused: 2
};

export const GridButtonState = {
  default: 0,
  active: 1,
  inactive: 2,
  waiting: 3
};

export const OverlayState = {
  default: 0,
  section1: 1,
  section2: 2
};

export const WizardState = {
  default: 0,
  step1: 1,
  step2: 2,
  step3: 3,
  step4: 4
};

export const DialogState = {
  default: 0,
  dialog1: 1,
  dialog2: 1
};

export const ErrorState = {
  default: 0,
  error1: 1,
  error2: 2
};

export const Errors = {
  audioContextUnsupported: "Audio context unsupported."
};