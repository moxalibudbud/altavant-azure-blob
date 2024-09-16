"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceClient = createServiceClient;
const service_client_1 = require("./service-client");
function createServiceClient() {
    return (0, service_client_1.serviceClient)();
}
