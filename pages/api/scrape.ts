import type { NextApiRequest, NextApiResponse } from 'next'
import rp from 'request-promise'
import $ from 'cheerio'

type Data = {
    title?: string
    description?: string
    img?: string
}

async function scrape(url: string) {
    const siteMeta = {
        title: '',
        description: '',
        img: ''
    }

    console.log("Scrape")
    console.log(url)

    try {
        const html = await rp(url)
        const siteMetadata = $('meta', html)
        for (let i = 0; i < siteMetadata.length; i++) {
            if (siteMetadata[i].attribs && siteMetadata[i].attribs.property === 'og:title') {
                siteMeta.title = siteMetadata[i].attribs.content || ''
            }

            if (siteMetadata[i].attribs && siteMetadata[i].attribs.property === 'og:description') {
                siteMeta.description = siteMetadata[i].attribs.content || ''
            }

            if (siteMetadata[i].attribs && siteMetadata[i].attribs.property === 'og:image') {
                siteMeta.img = siteMetadata[i].attribs.content || ''
            }
        }
        return siteMeta
    } catch (err) {
        console.error(err)
    }
    return siteMeta
}


const scrapeApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "POST")  {
        const body = req.body
        const siteMeta = await scrape(body.url)
        res.status(200).json(siteMeta)
    } else {
        res.status(405).json({})
     }
}

export default scrapeApi