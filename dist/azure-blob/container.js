"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const service_client_1 = require("./service-client");
class Container {
    constructor(containerName) {
        this.serviceClient = (0, service_client_1.serviceClient)();
        this.containerClient = this.serviceClient.getContainerClient(containerName);
    }
    listBlobsFlat() {
        return this.containerClient.listBlobsFlat();
    }
    createBlobClient(blobItems) {
        return blobItems.map(blobItem => this.containerClient.getBlobClient(blobItem.name));
    }
    listByTag(query) {
        return this.containerClient.findBlobsByTags(query);
    }
    blobClient(blobName) {
        return this.containerClient.getBlobClient(blobName);
    }
}
exports.Container = Container;
