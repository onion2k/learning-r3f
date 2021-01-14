import React from 'react'
import t from 'prop-types'

export const Sandbox = ({ url }) => (
    <iframe
        src={`https://codesandbox.io/embed/${url}?fontsize=14&hidenavigation=1&theme=dark`}
        style={{ width:'100%', height:'500px', border:0, borderRadius: '4px', overflow:'hidden'}}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
)

Sandbox.propTypes = {
  url: t.string.isRequired,
}
