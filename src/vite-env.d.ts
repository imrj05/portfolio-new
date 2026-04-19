/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APTABASE_APP_KEY?: string
    readonly VITE_APTABASE_HOST?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
