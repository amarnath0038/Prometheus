import client from "prom-client";

export const requestCount = new client.Counter({
    name: "Total_http_requests",
    help: "Toal number of htttp requests",
    labelNames:["method", "route", "statusCode"]
});