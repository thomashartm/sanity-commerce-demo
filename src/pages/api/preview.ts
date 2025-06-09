import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug = '/' } = req.query
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  res.setPreviewData({})
  res.writeHead(307, { Location: slug as string })
  res.end()
}
