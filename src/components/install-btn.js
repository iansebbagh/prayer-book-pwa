import React, { useEffect, useState } from 'react'

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      // eslint-disable-next-line no-console
      console.log('we are being triggered :D')
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (evt) => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }
  console.log("SSS")
  if (!supportsPWA) {
    return <></>;
  }
  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
    >
      Install App
    </button>
  )
}

export default InstallPWA
