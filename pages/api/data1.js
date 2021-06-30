// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify([{ key: 'HOME',id:'1',value:'NOC APSC',title:'hello' },{ key: 'John sd',value:'aaaaadsa1' },{ key: 'John Doe',value:'aaaaaa1' },{ key: 'John Doe' ,value:'aaaaaa1'},{ key: 'John Doe',value:'aaaaaa1' }]))
}

