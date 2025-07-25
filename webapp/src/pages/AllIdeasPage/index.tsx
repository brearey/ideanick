import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading ideas</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All ideas</h1>
      <div>
        {data?.ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2>{idea.name}</h2>
              <p>{idea.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
