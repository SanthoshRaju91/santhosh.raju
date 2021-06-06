import React, {useEffect, useState} from 'react'

export interface LinkPreviewParams {
  url: string
}

export interface Preview {
  title?: string
  description?: string
  domain?: string
  img?: string
}

export const LinkPreview = ({url}: LinkPreviewParams) => {
  const [preview, setPreview] = useState<Preview>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchLinkPreview(url: string) {
      setIsLoading(true)
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({url}),
      })
      const data = await response.json()
      setPreview(data)
      setIsLoading(false)
    }

    fetchLinkPreview(url)
  }, [url])
  return (
    <a href={url} target="__blank" className="link-preview">
      {isLoading ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <span className="link-preview__container">
            <span className="link-preview__container--title">
              {preview.title}
            </span>
            <span className="link-preview__container--description">
              {preview.description}
            </span>
          </span>
          <span className="link-preview__image">
            <img src={preview.img} alt={preview.title} />
          </span>
        </>
      )}
    </a>
  )
}
