import Link from 'next/link'

export default () => (
  <main>
    <h1>HKV project template</h1>
    <img src="/static/images/logo.png"/>
    <div>
      <Link href="/map">
        <a>Kaart</a>
      </Link>
      <Link href="/chart">
        <a>Vega</a>
      </Link>
    </div>
  </main>

)