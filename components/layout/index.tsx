import {NextComponentType} from "next";
import React from "react";

export interface LayoutProvider {
    getLayout: (page: React.ReactElement) => React.ReactNode
}

export function isLayoutProvider<T extends NextComponentType>(Component: T): Component is LayoutProvider & T {
    return "getLayout" in Component
}