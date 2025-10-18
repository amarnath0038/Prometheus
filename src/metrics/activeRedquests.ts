import client from "prom-client";

export const  activeRequests = new client.Gauge({
    name: "Active_requests",
    help: "Number of active requests"
});