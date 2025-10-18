import {Request, Response, NextFunction} from "express";
import { requestCount } from "./requestCount.js";
import { activeRequests } from "./activeRedquests.js";
import { requestTime } from "./requestTime.js";

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    activeRequests.inc();

    res.on("finish", () => {
        const endTime = Date.now();
        const duration = endTime - startTime;

        requestCount.inc({
            method: req.method,
            route:  req.originalUrl,
            statusCode: res.statusCode
        });

        requestTime.observe({
            method: req.method,
            route:  req.originalUrl,
            statusCode: res.statusCode
        }, duration)

        activeRequests.dec();
    });
    next();
}