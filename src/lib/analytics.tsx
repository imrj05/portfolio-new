import { AptabaseProvider, useAptabase } from '@aptabase/react'
import { type ReactNode, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type AnalyticsProviderProps = {
    children: ReactNode
}

function sanitizeHost(host?: string) {
    const value = host?.trim()

    if (!value) {
        return undefined
    }

    return value.replace(/\/+$/, '')
}

const analyticsConfig = {
    appKey: import.meta.env.VITE_APTABASE_APP_KEY?.trim(),
    host: sanitizeHost(import.meta.env.VITE_APTABASE_HOST),
}

const analyticsEnabled = Boolean(analyticsConfig.appKey && analyticsConfig.host)

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
    if (!analyticsEnabled || !analyticsConfig.appKey || !analyticsConfig.host) {
        return <>{children}</>
    }

    return (
        <AptabaseProvider
            appKey={analyticsConfig.appKey}
            options={{ host: analyticsConfig.host, isDebug: import.meta.env.DEV }}
        >
            {children}
        </AptabaseProvider>
    )
}

export function AptabasePageTracker() {
    const location = useLocation()
    const { trackEvent } = useAptabase()
    const lastTrackedPathRef = useRef('')

    useEffect(() => {
        if (!analyticsEnabled) {
            return
        }

        const currentPath = `${location.pathname}${location.search}${location.hash}`

        if (lastTrackedPathRef.current === currentPath) {
            return
        }

        lastTrackedPathRef.current = currentPath

        void trackEvent('page_view', {
            hash: location.hash || '(none)',
            path: location.pathname,
            search: location.search || '(none)',
            title: document.title,
        })
    }, [location.hash, location.pathname, location.search, trackEvent])

    return null
}
