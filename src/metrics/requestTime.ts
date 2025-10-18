import client from "prom-client";

export const requestTime = new client.Histogram({
    name: "request_duration",
    help: "HTTP request duration in ms",
    labelNames: ["method", "route", "statusCode"],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000]
});