//JSX: JavaScript + xml
interface HomeProps {
  count: number;
}

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export default function Home(props: { count: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {

  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count,
    }
  }
}
