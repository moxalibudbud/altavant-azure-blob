export enum AzureBlobContainers {
  GOLD_ITEM_MASTER = 'gold-item-master',
  GOLD_COUNT_FILE = 'gold-count-file',
  GOLD_SOH = 'gold-soh',
  RMS_ITEM_MASTER = 'rms-item-master',
  RMS_COUNT_FILE = 'rms-count-file',
  RMS_SOH = 'rms-soh',
  SIOCS_ITEM_MASTER = 'siocs-item-master',
  SIOCS_COUNT_FILE = 'siocs-count-file',
  SIOCS_SOH = 'siocs-soh',
  WIP = 'wip'
}

export enum WIPContainerStatus {
  TO_PROCESS = 'to_process',
  WAITING_TO_PROCESS = 'waiting_to_process',
  WIP = 'wip',
  VALIDATED = 'validated',
  REJECTED = 'rejected'
}

export enum FileGeneratedStatus {
  GENERATED = '1',
  NOT_GENERATED = '0',
}