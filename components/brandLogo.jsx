/* eslint-disable react/react-in-jsx-scope */
export function BrandLogo() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
                src="../static/ng_logo_sml.png"
                alt="NNSW logo"
                style={{ height: '25px', width: 'auto' }}
            />
            <span style={{ color: '#c91d25', fontWeight: 'bold' }}>NG Sanity Studio</span>
        </div>
    )
}