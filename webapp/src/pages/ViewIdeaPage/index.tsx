import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }
  return (
    <div>
      <h1>{ideaNick}</h1>
      <div>
        <p>Idea 1 description</p>
      </div>
    </div>
  )
}
