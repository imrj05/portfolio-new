export default function OgImage() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '72px 80px',
                backgroundColor: '#050505',
                backgroundImage:
                    'radial-gradient(circle at 12% 0%, rgba(74, 222, 128, 0.14), transparent 42%), radial-gradient(circle at 88% 0%, rgba(39, 39, 42, 0.9), transparent 46%)',
                color: '#ffffff',
                fontFamily: 'Lexend, system-ui, sans-serif',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                    style={{
                        padding: '8px 14px',
                        borderRadius: 999,
                        backgroundColor: '#18181b',
                        color: '#a1a1aa',
                        fontSize: 22,
                        fontWeight: 500,
                    }}
                >
                    portfolio
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
                <p
                    style={{
                        fontSize: 28,
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        color: '#4ade80',
                        textTransform: 'uppercase',
                    }}
                >
                    Full-Stack Developer
                </p>
                <p
                    style={{
                        fontSize: 56,
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Turning complex ideas into reliable digital products.
                </p>
                <p style={{ fontSize: 28, lineHeight: 1.45, color: '#a1a1aa' }}>
                    React, React Native, Node.js, and AWS — shipping fast without sacrificing quality.
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 32, fontWeight: 600 }}>Rajeshwar Kashyap</p>
                <p style={{ fontSize: 22, color: '#71717a' }}>rajeshwar.tech</p>
            </div>
        </div>
    );
}
