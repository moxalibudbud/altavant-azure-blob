"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGeneratedStatus = exports.WIPContainerStatus = exports.AzureBlobContainers = void 0;
var AzureBlobContainers;
(function (AzureBlobContainers) {
    AzureBlobContainers["DATASCAN_ITEM_MASTER"] = "datascan-item-master";
    AzureBlobContainers["DATASCAN_COUNT_FILE"] = "datascan-count-files";
    AzureBlobContainers["DATASCAN_SOH"] = "datascan-soh";
    AzureBlobContainers["GOLD_ITEM_MASTER"] = "gold-item-master";
    AzureBlobContainers["GOLD_COUNT_FILE"] = "gold-count-files";
    AzureBlobContainers["GOLD_SOH"] = "gold-soh";
    AzureBlobContainers["RMS_ITEM_MASTER"] = "rms-item-master";
    AzureBlobContainers["RMS_COUNT_FILE"] = "rms-count-files";
    AzureBlobContainers["RMS_SOH"] = "rms-soh";
    AzureBlobContainers["SIOCS_ITEM_MASTER"] = "siocs-item-master";
    AzureBlobContainers["SIOCS_COUNT_FILE"] = "siocs-count-files";
    AzureBlobContainers["SIOCS_SOH"] = "siocs-soh";
    AzureBlobContainers["WIP"] = "wip";
})(AzureBlobContainers || (exports.AzureBlobContainers = AzureBlobContainers = {}));
var WIPContainerStatus;
(function (WIPContainerStatus) {
    WIPContainerStatus["TO_PROCESS"] = "to_process";
    WIPContainerStatus["WAITING_TO_PROCESS"] = "waiting_to_process";
    WIPContainerStatus["WIP"] = "wip";
    WIPContainerStatus["VALIDATED"] = "validated";
    WIPContainerStatus["REJECTED"] = "rejected";
})(WIPContainerStatus || (exports.WIPContainerStatus = WIPContainerStatus = {}));
var FileGeneratedStatus;
(function (FileGeneratedStatus) {
    FileGeneratedStatus["GENERATED"] = "1";
    FileGeneratedStatus["NOT_GENERATED"] = "0";
    FileGeneratedStatus["LOCALLY"] = "2";
})(FileGeneratedStatus || (exports.FileGeneratedStatus = FileGeneratedStatus = {}));
