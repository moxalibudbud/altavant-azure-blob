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
    listByTag(query) {
        return this.containerClient.findBlobsByTags(query);
    }
    createBlobClients(blobs) {
        return blobs.map(blob => this.containerClient.getBlobClient(blob.name));
    }
    blobClient(blobName) {
        return this.containerClient.getBlobClient(blobName);
    }
}
exports.Container = Container;
